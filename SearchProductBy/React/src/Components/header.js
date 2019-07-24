import React from 'react';
import './header.css';

const HeaderComp = (props) => {
    console.log("props : " , props)
    return (
       
        <div className="headerComp">
               <h1>{props.tx}</h1>
        </div>
      
    );
}

export default HeaderComp