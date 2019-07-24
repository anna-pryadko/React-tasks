import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import axios from "axios";

//import { BrowserRouter } from 'react-router-dom'
//import Blog from './Blog/Blog';
//import Buttons from './Buttons/buttons';

class App extends Component {
  state = {
    maxAge:"",
    minAge:"",
    foundStudents: []
  };

  handleChange=(event,type)=> {
    if (type === 0){
      this.setState({minAge: event.target.value});
      //console.log(this.student.name)
    }
    if (type === 1) {
      this.setState({maxAge: event.target.value});
      //console.log(this.student.mail)
    }
  }

  ButtonSearch=()=>
  { 
    var self=this;
    let min=this.state.minAge;
    let max=this.state.maxAge;
   // console.log(searchPrice);
    axios.get(`http://localhost:5000/searchStudents?max=${max}&min=${min}`)
    .then(function(response){
      
      console.log(response.data);
      //console.log(self.state.arrPosts);
      self.setState({ foundStudents: response.data });
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
                </tr>)
        }
    return printArray; 
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-6">
       
          <label htmlFor="minAge">
            Please, enter the min age.
          </label>
          <input
            type="number"
            id="minAge"
            onChange={(event) => this.handleChange(event,0)}
            value={this.state.minAge}
          />
         </div>
         <div className="col-6">
          <label htmlFor="maxAge">
            Please, enter the max age.
          </label>
          <input
            type="number"
            id="maxAge"
            onChange={(event) => this.handleChange(event,1)}
            value={this.state.maxAge}
          />
          </div>
          <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonSearch()}>Search</button>
       
        </div>
        <div className="row">
        <h3>Results: </h3>
        </div>
        <div className="row">
                
                   <Table students={this.printRes}></Table>
                
        </div>
      
      
      </div>
    );
  }
}

export default App;
