import React from "react";

function DeleteReview({ onDeleteReview, id }){

  function deleteReview(){
    fetch(`https://dial-a-mechanic-backend.herokuapp.com/reviews/${id}`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"}
    })
    onDeleteReview(id)
  }


  

  return (
    <div>
      <span onClick={deleteReview} role="img" aria-label="delete" type="button"> 
      🗑 Delete
      </span>
    </div>
  )
}

export default DeleteReview;