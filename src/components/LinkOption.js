import React from 'react';

function LinkOption(props) {
    return <a href={props.href} className="link">{props.title}</a>
}

export default LinkOption;