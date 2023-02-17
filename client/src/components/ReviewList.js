
import React from "react";
import Reviewcard from "./Reviewcard";

function ReviewList({ userReviews, onUser, updateUserReviews }) {
 

  return (
    <div>
        {userReviews.map(UR => (
            <Reviewcard key={UR.id} UR={UR} onUser={onUser} updateUserReviews={updateUserReviews} />
        ))}
    </div>
 
  );
}

export default ReviewList;