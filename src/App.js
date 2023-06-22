import React, { useEffect, useState} from 'react';
import Homes from "./components/Homes";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeDetails from './components/HomeDetails';
import Home from './components/Home';

import './App.css';
import HomesForSale from './components/HomesForSale';

function App() {

  const baseUrl = "https://bayut.p.rapidapi.com"
  // save properties in state
  const [properties, setProperties] = useState([])

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
    .then(data => setProperties(data.hits))
    .catch(err => console.error(err));
  }

  const propertiesForRent = () => {
    fetch(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2206003e87msh41fe8dacf4f85fap1c74c5jsn0ad33b066e5d',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data["hits"]))
    .catch(err => console.error(err));
  }

useEffect(() => {
  propertiesForSale()
}, [])
  
useEffect(() => {
  propertiesForRent()
}, [])

const homeDetails = properties.map(property => {
  return <HomeDetails 
            key={property.agency.ownerID}
            {...property}
        />
})

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homedetails/:id" element={<HomeDetails />} />
          <Route path="/homes" element={<HomesForSale />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;