import React from 'react';
import "./styles/Reviewcard.css";

function Reviewcard( {UR} ) {


  return (
  
    <div className="card">
      <h3>{UR.tea.style}:</h3>
      <h1>{UR.tea_comment}</h1>
      <h3>Rating: <br /> {UR.tea_rating}</h3>
    </div>
  );
}

export default Reviewcard;