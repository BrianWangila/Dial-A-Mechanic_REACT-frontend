import React, { useState } from "react";
import { Link } from "react-router-dom";



export default function MechanicsCard({id, body, onUpdateMechanic, category, name, image_url, mechanic_name, shop_name, location, comment, rating, experience, mechId, onHandleDelete}){

  const [isEditing, setIsEditing] = useState(false)
  // const {id, body, onUpdateMechanic} = mechanic

  function handleDelete(){
    fetch(`http://localhost:9292/mechanics/${mechId}`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"}
    })
    .then((resp) => resp.json())
    .then(() => onHandleDelete(mechId))
  }


  return(
    <div className="center col-sm-6">
      <div className="card text-bg-light" style={{width: 40 +"vw"}}>
        <img src={image_url} className="card-img" alt={mechanic_name}/>
        <div className="card-body">
          <button onClick={handleDelete} type="button" className="button btn btn-light">x</button>
          <h3 className="card-title">{shop_name}</h3>
          <span className="badge text-bg-danger">{category}</span>
          <h5 className="card-text">{location}</h5>
          <h6 className="card-text">{mechanic_name}</h6> 
          <div>            
            <li>Experience: {experience} years</li> <li>Rating: <span>{rating}</span> / 5</li>
          </div>
  
          <div>
            <Link to={`/mechanic/${mechId}`} className=" buttonDetails btn btn-primary">More Details</Link>
          </div>
        </div>

      </div>

    </div>

  )
}

