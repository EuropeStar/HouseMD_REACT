import React from 'react';

function FullHeightContainer(props) {
    return (
        props.container === 'true' ?
            <div className={'full-h container'}>
                {props.children}
            </div> :
            <div className={'full-h'}>
                {props.children}
            </div>
    )
}

export default FullHeightContainer;