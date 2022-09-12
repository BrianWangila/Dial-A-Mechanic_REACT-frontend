import React, { useState } from "react";

function EditMechanic({ id}){
  // const [mechDetails, setMechDetails] = useState(body)
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState("")

  function handleFormSubmit(e){
    e.preventDefault()

    const updateReview = {
      comment: comment,
      rating: rating,
    }

    fetch(`https://dial-a-mechanic-backend.herokuapp.com/mechanics/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(updateReview)
    })
    .then((resp) => resp.json())
    .then((updatedReview) => (updatedReview))
    console.log(updateReview)
  }


  return (
    <div>
      <form className="" onSubmit={handleFormSubmit}>
        <input type="text" name="body" value={comment} onChange={(e) => setComment(e.target.value)}/>
        <input type="text" name="body" value={rating} onChange={(e) => setRating(e.target.value)}/>

        <input type="submit" value="Save Details"/>
      </form>
    </div>
  )
}
export default EditMechanic;