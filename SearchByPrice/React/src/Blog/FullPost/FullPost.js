import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: ""
    }

    componentDidMount () {
        console.log("this.props : " , this.props.match.params.id , this.props )
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
        } );
    }

    render () {
        let post = "";
        
        if ( this.state.loadedPost != "") {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;