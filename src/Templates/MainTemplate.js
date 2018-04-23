import React, {Component} from 'react';
import FullHeightContainer from "../components/FullHeightContainer";
import Toolbar from "../components/Toolbar";
import RightSideView from "../components/RightSideView";
import Research from "./Research";
import ResearchHistory from "./ResearchHistory";
import Dashboard from './Dashboard'
import {Redirect, Route, Switch} from "react-router-dom";
import SignIn from "./Sign_in";
import Notifications from "./Notifications";
import AddUser from "./AddUser";
import Settings from "./Settings";
import Administrations from "./Administrations";
import NotFound from "./NotFound";

class MainTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const Routers = [
            {
                path: '/dashboard',
                title: 'Dashboard',
                type: 'home',
                component: () => <Dashboard/>
            },
            {
                path: '/research',
                title: 'Research',
                type: 'search',
                component: () => <Research/>
            },
            {
                path: '/history',
                title: 'Research history',
                type: 'assignment',
                component: () => <ResearchHistory/>
            },

            {
                path: '/notifications',
                title: 'Notifications',
                type: 'notifications',
                component: () => <Notifications/>
            },
            {
                path: '/add_doctor',
                title: 'Add doctor',
                type: 'person_add',
                component: () => <AddUser/>
            },
            {
                path: '/administration',
                title: 'Manage doctors',
                type: 'group',
                component: () => <Administrations/>
            },
        ];
        return (
            <FullHeightContainer container={'false'}>
                <div>
                    <Toolbar routers={Routers}/>
                    <RightSideView>
                        <Switch>
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
                            <Route component={() => <Settings/>} path={'/profile'}/>
                            <Route path={'/404'} component={() => <NotFound/>}/>
                            <Redirect from={'/'} to={'/dashboard'}/>
                            <Redirect to={'/404'}/>
                        </Switch>
                    </RightSideView>
                </div>
            </FullHeightContainer>
        )
    }
}

export default MainTemplate;