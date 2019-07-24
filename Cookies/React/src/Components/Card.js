import React from 'react';

const Card = (props) => {
    console.log("props : " , props)
    return (
        <div className='card' style={{width:18+'rem'}}>;
        {/* <img className='card-img-top' src="+arr_prin.image_url+" alt='Card image cap'>; */}
        <div className='card-body'>;
        <h5 className='card-title' innerHTML={props.userId}></h5>;
        <p className='card-text' innerHTML={props.title}></p>;
        <p className='card-text' innerHTML={props.body}></p>;
        {/* <a href='#' class='btn btn-primary' onclick='goToRec("+arr_prin.recipe_id+")'>Go somewhere</a>"; */}
        </div>;
        </div> 
    );
    }

export default Card