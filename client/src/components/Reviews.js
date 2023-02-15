import React, {useState, useEffect} from 'react';
import "./styles/Reviews.css";
import ReviewList from "./ReviewList";


function Reviews() {
    const [userReview, setUserReview] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
      .then(resp => resp.json())
      .then(reviews => reviewItems(reviews))
  }, [])

  const reviewItems = (reviews) => {
    setUserReview(reviews)
  }
  


  return (
    <div className="rev-text">
      <h1>Reviews</h1>
      <ReviewList userReview={userReview}/>

      <form>
        <input type="text" name="tea-rating" placeholder="Tea rating" />
        <input type="text" name="tea-comment" placeholder="Tea comment" />
      </form>

      <button>Add a new Review</button>
    </div>
  );
}

export default Reviews;