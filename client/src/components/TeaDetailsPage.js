import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Reviews from './Reviews';

function TeaDetailsPage({onUser}) {
    const [tea, setTea] = useState({});
    const { id } = useParams();
    const [rate, setRate] = useState("")
    const [comment, setComment] = useState("")


    useEffect(() => {
        fetch(`/teas/${id}`)
        .then((resp ) => resp.json())
        .then((resp) => {
            setTea(resp)
        })
    }, [])


    const handleSubmit = (e) => {
    e.preventDefault()

    let review = {
      tea_rating: rate,
      tea_comment: comment,
      user_id: onUser.id,
      tea_id: id
    }

    fetch("http://localhost:4000/reviews", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(review)
        })

        .then(resp => resp.json())
        .then(review => {
            setTea({...tea, reviews: [review, ...tea.reviews]})
        })
    }
  



  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <img style={{height: 350}} src={tea.image} alt={tea.name} className={"teaImg"} />
            </div>
            <div>
                <h1>{tea.brand}</h1>
                <h3>{tea.style}</h3>
                <h3>Origin: {tea.origin}</h3>
            </div>

        </div>
        <div>
            <h3>Submit your review</h3>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="tea-rating" placeholder="Tea rating" value={rate} onChange={(e) => setRate(e.target.value)}/>
                <input type="text" name="tea-comment" placeholder="Tea comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button type="submit">Add a Review</button>
            </form>
            <h1>Reviews:</h1>
            {tea.reviews && tea.reviews.map(r => {
                return (
                    <div>
                        <p>Rating: {r.tea_rating}</p>
                        <p>{r.tea_comment}</p>
                    </div>
                )
            })}


        </div>
    </div>

  );
}

export default TeaDetailsPage;