import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom'
import socketIOClient from "socket.io-client";

//import { BrowserRouter } from 'react-router-dom'
//import Blog from './Blog/Blog';
//import Buttons from './Buttons/buttons';

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
    let studentForInsert={};
    studentForInsert.name=this.state.name;
    studentForInsert.age=this.state.age;
    studentForInsert.mail=this.state.mail;
    this.setState({ studentForInsert: studentForInsert });

    const socket = socketIOClient(this.state.endpoint);
    socket.emit('insert student', this.state.studentForInsert) // change 'red' to this.state.color 
    
    // console.log("studentForInsert   ",this.state.studentForInsert);
    // axios.get(`http://localhost:4002/insertStudents?name=${studentForInsert.name}&age=${studentForInsert.age}&mail=${studentForInsert.mail}`)
    // .then(function(response){
      
    //   //console.log(response.data);
      
    // })
    // .catch(function(error){
    //    console.log(error);
    // });
    
  }
  
send=()=>{
  const socket = socketIOClient(this.state.endpoint);
  socket.emit('insert student', this.state.studentForInsert) // change 'red' to this.state.color 
}

componentDidMount=()=>{
  this.getAllStudents();
  
  const socket = socketIOClient(this.state.endpoint);
    //socket.emit('insert student', this.state.studentForInsert) // change 'red' to this.state.color
    setInterval(this.send(), 1000)
    
      socket.on('insert student', (allStud) => {
          
          // let AllStud=this.state.foundStudents;
          // addStud.id=AllStud[(AllStud.length)-1].id+1;
          // AllStud.push(addStud);
          this.setState({ foundStudents: allStud });
          
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

  // ButtonInsert=()=>
  // { 
  //   let name=this.state.name;
  //   let age=this.state.age;
  //   let mail=this.state.mail;
  //  // console.log(searchPrice);
  //   axios.get(`http://localhost:5000/insertStudents?name=${name}&age=${age}&mail=${mail}`)
  //   .then(function(response){
      
  //     console.log(response.data);
      
  //   })
  //   .catch(function(error){
  //      console.log(error);
  //   });

  // }

  ButtonUpdate=(id)=>
  { 
    var self=this;
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let mail = document.querySelector("#mail");

   // console.log(searchPrice);
    axios.get(`http://localhost:5000/searchStudents?id=${id}`)
    .then(function(response){
      console.log("hi",name.value)
      self.setState({id: response.data[0].id, name: response.data[0].name, mail: response.data[0].mail, age: response.data[0].age})
    console.log(response.data);
    //console.log(self.state.arrPosts);
    self.setState({ selectStudent: response.data });
    
    })
    .catch(function(error){
       console.log(error);
    });

  }


  ButtonSave=()=>{
    let id=this.state.id;
    let name=this.state.name;
    let age=this.state.age;
    let mail=this.state.mail;
   // console.log(searchPrice);
    axios.get(`http://localhost:5000/saveStudents?name=${name}&age=${age}&mail=${mail}&id=${id}`)
    .then(function(response){
      
      console.log(response.data);
      //console.log(self.state.arrPosts);
     // self.setState({ foundStudents: response.data });
    })
    .catch(function(error){
       console.log(error);
    });
  }

  ButtonDelete=(id)=>
  { 
    //var self=this;
    // let name = document.querySelector("#name");
    // let age = document.querySelector("#age");
    // let mail = document.querySelector("#mail");

   // console.log(searchPrice);
    axios.get(`http://localhost:5000/deleteStudents?id=${id}`)
    .then(function(response){
      //console.log("hi",name.value)
      //self.setState({id: response.data[0].id, name: response.data[0].name, mail: response.data[0].mail, age: response.data[0].age})
    console.log(response.data);
    //console.log(self.state.arrPosts);
    //self.setState({ selectStudent: response.data });
    
    })
    .catch(function(error){
       console.log(error);
    });

  }

  printRes=()=>{
    
   // let printProducts  = [...this.state.foundProducts];
    let printArray = [];
        for (let item of this.state.foundStudents)
        {
          printArray.push(<tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.mail}</td>
                    {/* <td><button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonUpdate(item.id)}>Update</button>
       </td>
                    <td><button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonDelete(item.id)}>Delete</button>
       </td> */}
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
       
          
          {/* <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.send()}>Send</button>
        */}
        
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
