
import React from "react";
import Reviewcard from "./Reviewcard";
import Reviews from "./Reviews";

function ReviewList({ userReview }) {
 

  return (
    <div>
        {userReview.map(UR => (
            <Reviewcard key={UR.id} UR={UR}/>
        ))}
    </div>
  );
}

export default ReviewList;