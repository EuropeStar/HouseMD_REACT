import React from 'react';

function PostForm(props) {
    return (
        <form className="form-group">
            {props.children}
        </form>
    )
}

export default PostForm;