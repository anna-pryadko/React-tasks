import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import Input from './Components/Input';
import axios from "axios";

import socketIOClient from "socket.io-client";

class App extends Component {
  state = {
    name:"",
    age:"",
    mail:"",
    id:"",
    foundStudents: [],
    selectStudent:[],
    endpoint: "localhost:4002",
    color: 'orange',
    studentForInsert: {},

  };


  // sending sockets
  ButtonInsert = () => {
    // let studentForInsert={};
   let name=this.state.name;
    let age=this.state.age;
    let mail=this.state.mail;
    // this.setState({ studentForInsert: studentForInsert });

    const socket = socketIOClient(this.state.endpoint);
    socket.emit('insert student', name,age,mail) // change 'red' to this.state.color 
    
  }

componentDidMount=()=>{
  this.getAllStudents();
  
  const socket = socketIOClient(this.state.endpoint);
    
      socket.on('insert student', (studentForInsert) => {
            
          console.log("studentForInsert:  ",studentForInsert);

          let AllStudOld=this.state.foundStudents;
          AllStudOld.push(studentForInsert)
         
          this.setState({ foundStudents: AllStudOld });
    
      })

}

getAllStudents=()=>{
  var self=this;
  axios.get(`http://localhost:4002/getStudents`)
  .then(function(response){
    
    console.log(response.data);
    //console.log(self.state.arrPosts);
   self.setState({ foundStudents: response.data });
  })
  .catch(function(error){
     console.log(error);
  });
}

  render() {
    return (
      <div className="container">
      <h1>Add Student:</h1>

        <div className="row">
        <Input></Input> 
        </div>
        
        <div className="row">
        <h3>All students: </h3>
        </div>

        <div className="row">        
        <Table data={this.state.foundStudents}></Table>         
        </div> 
       
      </div>
    );
  }
}

export default App;
