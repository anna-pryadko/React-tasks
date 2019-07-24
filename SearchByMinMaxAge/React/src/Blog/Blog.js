import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    state = {

    }

    render () {
        return (
            <div className="Blog MainBlog">
                <nav className="navbar navbar-default mt-4">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand blogTitle" href="#">John Bryce Fullstack 2018 Blog</a>
                        </div>
                        <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <hr></hr>
               
                <Route path="/" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/posts" exact component={Posts} />
                <Route path="/fullPost/:id" component={FullPost} />

                {/* routes :  npm install --save react-router react-router-dom */}
            </div>
        );
    }
}

export default Blog;