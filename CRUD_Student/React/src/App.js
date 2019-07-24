import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  state = {
    name:"",
    age:"",
    mail:"",
    id:"",
    foundStudents: [],
    selectStudent:[]
  };

componentDidMount=()=>{
  var self=this;
  axios.get(`http://localhost:5000/getStudents`)
  .then(function(response){
    
   console.log(response.data);
   
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

  ButtonInsert=()=>
  { 
    let name=this.state.name;
    let age=this.state.age;
    let mail=this.state.mail;
  
    axios.get(`http://localhost:5000/insertStudents?name=${name}&age=${age}&mail=${mail}`)
    .then(function(response){
      
      console.log(response.data);
      
    })
    .catch(function(error){
       console.log(error);
    });

    this.componentDidMount();
    this.printRes();
  }

  ButtonUpdate=(id)=>
  { 
    var self=this;
   
    axios.get(`http://localhost:5000/searchStudents?id=${id}`)
    .then(function(response){
     
    self.setState({id: response.data[0].id, name: response.data[0].name, mail: response.data[0].mail, age: response.data[0].age})
    console.log(response.data);
   
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
   
    axios.get(`http://localhost:5000/saveStudents?name=${name}&age=${age}&mail=${mail}&id=${id}`)
    .then(function(response){
      
    console.log(response.data);
    
    })
    .catch(function(error){
       console.log(error);
    });

    this.componentDidMount();
    this.printRes();
  }

  ButtonDelete=(id)=>
  { 
    var self=this;
    // let name = document.querySelector("#name");
    // let age = document.querySelector("#age");
    // let mail = document.querySelector("#mail");

    axios.get(`http://localhost:5000/deleteStudents?id=${id}`)
    .then(function(response){
     console.log(response.data);
     
    })
    .catch(function(error){
       console.log(error);
    });

    this.componentDidMount();
    this.printRes();
  }

  printRes=()=>{
    
    let printArray = [];
        for (let item of this.state.foundStudents)
        {
          printArray.push(<tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.mail}</td>
                    <td><button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonUpdate(item.id)}>Update</button>
       </td>
                    <td><button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonDelete(item.id)}>Delete</button>
       </td>
                </tr>)
        }
    return printArray; 
  }
  
  render() {
    return (
      <div className="container">
      <h1>INSERT OR UPDATE</h1>
      <br />
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
         <br />
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
          <br />
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
         <br />
          <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonInsert()}>Insert</button>
       
          <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonSave()}>Save</button>
          <br /><br />
        <div className="row">
        <h3>All students: </h3>
        </div>
        <br />
        <div className="row">
                
                   <Table students={this.printRes}></Table>
                
        </div> 
       
      </div>
    );
  }
}

export default App;
