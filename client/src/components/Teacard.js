import React, { useState } from 'react';
import "./styles/Teacard.css";
import { Link } from 'react-router-dom'

function Teacard( {UT} ) {
  const [herbal, setHerbal] = useState(true)

  const handleHerbal = () => {
    setHerbal(!herbal)
  }


  return (
  
    <div className="card">
      <img src={UT.image} alt={UT.name} className={"teaImg"} />
      <h1>{UT.brand}</h1>
      <h3>{UT.style}</h3>
      <h3>Origin: {UT.origin}</h3>
       {herbal ? (
        <button onClick={handleHerbal} className="primary">Stocked</button>
      ) : (
        <button onClick={handleHerbal}>Order more!</button>
      )}
      <br />

      <div>
        <Link exact to='/reviews'><button>Write a review</button></Link>
      </div>
      



      <p>Current Reviews:</p>
      <div>
          {UT.reviews.map(review => {
          return <ul>{review.tea_comment}</ul>
          })} 
      </div>
    </div>
  );
}

export default Teacard;