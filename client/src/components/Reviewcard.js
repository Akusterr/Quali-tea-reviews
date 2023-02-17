import React, {useState} from 'react';
import "./styles/Reviewcard.css";


function Reviewcard( {UR, onUser, updateUserReviews} ) {

  const [updateMode, setUpdateMode] = useState(false);
  const [rate, setRate] = useState(UR.tea_rating);
  const [comment, setComment] = useState(UR.tea_comment);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newInfo = {
        tea_rating: rate, 
        tea_comment: comment, 
        user_id: onUser.id,
        tea_id: UR.tea_id 
    }

    fetch(`http://localhost:4000/reviews/${UR.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInfo),
      })
        .then((resp) => resp.json())
        .then((resp) => setUpdateMode(false));
    };


    const handleDelete = () => {
      fetch(`http://localhost:4000/reviews/${UR.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => updateUserReviews());
    };

  if(updateMode){
    return (
      <div className="card">
        <h3>{UR.tea.style}:</h3>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="tea-rating" placeholder="Tea rating" value={rate} onChange={(e) => setRate(e.target.value)}/>
          <input type="text" name="tea-comment" placeholder="Tea comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  } else {
    return (
      <div className="card">
        <h3>{UR.tea.style}:</h3>
        <h1>{comment}</h1>
        <h3>Rating: <br /> {rate}</h3>
        <button onClick={() => setUpdateMode(!updateMode)}>Update Review</button>
        <button onClick={handleDelete}>Delete Review</button>
      </div>
    );
  }
}

export default Reviewcard;