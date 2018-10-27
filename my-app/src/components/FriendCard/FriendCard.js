import React from "react";
import "./FriendCard.css";
import Counter from "../Counter";
import { PropTypes } from 'react'

const FriendCard = props => (
  
  <div className="card"
  value={props.id}
  onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      
  
    </div>
  
  </div>
);


export default FriendCard;
