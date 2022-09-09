import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddReview from "./addReview";
import DeleteReview from "./DeleteReview";
import EditReview from "./EditReview";



export default function MechanicDetails({ onUpdateReview }){

  let {mechId} = useParams()
  const DISPLAY_MECHANICS = `http://localhost:9292/mechanics/${mechId}`


  const [image_url, setImage] = useState("")
  const [shop_name, setShopName] = useState("")
  const [number, setNumber] = useState("")
  const [mechanic_name, setMechName] = useState("")
  const [email, setEmail] = useState("")
  const [about, setAbout] = useState("")
  const [experience, setExperience] = useState("")
  const [category, setCategory] = useState("")
  const [review, setReview] = useState([])
  const [rating, setRating] = useState([])
  const [totalRating, setTotalRating] = useState("")
  const [id, setId] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  // const [time, setTime] = useState("")


  useEffect(() => {
    fetch(DISPLAY_MECHANICS)
    .then((resp) => resp.json())
    .then((data) => {

      const mechanic = data

      setId(mechanic.id)
      setImage(mechanic.image_url)
      setShopName(mechanic.shop_name)
      setAbout(mechanic.about)
      setExperience(mechanic.experience)
      setEmail(mechanic.email)
      setMechName(mechanic.mechanic_name)
      setNumber(mechanic.number)
      setCategory(mechanic.category)
      setReview(mechanic.reviews)
      setTotalRating((mechanic.reviews).reduce((a, b) => {
        return a + b.rating
      }, 0))

        })
  }, [rating])


  function handleAddReview(newReview){
    setRating(...rating, newReview)
    console.log(rating)
  }


  function handleDeleteReview(id){
    setReview(review.filter((rev) => rev.id !== id))
    // setAddDetails(addDetails.filter((mechId) => mechId !== card.id))

  }


  function handleUpdateReview(newReview){
    console.log("Trial Update")
    setIsEditing(false)
    onUpdateReview(newReview)
  }




  
  return(
    <div>
      <center className="container" style={{marginTop: 10+"vh", marginBottom: 10+"vh"}} >
        <h2 className="shop-name">{shop_name}</h2>
        <div className="card-1">
          <div className="card" style={{width: 60+"%", height: 140+"vh"}}>
            <img src={image_url} className="card-img-top" alt={mechanic_name}/>
            <div className="card-body">
              <h5 className="card-title">{mechanic_name}</h5>
              <span className="badge text-bg-danger">{category}</span>
              <p className="card-text" style={{minHeight: 35+"vh"}}>{about}</p>
            </div>
            <ul className="list-group list-group-flush text-bg-info">
              <li className="list-group-item badge text-bg-info">Tel: {number}</li>
              <li className="list-group-item badge text-bg-info">Email: {email}</li>
              <li className="list-group-item badge text-bg-info">Experience: {experience} years</li>
              <li className="list-group-item badge text-bg-info" style={{color: "red"}}>Av. Rating: {(totalRating/review.length).toFixed(1)} / 5</li>
            </ul>
          </div>
          <div className="personal-dets">
            <h5 className="card-title">Reviews</h5>
            <div className="review" style={{width: 80+"%"}}  key={review.id}>
              {review.map((review) => {
                return (
                    <div className="card-body" >
                      <hr style={{
                        background: "blue",
                        height: 0.5+"vh",
                        color: "yellow",
                        width: 20+"vw"
                      }}/>
                      <h6 className="card-subtitle mb-2" style={{color: "blue"}}>{review.name}'s Review: </h6>
                      <div className="rating-time">
                        <p className="card-text">Rating: <span  style={{color: "red"}}>{review.rating}</span></p>
                        <div className="vl"></div>
                        <p className="card-text" >Posted at: <span style={{color: "red"}}>{(new Date(review.updated_at).toLocaleTimeString())}</span></p>
                      </div>
                      <p className="card-text"> <span > </span> {review.comment}</p>
                      
                      <div>
                        
                        <button  className="button1" onClick={handleUpdateReview} >✏️ Edit</button> 
                       
                        <button className="button2"> <DeleteReview onDeleteReview={handleDeleteReview} id={review.id}/> </button>
                      </div>
                      <hr style={{
                        background: "blue",
                        height: 0.5+"vh",
                        color: "yellow",
                        width: 20+"vw"
                      }}/>
                    </div>
                )
              })}
            </div>
            <AddReview onAddReview={handleAddReview} id={id}/>

          </div>
        </div>
      </center>
    </div>
  )
}