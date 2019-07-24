import React from 'react';

const Buttons = (props) => {
    console.log("props : " , props)
    return (

        <button type="button" onClick={()=>props.getColorFun(props.color)} className="btn btn-primary mt-3">{props.color}</button>
    );
    }
    
export default Buttons