import LoginForm from "../components/LoginForm";
import React from 'react'
import PhotoThumbnail from "../components/PhtoThumbnail";

function Header() {
    return (
        <div className="header-wrapper material">
            <div className="header">
                <h3 id='header-site-title'>HouseMD</h3>
            </div>
        </div>
    )
}

function TextView() {
    return (
        <div id="about-site">
            <h2>Добро пожаловать в медицискую систему HouseMD.</h2>
            <div className="hr"></div>
            <p className="plain-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
                diam ante. Proin sit amet magna et nibh suscipit accumsan dignissim vitae arcu. Nam id
                turpis bibendum tellus egestas rutrum. Mauris arcu leo, pretium sit amet est quis,
                pharetra interdum nulla.</p>
            <ul id={'image_list'}>
                <li className={'linear'}><PhotoThumbnail/></li>
                <li className={'linear'}><PhotoThumbnail/></li>
                <li className={'linear'}><PhotoThumbnail/></li>
            </ul>
        </div>
    )
}

function SignIn(props) {
    return (
        <div>
            <div className='background'></div>
            <div id='root'>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-lg-7'>
                            <TextView/>
                        </div>
                        <div className="col-lg-3 offset-lg-1" id="login-form">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;