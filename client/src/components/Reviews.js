import React, {useState, useEffect} from 'react';
import "./styles/Reviews.css";
import ReviewList from "./ReviewList";


function Reviews( {onUser} ) {
    const [userReviews, setUserReviews] = useState([])

  const updateUserReviews = () => {
    console.log('Re-fetching user reviews');
    fetch("http://localhost:4000/reviews")
      .then(resp => resp.json())
      .then(revs => setUserReviews(revs))
  };

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
      .then(resp => resp.json())
      .then(revs => reviewItems(revs))
  }, [])

  const reviewItems = (revs) => {
    setUserReviews(revs)
  }

  return (
    <div className="rev-text">
      <h1>Reviews</h1>
      <ReviewList userReviews={userReviews} onUser={onUser} updateUserReviews={updateUserReviews} />
    </div>
  );
}

export default Reviews;