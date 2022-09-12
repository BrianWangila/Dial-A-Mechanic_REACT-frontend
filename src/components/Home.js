import React, { useEffect, useState } from "react";
import EditMechanic from "./EditReview";
import MechanicsCard from "./MechanicsCard";


const DISPLAY_MECHANICS = "https://dial-a-mechanic-backend.herokuapp.com/mechanics"

export default function Home({Logout, user}){

  const [isLoaded, setIsLoaded] = useState(false)
  const [mechDetails, setMechDetails] = useState([])
  const [addDetails, setAddDetails] = useState([])
  const [search, setSearch] = useState("")
  const [searchParam] = useState(["category", "location"])
  const [error, setError] = useState("")


  useEffect(() => {
    fetch(DISPLAY_MECHANICS)
    .then((resp) => resp.json())
    .then((mechDetails) => {
      setIsLoaded(true)
      setMechDetails(mechDetails)
    },
    (error) => {
      setIsLoaded(true)
      setError(error)
    })
  }, [addDetails])

  function handleAddSubmit(newData){
    setMechDetails(...mechDetails, newData)
  }
  
  function handleDeleteFromData(card){
    setAddDetails(addDetails.filter((mechId) => mechId !== card.id))
  }

  

  function handleUpdateMechanic(updatedMechanicObj){
    const updatedMechanics = mechDetails.map((mech) => {
      if (mech.mechId === updatedMechanicObj.id){
        return updatedMechanicObj
      } else {
        return mech
      }
    })
    setMechDetails(updatedMechanics)
  }

  function handleSearch(mechDetails){
    return mechDetails.filter((mech) => {
      return searchParam.some((newMech) => {
        return (
          mech[newMech].toString().toLowerCase().indexOf(search.toLowerCase()) > -1 
        )
      })
    })
  }
 if (!isLoaded){
   return <center style={{marginTop: 3+"vh", color: "red"}}>Loading data, please wait...</center> 

  }
  else {

  return (
    <center >
      <div>
        <h3 className="home-title">Find A Mechanic in Seconds</h3>
        <div className="search">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2" 
              type="search" 
              placeholder="Search by City Name or Category..." 
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
          </form>
        </div>
        <div className="row">
          {handleSearch(mechDetails).map((mechDetail) => {
            return (
              <MechanicsCard
                onHandleDelete={handleDeleteFromData}
                onHandleAddSubmit={handleAddSubmit}
                onUpdateMechanic={handleUpdateMechanic}
                // onAddReview={handleAddReview}

                key={mechDetail.id}
                category={mechDetail.category}
                image_url={mechDetail.image_url}
                mechanic_name={mechDetail.mechanic_name}
                shop_name={mechDetail.shop_name}
                location={mechDetail.location}
                experience={mechDetail.experience}
                mechId={mechDetail.id}
              />   
            )
          })}
        </div>
      </div>
    </center>
  )
}
}