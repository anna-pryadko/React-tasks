import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import Login from './Login.js'; 
import Home from './Home.js'; 
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import axios from "axios";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class App extends Component {
  state = {
    username:"",
    password:"",
    
    id:"",
    foundStudents: [],
    selectStudent:[],
    endpoint: "http://localhost:4002",
    color: 'orange',
    studentForInsert: {},

    checkSession:"",
    isLogin:"",
  };

  componentDidMount=()=>{
    var self=this;
    axios.get(`http://localhost:4000/logged`,{withCredentials:true})
    .then(function(response){
      
      console.log("response.data:  ",response.data);
      //console.log(self.state.arrPosts);
     self.setState({ checkSession: response.data });
    })
    .catch(function(error){
       console.log("Error",error);
    });
    console.log("checkSession  :",this.state.checkSession);

  
  }

  render() {
    const loggedIn = this.state.checkSession === '1';
    console.log("LOGGWD", loggedIn)
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route exact path="/" render={() => (
            loggedIn ? (
              < Home/>
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
