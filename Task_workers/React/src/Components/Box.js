import React from 'react';

const Box = (props) => {
    console.log("props : " , props)
    return (
            <div style={{width:200+'px',height:200+'px',backgroundColor:props.color,margin:10+'px'}}></div>  
    );
    }

export default Box