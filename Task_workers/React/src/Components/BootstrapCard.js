import React from "react";

const BootstrapCard = props => (
  <div className={"card"} style={props.inlineStyle}>
    <img alt={props.name} src={props.image} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p
        className="card-text"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      {props.children}
    </div>
  </div>
);

export default BootstrapCard;
