import React, { Component } from 'react';
import axios from 'axios';

//import './Buttons.css';

class Buttons extends Component {
    state = {
       data:"Empty"
    }

    componentDidMount () {
        
    }

    ButtonClicked = (p) => {
        axios.get( 'http://localhost:5000/returnToReact?id='+p)
            .then( response => {
                this.setState({data: response.data});
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }
    
    render () {
        return (
            <div className="Buttons">
                <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonClicked("p1")}>P1</button>
                <button type="button" className="btn btn-secondary p-3 m-3" onClick={() =>this.ButtonClicked("p2")}>P2</button>
                <button type="button" className="btn btn-success p-3 m-3" onClick={() =>this.ButtonClicked("p3")}>P3</button>
                <button type="button" className="btn btn-danger p-3 m-3" onClick={() =>this.ButtonClicked("p4")}>P4</button>
                <div>
                    {this.state.data}
                </div>      
            </div>    
        );
    }
}

export default Buttons;