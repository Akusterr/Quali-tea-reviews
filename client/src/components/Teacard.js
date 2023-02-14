import React from 'react';
import "./styles/Teacard.css";

function Teacard( {UT} ) {


  return (
  
    <div className="card">
      <img src={UT.image} alt={UT.name} className={"teaImg"} />
      <h1>Brand Name: <br /> {UT.brand}</h1>
      <h3>{UT.style}</h3>
      <h3>Origin: <br /> {UT.origin}</h3>
      <p>Comments: </p>

      {/* {true ? (
        <button className="primary">Herbal</button>
      ) : (
        <button>Caffeinated</button>
      )} */}

    </div>
  );
}

export default Teacard;