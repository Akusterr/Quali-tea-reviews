import React, {useState, useEffect} from 'react';
import "./styles/Reviews.css";
import ReviewList from "./ReviewList";


function Reviews() {
    const [userReview, setUserReview] = useState([])
    const [rate, setRate] = useState("")
    const [comment, setComment] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
      .then(resp => resp.json())
      .then(revs => reviewItems(revs))
  }, [])

  const reviewItems = (revs) => {
    setUserReview(revs)
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()

    let review = {
      tea_rating: rate,
      tea_comment: comment
    }

    fetch("http://localhost:4000/reviews", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(review)
        })

        .then(resp => resp.json())
        .then(console.log)
    }
  


  return (
    <div className="rev-text">
      <h1>*USER* Reviews</h1>
      <ReviewList userReview={userReview}/>

      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="tea-rating" placeholder="Tea rating" value={rate} onChange={(e) => setRate(e.target.value)}/>
        <input type="text" name="tea-comment" placeholder="Tea comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
        <button type="submit">Add a new Review</button>
      </form>
    </div>
  );
}

export default Reviews;