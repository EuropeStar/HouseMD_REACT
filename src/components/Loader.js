import React from 'react';
import 'loaders.css/loaders.min.css'

function Loader(props) {
    let stl = {
        marginTop: '20px',
        marginBottom: '20px',
        height: '100%',
        textAlign: 'centered'
    };
    return (
        <div className={'text-centered loading2'} style={stl}>
        </div>
    )
}

export default Loader;