import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import HeaderComp from './Components/header';
import Buttons from './Components/Buttons'
import axios from "axios";
import { BrowserRouter } from 'react-router-dom'

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

componentDidMount=()=>{
  var self=this;
  axios.get(`http://localhost:5000/getCategories`)
  .then(function(response){
    
   console.log(response.data);
   
   self.setState({ allCategory: response.data });
  })
  .catch(function(error){
     console.log(error);
  });
} 

getSubCategory=(idCat)=>{
  console.log("idCat:", idCat)
  var self=this;
  axios.get(`http://localhost:5000/getSubCategories?id=${idCat}`)
  .then(function(response){
    
   console.log(response.data);
   
   self.setState({ allSubCategory: response.data });
  })
  .catch(function(error){
     console.log(error);
  });
} 

getProducts=(idSubCat)=>{
  console.log("idSubCat:", idSubCat)
  var self=this;
  axios.get(`http://localhost:5000/getProducts?id=${idSubCat}`)
  .then(function(response){
    
   console.log(response.data);
   
   self.setState({ allProducts: response.data });

  })
  .catch(function(error){
     console.log(error);
  });
 // this.printProd();
} 
  
// printProd=()=>{
//   if (this.state.allProducts){
//        const products=(<div className="row">   
//           <Table data={this.state.allProducts}></Table>
//    </div>)
//   console.log("table:",products)
  
//  return products
//   }
//  }
  
render() {

  // let products=printProd=()=>{
  //   if (this.state.allProducts){
  //        return (<div className="row">   
  //           <Table data={this.state.allProducts}></Table>
  //    </div>)
  //   }
  //  }

    let subCat = this.state.allSubCategory.map(item => {
      return <div className="col-3 offset-2">
                 <Buttons tx={item.Name} getSubCat={() => this.getProducts(item.Id)}></Buttons>
               </div>
  });
 
//   if (this.state.allProducts) {
//   let products=(<div className="row">   
//            <Table data={this.state.allProducts}></Table>
//   </div>)
// this.setState({products: products});
//   }

    return (
      <div className="container">
       <HeaderComp tx="Pussy Shop"></HeaderComp>
       <hr />
       
       <div className="row">
        <HeaderComp tx="Please, choose category:"></HeaderComp>
        </div>
        <div className="row">
        {this.state.allCategory.map( (item) => {
                return (
                    <div className="col-3 offset-2">
                        <Buttons tx={item.Name} getSubCat={() => this.getSubCategory(item.Id)}></Buttons>
                    </div>
                )
            })}
          </div>
          <br />
          <hr />
          <br />
        <div className="row"> 
          {subCat}
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
