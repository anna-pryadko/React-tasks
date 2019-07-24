import React, { Component } from 'react';
import './Contact.css';
import Post from '../Post/Post';

class Contact extends Component {
    state = {
      
    }

    postSelectedHandler = (id) => {
        
    }

    render () {
        return (
            <div className="Posts">
                <Post key="1" title="Hello this is contact component" clicked={() => this.postSelectedHandler("1")} />
            </div>
        );
    }
}

export default Contact;