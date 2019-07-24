import React, { Component } from 'react';
import axios from 'axios';

import Post from '../Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( 'https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                const posts1 = response.data.slice(0, 14);
                this.setState({posts: posts1});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    
    render () {
        let posts = this.state.posts.map(post => {
            return <Post 
                key={post.id}
                id={post.id} 
                title={post.body}
                clicked={() => this.postSelectedHandler(post.id)} />;
        });
      
        return (
            <div className="Posts">
                {posts}
            </div>
        );
    }
}

export default Posts;