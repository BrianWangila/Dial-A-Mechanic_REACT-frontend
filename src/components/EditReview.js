import React, { useState } from "react";

function EditMechanic({ id, onUpdateReview}){
 

  function handleFormSubmit(e){
    e.preventDefault()

    const updateReview = {
      comment: comment,
      rating: rating,
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