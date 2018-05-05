import React from 'react';

function LogoutIcon(props) {
    return (
        <a href={'#'} onClick={props.handleLogOut}>
            <li><i className="material-icons tb-i">{props.type}</i>
                <p style={{color: 'white'}}>{props.title}</p>
            </li>
        </a>
    )
}

export default LogoutIcon