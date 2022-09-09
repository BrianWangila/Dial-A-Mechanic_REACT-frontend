import React, { useState } from "react"

function AddReview({onAddReview, id}){





 

  return (
    <div>
      <form className="add-review" form onSubmit={handleAddReview}>
      <input type="text" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      <select className="form-select form-select-sm" onChange={(e) => setRating(e.target.value)}>
          <option>Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea type="textArea" className="form-control" rows="3" placeholder="Comment" onChange={(e) => setComment(e.target.value)}></textarea>
        <button type="submit">Add a Review</button>
      </form>
    </div>
  )
}
export default AddReview