import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
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
  
// send=()=>{
//   const socket = socketIOClient(this.state.endpoint);
//   socket.emit('insert student', this.state.studentForInsert) // change 'red' to this.state.color 
// }

componentDidMount=()=>{
  this.getAllStudents();
  
  const socket = socketIOClient(this.state.endpoint);
    
      socket.on('insert student', (studentForInsert) => {
          
          let AllStudOld=this.state.foundStudents;
          AllStudOld.push(studentForInsert)
         
          this.setState({ foundStudents: AllStudOld });

          console.log(studentForInsert);
          
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

  handleChange=(event,type)=> {
    if (type === 0){
      this.setState({name: event.target.value});
      console.log("change",this.state.name)
    }
    if (type === 1) {
      this.setState({age: event.target.value});
      console.log("change",this.state.age)
    }
    if (type === 2) {
      this.setState({mail: event.target.value});
      console.log("change",this.state.mail)
    }
  }

  printRes=()=>{
  
    let printArray = [];
        for (let item of this.state.foundStudents)
        {
          printArray.push(<tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.mail}</td>
                </tr>)
        }
    return printArray; 
  }
  
  render() {
    return (
      <div className="container">
      <h1>INSERT</h1>
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
            Please, enter the age.
          </label>
          <input
            type="number"
            id="age"
            onChange={(event) => this.handleChange(event,1)}
            value={this.state.age}
          />
          </div>
          <div className="row">
          <label htmlFor="mail">
            Please, enter the mail.
          </label>
          <input
            type="text"
            id="mail"
            onChange={(event) => this.handleChange(event,2)}
            value={this.state.mail}
          />
         </div>
          <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonInsert()}>Insert</button>
       
        <div className="row">
        <h3>All students: </h3>
        </div>
        <div className="row">
                
          <Table students={this.printRes}></Table>
                
        </div> 
       
      
      </div>
    );
  }
}

export default App;
