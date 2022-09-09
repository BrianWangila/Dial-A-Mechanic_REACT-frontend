import React from "react";

function DeleteReview({ onDeleteReview, id }){

  function deleteReview(){
    fetch(`http://localhost:9292/reviews/${id}`, {
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