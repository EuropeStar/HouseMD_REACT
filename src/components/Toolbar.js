import React, {Component} from 'react';
import PhotoThumbnail from "./PhtoThumbnail";
import {DEFAULT_IMG, PATH, STATIC_PATH, URLS} from '../backend';
import ToolbarButtonList from "./ToolbarButtonsList";
import ToolbarIcon from "./ToolbarIcon";
import {BrowserRouter, Link, Router} from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from 'react-redux'
import {logout} from '../actions/index'
import LogoutIcon from "./LogoutIcon";

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }

    handleLogOut(e) {
        this.props.logout();
        e.preventDefault();
    }

    render() {
        return (
            <div className="material" id="toolbar-wrapper">
                <div id="toolbar">
                    <h3 id="title-site">HouseMD</h3>
                    <div id="profile-view">
                        <Link to={'/profile'}>
                            <PhotoThumbnail url={STATIC_PATH + DEFAULT_IMG}/>
                            <p id="nickname-tb">{this.props.fullName}</p>
                        </Link>
                    </div>
                    <ToolbarButtonList>
                            <div>
                                {
                                    this.props.routers.map((key, index) => {
                                        return <ToolbarIcon
                                            key={index}
                                            url={key.path}
                                            title={key.title}
                                            type={key.type}
                                        />
                                    })
                                }
                                <LogoutIcon title={'Выход'} type={'lock'} handleLogOut={this.handleLogOut.bind(this)}/>
                            </div>
                    </ToolbarButtonList>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fullName: state.auth.fullName,
    isAuthenticated: state.auth.isAuthenticated,
    avatar: state.auth.avatar
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toolbar));