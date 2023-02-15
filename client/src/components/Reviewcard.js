import React from 'react';
import "./styles/Reviewcard.css";

function Reviewcard( {UR} ) {


  return (
  
    <div className="card">
      <h3>Tea:</h3>
      <div>
        {/* {UR.tea.map(T => {
          return <ul>{T.style}</ul>
          })}; */}
      </div>


      <h1>{UR.tea_comment}</h1>
      <h3>Rating: <br /> {UR.tea_rating}</h3>
    </div>
  );
}

export default Reviewcard;