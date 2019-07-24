import React, { Component } from 'react';
import axios from "axios";

class Home extends Component {
    ButtonLogOut= () => {
    
        var self=this;
        axios.get(`http://localhost:4000/Logout`,{withCredentials:true})
        .then(function(response){
          
          console.log(response.data);
          
        // self.setState({ isLogin: response.data });
        })
        .catch(function(error){
           console.log(error);
        });
        }

    render() {
        

        return (
        <div>  
            This is Home Page.

            <button type="button" className="btn btn-primary p-3 m-3" onClick={() =>this.ButtonLogOut()}>Logout</button>
        
        </div>   

            );
        }
      }
  
  export default Home;
  