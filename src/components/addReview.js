import React, { useState } from "react"

function AddReview({onAddReview, id, onUpdateReview}){
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")
  const [rating, setRating] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  // const [editIndex, setEditIndex] = useState()



  function handleAddReview(e){
    e.preventDefault()

    const newReview = {
      mechanic_id: id,
      name: name,
      comment: comment,
      rating: rating
    }


    fetch(`https://dial-a-mechanic-backend.herokuapp.com/reviews`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newReview)
    })
    .then((resp) => resp.json())
    .then((data) => onAddReview(data))
   

    const updateReview = {
      comment: comment,
      rating: rating,
    }

      fetch(`https://dial-a-mechanic-backend.herokuapp.com/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(updateReview)
      })
      .then((resp) => resp.json())
      .then((updatedReview) => onUpdateReview(updatedReview))
    
  }


  return (
    <div>
      <form className="add-review" form onSubmit={handleAddReview} >
      <input type="text" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
      <select className="form-select form-select-sm" onChange={(e) => setRating(e.target.value)} required>
          <option>Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea type="textArea" className="form-control" rows="3" placeholder="Comment" onChange={(e) => setComment(e.target.value)} required></textarea>
        
        { !isEditing ? (<button type="submit" >Add a Review</button>) :
        (<button type="submit" onClick={handleUpdate2}>Save Review</button>)} 
      </form>
    </div>
  )
}
export default AddReview