import React, {Component} from 'react';
import PhotoThumbnail from "./PhtoThumbnail";
import {STATIC_PATH} from '../backend';
import ToolbarButtonList from "./ToolbarButtonsList";
import ToolbarIcon from "./ToolbarIcon";
import {BrowserRouter, Router} from 'react-router-dom';
import {Route} from "react-router";

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="material" id="toolbar-wrapper">
                <div id="toolbar">
                    <h3 id="title-site">HouseMD</h3>
                    <div id="profile-view">
                        <a href="#">
                            <PhotoThumbnail url={STATIC_PATH + '/img/user.png'}/>
                            <p id="nickname-tb">HouseMD man</p>
                        </a>

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
                            </div>
                    </ToolbarButtonList>
                </div>
            </div>
        )
    }
}

export default Toolbar;