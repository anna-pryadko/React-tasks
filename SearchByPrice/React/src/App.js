import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import axios from "axios";

//import { BrowserRouter } from 'react-router-dom'
//import Blog from './Blog/Blog';
//import Buttons from './Buttons/buttons';

class App extends Component {
  state = {
    searchInfo:"",
    foundProducts: []
  };

  handleChange=(event)=> {
    this.setState({searchInfo: event.target.value});
    //console.log(this.state.searchInfo);
  }

  ButtonSearch=()=>
  { 
    var self=this;
    let searchPrice=this.state.searchInfo;
    console.log(searchPrice);
    axios.get(`http://localhost:5000/searchProducts?price=${searchPrice}`)
    .then(function(response){
      
      console.log(response.data);
      //console.log(self.state.arrPosts);
      self.setState({ foundProducts: response.data });
    })
    .catch(function(error){
       console.log(error);
    });
  }

  printRes=()=>{
   // let printProducts  = [...this.state.foundProducts];
    let printArray = [];
        for (let item of this.state.foundProducts)
        {
          printArray.push(<tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>)
        }
    return printArray; 
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
        <form >
          <label htmlFor="searchInput">
            Please, enter the price.
          </label>
          <input
            type="number"
            id="searchInput"
            onChange={this.handleChange}
            value={this.state.searchInfo}
          />
          <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonSearch()}>Search</button>
        </form>
        </div>
        <div className="row">
        <h3>Results: </h3>
        </div>
        <div className="row">
                
                    <Table products={this.printRes}></Table>
                
        </div>
      
      
      </div>
    );
  }
}

export default App;
