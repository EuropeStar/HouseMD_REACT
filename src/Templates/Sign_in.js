import LoginForm from "../components/LoginForm";
import React from 'react'

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
            <h2>Wellcome to HouseMD medicine system.</h2>
            <div className="hr"></div>
            <p className="plain-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
                diam ante. Proin sit amet magna et nibh suscipit accumsan dignissim vitae arcu. Nam id
                turpis bibendum tellus egestas rutrum. Mauris arcu leo, pretium sit amet est quis,
                pharetra interdum nulla. Integer et enim laoreet lacus congue rutrum et vitae mauris.
                Nulla facilisi. Proin congue lorem risus, ac pellentesque nisi bibendum vel. Vivamus
                fermentum in justo sed euismod. Duis cursus volutpat dolor, nec tempor erat accumsan in.
                Integer vulputate porta nisl, id efficitur augue tempor eget. Donec ut nisl non erat
                accumsan malesuada in eget tellus. Nulla facilisis imperdiet nisl sed tristique. Morbi
                eu aliquam nisi.</p>
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
                        <div className="col-lg-5" id="login-form">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;