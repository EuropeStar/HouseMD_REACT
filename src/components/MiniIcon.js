import React from 'react';

function MiniIcon(props) {
    return (
        <span className={'material-icons'} style={{fontSize: 'inherit'}}>{props.type}</span>
    )
}

export default MiniIcon