import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import Login from './Login.js'; 
import Home from './Home.js'; 
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'

import axios from "axios";



class App extends Component {
  state = {
    name:"",
    password:"",
    
    id:"",
    foundStudents: [],
    selectStudent:[],
    endpoint: "http://localhost:4002",
    color: 'orange',
    studentForInsert: {},

    checkCookie:"",
    isLogin:"",
  };

  componentDidMount=()=>{
    var self=this;
    axios.get(`http://localhost:4000/checkCookie`,{withCredentials:true})
    .then(function(response){
      
      console.log(response.data);
      //console.log(self.state.arrPosts);
     self.setState({ checkCookie: response.data });
    })
    .catch(function(error){
       console.log("Error",error);
    });
    console.log(this.state.checkCookie);

  
  }

  render() {
    const loggedIn = this.state.checkCookie === '1';
    console.log("LOGGWD", loggedIn)
    return (
      <BrowserRouter>
        <Switch>
      <Route path="/anna" exact component={Home}/>
        <Route exact path="/" render={() => (
          loggedIn ? (
          <Home/>
        ) : (
            <Login/>
        )
      )}/>
        </Switch>
          
      
      

      
      
      </BrowserRouter>
    );
  }
}

export default App;
