import React, {Component} from 'react';
import './components/LoginForm'
import './css/bootstrap.min.css';
import './css/style.css';
import './css/design.css';
import SignIn from "./Templates/Sign_in";
import UserConfirmation from './Templates/Confirm';
import {PATH} from './backend'
import Research from "./Templates/Research";
import ResearchHistory from "./Templates/ResearchHistory";
import Settings from "./Templates/Settings";
import MainTemplate from "./Templates/MainTemplate";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'login': ''
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <MainTemplate/>
            </div>
        );
    }
}

export default App;
