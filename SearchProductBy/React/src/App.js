import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import HeaderComp from './Components/header';
//import Buttons from './Components/Buttons'
import axios from "axios";
//import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  state = {
    diameter:"",
    slices:"",
    mail:"",
    id:"",
    allCategory: [],
    allSubCategory: [],
    allProducts: [],
    products:"",
  
  };

  GetAll=()=>{
  var self=this;
  axios.get(`http://localhost:5000/getProducts`)
  .then(function(response){
    
   console.log(response.data);
   
   self.setState({ allProducts: response.data });
  })
  .catch(function(error){
     console.log(error);
  });
} 

Search1=()=>{
  var self=this;
  axios.get(`http://localhost:5000/searchProductsByMax`)
  .then(function(response){
    
   console.log(response.data);
   
   self.setState({ allProducts: response.data });
  })
  .catch(function(error){
     console.log(error);
  });
} 
  
Search2=()=>{
  var self=this;
  axios.get(`http://localhost:5000/searchProductsByMin`)
  .then(function(response){
    
   console.log(response.data);
   
   self.setState({ allProducts: response.data });
  })
  .catch(function(error){
     console.log(error);
  });
} 

Search3=()=>{
  var self=this;
  const searchId = document.querySelector("#searchId").value;
  axios.get(`http://localhost:5000/searchProductsById?id=${searchId}`)
  .then(function(response){
    
   console.log(response.data);
   
   self.setState({ allProducts: response.data });
  })
  .catch(function(error){
     console.log(error);
  });
} 
  
render() {

    return (
      <div className="container">
       <HeaderComp tx="Pussy Shop"></HeaderComp>
       <hr />
       
       <div className="row">
        <HeaderComp tx="Please, choose:"></HeaderComp>
        </div>
        <div className="row">
        <div className="col-2 offset-1">
        <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.GetAll()}>Get All</button>
        </div>
        <div className="col-2 offset-1">
        <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.Search1()}>Price less 100</button>
        </div>
        <div className="col-2 offset-1">
        <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.Search2()}>Price more 300</button>
        </div>
        </div>
          <br />
          <hr />
          <br />
        <div className="row"> 
        <HeaderComp tx="Search by Id"></HeaderComp>
        </div>
        <div className="row">
        <div className="col-2 offset-1">
        <input
            type="text"
            id="searchId"
        />
        </div>
        <div className="col-2 offset-1">
        <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.Search3()}>Search</button>
        </div>
        </div>
        <br /> <br /> <br /> <br />
        <div className="row">   
          
          <Table data={this.state.allProducts}></Table>
                
        </div> 
       
      </div>
    );
  }
}

export default App;
