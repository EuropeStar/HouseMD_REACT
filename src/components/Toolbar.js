import React, {Component} from 'react';
import PhotoThumbnail from "./PhtoThumbnail";
import {PATH, STATIC_PATH, URLS} from '../backend';
import ToolbarButtonList from "./ToolbarButtonsList";
import ToolbarIcon from "./ToolbarIcon";
import {BrowserRouter, Link, Router} from 'react-router-dom';
import {withRouter} from "react-router";
import {connect} from 'react-redux'
import {logout} from '../actions/index'
import LogoutIcon from "./LogoutIcon";
import {getUserName} from "../actions";

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }

    handleLogOut(e) {
        this.props.logout();
        e.preventDefault();
    }

    componentDidMount() {
        if (this.props.isAuthenticated) {
            let token = localStorage.getItem('token');
            fetch(PATH + URLS.USERNAME, {
                credentials: 'include',
                method: 'GET',
                headers: {
                    'Authorization': `JWT ${token}`
                }
            })
                .then(resp => resp.json())
                .then(resp => {
                this.props.getUserName(resp.username);
            })
        }
    }

    render() {
        return (
            <div className="material" id="toolbar-wrapper">
                <div id="toolbar">
                    <h3 id="title-site">HouseMD</h3>
                    <div id="profile-view">
                        <Link to={'/profile'}>
                            <PhotoThumbnail url={STATIC_PATH + '/img/user.png'}/>
                            <p id="nickname-tb">{this.props.userName}</p>
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
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    getUserName: (u) => dispatch(getUserName(u)),
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toolbar));