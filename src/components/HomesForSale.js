import React, { useState, useEffect } from "react";
import Homes from "./Homes";

const HomesForSale = () => {

    const baseUrl = "https://bayut.p.rapidapi.com"
    const [properties, setProperties] = useState([]);

    const propertiesForSale = () => {
    fetch(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`, {
    method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '1462a43011mshbad7a63e2e692b5p16cb91jsn0ec0e2256609',
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
	  }
  })
    .then(response => response.json())
    .then(data => setProperties(data.hits))
    .catch(err => console.error(err));
}

    useEffect(() => {
    propertiesForSale()
  }, [])
    
  

const homesForSale = properties.map(property => {
    return <Homes   
              key={property.agency.ownerID}
              {...property}
          />
})

    return (
        <div className="hfs">
            {homesForSale}
        </div>
    )
}

export default HomesForSale;