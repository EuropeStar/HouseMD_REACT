import React, {Component} from 'react';
import FullHeightContainer from "../components/FullHeightContainer";
import Toolbar from "../components/Toolbar";
import RightSideView from "../components/RightSideView";
import Research from "./Research";
import ResearchHistory from "./ResearchHistory";
import Dashboard from './Dashboard'
import {Route} from "react-router-dom";
import SignIn from "./Sign_in";
import Notifications from "./Notifications";

class MainTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wrapping: true
        }
    }

    render() {

        const Routers = [
            {
                path: '/',
                title: 'Dashboard',
                type: 'home',
                exact: true,
                component: () => <Dashboard/>
            },
            {
                path: '/research',
                title: 'Research',
                type: 'search',
                exact: false,
                component: () => <Research/>
            },
            {
                path: '/history',
                title: 'Research history',
                type: 'assignment',
                exact: false,
                component: () => <ResearchHistory/>
            },
            {
                path: '/logout',
                title: 'Log out',
                type: 'lock_open',
                exact: false,
                component: () => <SignIn/>
            },
            {
                path: '/notifications',
                title: 'Notifications',
                type: 'notifications',
                component: () => <Notifications/>
            }
        ];
        return (
            <FullHeightContainer container={'false'}>
                <div>
                    <Toolbar routers={Routers}/>
                    <RightSideView>
                        {
                            Routers.map((key, index) => {
                                return <Route
                                    key={index}
                                    path={key.path}
                                    exact={key.exact}
                                    component={key.component}
                                />;
                            })
                        }
                    </RightSideView>
                </div>
            </FullHeightContainer>
        )
    }
}

export default MainTemplate;