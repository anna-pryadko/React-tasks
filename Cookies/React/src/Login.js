import React, { Component } from 'react';
import axios from "axios";



class Login extends Component {
  state = {
    name:"",
    password:"",
    
    id:"",
    foundStudents: [],
    selectStudent:[],
    endpoint: "localhost:4002",
    color: 'orange',
    studentForInsert: {},

    checkCookie:"",
    isLogin:"",
  };
  
  ButtonLogin= () => {
    
    let name=this.state.name;
    let password=this.state.password;
       
    var self=this;
    axios.get(`http://localhost:4000/checkLogin?name=${name}&password=${password}`,{withCredentials:true})
    .then(function(response){
      
      console.log(response.data);
      
     self.setState({ isLogin: response.data });
    })
    .catch(function(error){
       console.log(error);
    });
    }
    
    handleChange=(event,type)=> {
      if (type === 0){
        this.setState({name: event.target.value});
        console.log("change",this.state.name)
      }
      if (type === 1) {
        this.setState({password: event.target.value});
        console.log("change",this.state.password)
      }
      
    }

    render() {
        return (
        <div>  
        <div className="container"> 
        <div className="row">
        
        <label htmlFor="name">
          Please, enter the name.
        </label>
        <input
          type="text"
          id="name"
          onChange={(event) => this.handleChange(event,0)}
          value={this.state.name}
        />
       </div> 
       <div className="row">
        <label htmlFor="age">
          Please, enter the password.
        </label>
        <input
          type="text"
          id="password"
          onChange={(event) => this.handleChange(event,1)}
          value={this.state.password}
        />
        </div>
        
        <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonLogin()}>Login</button>
        {/* <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonLogoff()}>Logoff</button>
         */}
        </div>  
        </div>  

            );
        }
      }
  
  export default Login;
  