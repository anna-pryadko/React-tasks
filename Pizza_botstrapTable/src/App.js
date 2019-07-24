import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import HeaderComp from './Components/header';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  state = {
    diameter:"",
    slices:"",
    mail:"",
    id:"",
    allPizza: [],
    
  };

ButtonBuild=()=>{
 for (let i=0; i<100; i++) {

    let diameter= Math.floor(Math.random()* (50 - 10) + 10);
    
    let slices=Math.floor(Math.random()* (8 - 3) + 3);

    let toppings=Math.floor(Math.random()*4);

    let price=5*toppings+diameter;

    axios.get(`http://localhost:5000/insertPizza?diameter=${diameter}&slices=${slices}&toppings=${toppings}&price=${price}`)
    .then(function(response){
      
      console.log(response.data);
      
    })
    .catch(function(error){
       console.log(error);
    });

  }
}

componentDidMount=()=>{
  var self=this;
  axios.get(`http://localhost:5000/getAllPizza`)
  .then(function(response){
    
   console.log(response.data);
   
   self.setState({ allPizza: response.data });
  })
  .catch(function(error){
     console.log(error);
  });
} 

  // printRes=()=>{
    
  //   let printArray = [];
  //       for (let item of this.state.allPizza)
  //       {
  //         printArray.push(<tr>
  //                   <td>{item.Diameter}</td>
  //                   <td>{item.Slices}</td>
  //                   <td>{item.Toppings}</td>
  //                   <td>{item.Price}</td>
  //               </tr>)
  //       }
  //   return printArray; 
  // }
  
  render() {
    return (
      <div className="container">
       <HeaderComp tx="Choose operation:"></HeaderComp>
       <div className="row">
         <div className="col-1 offset-3">
          <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonBuild()}>Build</button>
          </div>
          <div className="col-1 offset-3">
          <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonPrint()}>Print</button>
          </div>
          </div>
          <br />
          <hr />
          <br />
        <div className="row">
        <HeaderComp tx="Pizza Shop"></HeaderComp>
        </div>
        <hr />
        <div className="row">
          <h3>Current Pizza Orders:</h3> 
          </div>  
          <div className="row">   
          <Table data={this.state.allPizza}></Table>
                
        </div> 
       
      </div>
    );
  }
}

export default App;
