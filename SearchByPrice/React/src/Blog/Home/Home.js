import React, { Component } from 'react';
import './Home.css';
import Post from '../Post/Post';

class Home extends Component {
    state = {
      
    }

    postSelectedHandler = (id) => {
        console.log("Homepage : " , id)
    }

    render () {
        return (
            <div className="Posts">
                <Post key="1" id="1" title="Hello this is my home page component1" clicked={() => this.postSelectedHandler("1")} />
                <Post key="2" id="2" title="Hello this is my home page component2" clicked={() => this.postSelectedHandler("1")} />
                <Post key="3" id="3" title="Hello this is my home page component3" clicked={() => this.postSelectedHandler("1")} />
            </div>
        );
    }
}

export default Home;