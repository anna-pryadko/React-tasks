import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';
import axios from "axios";

class Input extends Component {
    state = {

        name:"",
        mail:"",
       
      };

handleClick = (event) => {
  event.preventDefault();
    let name=this.state.name;
    let mail=this.state.mail;
    console.log(name,mail);
    
    
    axios.get(`http://localhost:5000/insWorkes?name=${name}&mail=${mail}`)
    .then(function(response){
      
      console.log(response.data);
    
    })
    .catch(function(error){
       console.log(error);
    });
  }

    render() {
    
    console.log(this.state.name);
    
    console.log(this.state.mail);

    return (
        <div>
          
          <Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" onChange = {(event,target) => this.setState({name:event.target.value})}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicMail">
    <Form.Label>Mail</Form.Label>
    <Form.Control type="mail" placeholder="Mail" onChange = {(event,target) => this.setState({mail:event.target.value})}/>
  </Form.Group>
  
<Button variant="primary" type="submit" onClick={(event) => this.handleClick(event)}>
    Save
  </Button>
</Form>
        </div>
      );
}
}

export default Input