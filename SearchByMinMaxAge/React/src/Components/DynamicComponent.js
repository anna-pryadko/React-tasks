import React from 'react';

const dComponent = (props) => {
    return (
        <div>
            <p>my name is {props.name} and my mail is {props.mail}</p>
            <h1>{props.children}</h1>
        </div>
    );
}

export default dComponent