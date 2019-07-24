import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Post.css';


const post = (props) => {
    console.log("Props : " ,props,props.id)
    return <div className="Post">
        <article>
            <Link  to={{ pathname: "fullPost/" + props.id  }}>
            <h1>{props.title}</h1></Link>
        </article>
    </div>
}
export default post;