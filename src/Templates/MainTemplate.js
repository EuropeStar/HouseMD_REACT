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
import {connect} from "react-redux";

class MainTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Routers = [
            {
                path: '/dashboard',
                title: 'Главная доска',
                type: 'home',
                component: () => <Dashboard/>
            },
            {
                path: '/research',
                title: 'Исследование',
                type: 'search',
                component: () => <Research/>
            },
            {
                path: '/history',
                title: 'История исследований',
                type: 'assignment',
                component: () => <ResearchHistory/>
            },

            {
                path: '/notifications',
                title: 'Уведомления',
                type: 'notifications',
                component: () => <Notifications/>
            },

        ];
        if (this.props.isChief) {
            Routers.extend([
                {
                    path: '/add_doctor',
                    title: 'Добавить доктора',
                    type: 'person_add',
                    component: () => <AddUser/>
                },
                {
                    path: '/administration',
                    title: 'Управление персоналом',
                    type: 'group',
                    component: () => <Administrations/>
                },
            ])
        }
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

export const mapStateToProps = (state) => ({
    isChief: state.auth.isChief
});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps)(MainTemplate);