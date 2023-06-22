import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"
import sideImage from "../images/estate-hero.avif"

const HomeDetails = () => {

    const [homes, setHomes] = useState([]);
    useEffect(() => {
        propertiesForSale()
    }, [])

    const baseUrl = "https://bayut.p.rapidapi.com"

  // fetches the Bayut api
  const propertiesForSale = () => {
    fetch(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`, {
    method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '1462a43011mshbad7a63e2e692b5p16cb91jsn0ec0e2256609',
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
	  }
  })
    .then(response => response.json())
    .then(data => setHomes(data))
    .catch(err => console.error(err));
  }
  
    return (
        <div className="home--details--container">
            <Navbar />
            <div className="home--details">
                <img src={homes.coverPhoto.url} alt="side"/>
                <div className="details">
                    <div>
                        <span>27383929</span>
                        <span>3bd | 4ba | 3,303 sqft</span>
                        is there a bug or not
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetails;