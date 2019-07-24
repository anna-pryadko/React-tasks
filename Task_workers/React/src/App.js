import React, { Component } from 'react';
import './App.css';
import Input from './Components/Input';
import Home from './Components/Home';
// import MyCard from './Components/Card';
// import axios from "axios";
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom';

class App extends Component {
//   state = {
//     name:"",
//     mail:"",
//     id:"",
//     foundWorkes: [],
  
//   };
  
// componentDidMount=()=>{
//   this.getAllWorkes();
// }

// getAllWorkes=()=>{
//   var self=this;
//   axios.get(`http://localhost:5000/getWorkes`)
//   .then(function(response){
    
//     console.log(response.data);
    
//    self.setState({ foundWorkes: response.data });
//   })
//   .catch(function(error){
//      console.log(error);
//   });
// }

// printCards=()=>{
//   let printArray  = [];
//   for(let item of this.state.foundWorkes)
//   {
//       console.log(item);
//       printArray.push(<MyCard checkOn={item.on_off} name={item.name} mail={item.mail} id={item.id}/>)

//   }
//   return printArray;
// }

  render() {
    return (
      <BrowserRouter>
      <div className="container">
      <div className="row">
      <div className="col-4">
      {/* <Button variant="primary" type="submit" onClick={(event) => this.handleClick(event)}> */}
      <Link to="/"></Link>
      {/* <Link to="/addworker" className={'btn btn-lg btn-primary'}>Input</Link> */}

      {/* </Button> */}
      </div>
      </div>

      {/* <div className="row">
      <h3>All workes: </h3>
      </div> */}

      {/* <div className="row">
           {this.printCards()}
      </div> */}
      <Route path="/" exact component={Home}/>
      <Route path="/addworker" exact component={Input} />
      </div>

      </BrowserRouter>
      
      // {/* <div className="col-4">
      // <h1>Add workes:</h1>
      //   <Input></Input> 
      // </div> */}

    );
  }
}

export default App;
