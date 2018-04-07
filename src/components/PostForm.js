import React from 'react';

function PostForm(props) {
    return (
        <form className="form-group" method={props.method} action={props.action}>
            {props.children}
        </form>
    )
}

export default PostForm;