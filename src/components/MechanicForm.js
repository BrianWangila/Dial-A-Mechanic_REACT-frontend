import React, {useState} from "react";
import Login from "./Login";



const POST_DATA = "https://dial-a-mechanic-backend.herokuapp.com/mechanics"

export default function MechanicForm({onHandleAddSubmit}){

  const [image_url, setImage] = useState("")
  const [category, setCategory] = useState("Heavy Machinery")
  const [shopName, setShopName] = useState("")
  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [about, setAbout] = useState("")
  const [experience, setExperience] = useState("")
  const [rating, setRating] = useState("")
  const [location, setLocation] = useState("")
  const [user, setUser] = useState({
    name: "",
    email: ""
  })

  // const adminUser = {
  //   email: "admin@gmail.com",
  //   password: "admin123"
  // }

  const Logins = (details) => {
    console.log(details)

      setUser({
        name: details.name,
        email: details.email
      })

  }



  function handleSubmit(e){
    e.preventDefault()

    e.target.reset();


    const newData = {
      image_url: image_url,
      category: category,
      shop_name: shopName,
      number: number,
      mechanic_name: name,
      email: email,
      about: about,
      experience: experience,
      location: location,
      rating: rating
    }

    fetch(POST_DATA, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newData)
    })
    // console.log(newData)
    .then((resp) => resp.json())
    .then((addedData) => onHandleAddSubmit(addedData))
    
    alert("Your details have been submitted. \n Go to Home page to view.")

  }
  

  return(
    <div>
      {(user.email !== "") ? (
      <>
      <center style={{padding: 5+"vh"}}><h3>Thank you for joining <span>DAM</span> in the quest <br></br> to serve our clients better</h3></center>
      <form className="login" style={{width: 50+"vw", margin:"auto", marginTop: 20+"px"}} onSubmit={handleSubmit}  >
        <h6>Kindly, provide accurate information</h6>
        <select className="mb-3 form-select form-select-sm" onChange={(e) => setCategory(e.target.value)}>
          <option defaultValue="Select Category">Select Category</option>
          <option value="Heavy Machinery">Heavy Machinery</option>
          <option value="Break and Transmission">Break and Transmission</option>
          <option value="Electrical Wiring">Electrical Wiring</option>
          <option value="Diesel Engines">Diesel Engines</option>
        </select>

        <div className="mb-3">
          <label className="form-label">Shop Name</label>
          <input type="text" className="form-control" placeholder="Ravvy Spare Shops" 
          onChange={(e) => setShopName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="John Doe" 
          onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" placeholder="johndoe@mail.com" 
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="number" className="form-control" placeholder="+254722333444" 
          onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location ( Town )</label>
          <input type="text" className="form-control" placeholder="Nakuru Town" 
          onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Paste Picture url</label>
          <input type="picture" className="form-control" placeholder="https://i.ytimg.com/vi/qno8wBN7EJ8/maxresdefault.jpg" 
          onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label  className="form-label">Experience ( years )</label>
          <input type="number" className="form-control" placeholder="4" 
          onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        <div className="mb-3">
        <label className="form-label">Rating (*/5)</label>
        <select className="form-select form-select-sm" onChange={(e) => setRating(e.target.value)}>
          <option>Rating</option>
          <option value="1">1</option>
        </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Skills and Expertise</label>
          <textarea className="form-control" rows="5" placeholder="My name is John and i have an in-born passion for fixing cars..." 
          onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3 form-check">
          <input
          type="checkbox" className="form-check-input" required/>
          <label className="form-check-label">Create account</label>
        </div>

        <button type="submit" className="btn btn-primary">Join DAM</button> 
        
      </form>
      </>

      ) : (
         <Login onLogin={Logins}  />
      )}
   
   
    </div>
  )
}