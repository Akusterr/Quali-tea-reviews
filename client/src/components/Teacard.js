import React, { useState } from 'react';
import "./styles/Teacard.css";

function Teacard( {UT} ) {
  const [herbal, setHerbal] = useState(true)

  const handleHerbal = () => {
    setHerbal(!herbal)
  }


  return (
  
    <div className="card">
      <img src={UT.image} alt={UT.name} className={"teaImg"} />
      <h1> <br /> {UT.brand}</h1>
      <h3>{UT.style}</h3>
      <h3>Origin: <br /> {UT.origin}</h3>
       {herbal ? (
        <button onClick={handleHerbal} className="primary">Herbal</button>
      ) : (
        <button onClick={handleHerbal}>Caffeinated</button>
      )}
      <p>Reviews:</p>
      <div>
          {UT.reviews.map(review => {
          return <ul>{review.tea_comment}</ul>
          })} 
      </div>
    </div>
  );
}

export default Teacard;