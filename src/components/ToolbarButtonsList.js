import React from 'react';

function ToolbarButtonList(props) {
    return (
        <div id="toolbar-btns">
            <ul style={{padding: '0', margin: 'auto'}}>
                {props.children}
            </ul>
        </div>
    )
}

export default ToolbarButtonList;