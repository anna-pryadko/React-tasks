import React, { Component }  from 'react';
import './Card.css';
// import ToggleButton from 'react-bootstrap/ToggleButton'
// import {Card,Button} from 'react-bootstrap';
import axios from "axios";

class MyCard extends Component {
    
state={

    checkOn:"" , 
    id:""
}    

componentDidMount(){
    this.setState({ checkOn : this.props.checkOn })
    this.setState({ id : this.props.id })
}

checkToggle = () => {
    console.log("hi",this.props.checkOn)
    if (this.state.checkOn === 1) {
        return <input type="checkbox" checked id={this.props.id} className='togBtn' onChange={this.toggleChecked}></input>
    } else {
        return <input type="checkbox" id={this.props.id} className='togBtn' onChange={this.toggleChecked}></input>
    }
}


toggleChecked = (event) => {
    // event.preventDefault();
    // event.target.value='off';
    console.log(event.target); 
    console.log(event.target.checked); // if true or false 
    this.setState({ checkOn : event.target.checked })
    console.log("mu",this.state.checkOn); 
    // this.props.checkOn = !this.props.checkOn
    this.setState({ checkOn : event.target.checked })
    var status="";
    if (this.state.checkOn===1) {
        status=0;
    } else status=1;
    var id=this.state.id; 
    axios.get(`http://localhost:5000/updateOnWorker?on_off=${status}&id=${id}`)
    .then(function(response){
      
      console.log(response.data);
    
    })
    .catch(function(error){
       console.log(error);
    });
 
}

render() {
    

    console.log("props : " , this.props)
    

    return (
        
        <div className='card' style={{width:18+'rem'}}>
        {/* <img className='card-img-top' src="+arr_prin.image_url+" alt='Card image cap'>; */}
        <div className='card-body'>
        <h5 className='card-title'>{this.props.name}</h5>
        <p className='card-text'>{this.props.mail}</p>
        <label htmlFor={this.props.id} className='switch'>
        {this.checkToggle()}
        <span className='slider round'></span>
        </label>
        </div>
        </div> 
    ); 
}
}

export default MyCard