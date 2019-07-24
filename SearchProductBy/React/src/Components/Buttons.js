import React from 'react';

const Buttons = (props) => {
    console.log("props : " , props)
    return (

        <button type="button" onClick={()=>props.getSubCat()} className="btn btn-primary mt-3">{props.tx}</button>
    );
    }
    
export default Buttons