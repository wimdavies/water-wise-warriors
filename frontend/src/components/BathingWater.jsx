import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import L from 'leaflet';
import customMarkerIcon from '../assets/custom-marker-icon.png';
import Comments from './CommentsManager.jsx';
import formatDate from '../utils/dateFormatter.js'


const BathingWater = () =>{
    const location = useLocation()
    const {bathingWater}  = location.state
    const [currentBathingWater, setCurrentBathingWater] = useState(bathingWater)
 
    const formattedRiskPredictionExpiryDate = formatDate(currentBathingWater.latestRiskPredictionExpiresAt)

    useEffect(()=>{
        setCurrentBathingWater(bathingWater)
    }, [bathingWater])
    
    useEffect(() => {
        // Prepare your custom marker icon options
        const customIcon = L.icon({
            iconUrl: customMarkerIcon,
            // iconRetinaUrl: customMarkerIcon2x,
            // shadowUrl: customMarkerShadow,
            iconSize: [25, 30], // Size of the icon
            iconAnchor: [12, 30], // Point of the icon which will correspond to marker's location
            shadowSize: [41, 30], // Size of the shadow
            shadowAnchor: [12, 30], // Point of the shadow relative to the icon
            popupAnchor: [1, -34] // Point from which the popup should open relative to the icon
        });

        // Configure Leaflet's default icon options to use your custom icon
        L.Marker.prototype.options.icon = customIcon;
    }, []);
    
    return (
        <>
        <div style={{width: '100vw', display: 'flex',justifyContent: 'center'}}>
        {/* // <div style={{display: 'flex', width: '50vw'}}> */} 
            <div style={{padding: '20px', marginTop: '4.5rem',marginLeft: '3rem'}}>

                <h1>{currentBathingWater.name}</h1>
                <p style={{fontSize: '25px'}}>Current Assessment: {currentBathingWater.latestComplianceAssessment ? currentBathingWater.latestComplianceAssessment : "Information not available"}</p>
                <p style={{fontSize: '25px'}}>Risk Prediction Level: {currentBathingWater.latestRiskPredictionLevel ? currentBathingWater.latestRiskPredictionLevel : "Information not available"}</p>
                {
                    currentBathingWater.latestRiskPredictionExpiresAt ? <p style={{fontSize: '25px'}}>Risk Prediction Expires at: {formattedRiskPredictionExpiryDate}</p> : null
                }

            </div>

            <section style={{ height: '80vh', width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0 auto', overflow: 'hidden' }}>
                <MapContainer center={[Number(currentBathingWater.lat), Number(currentBathingWater.lon)]} zoom={15} scrollWheelZoom={false} style={{ height: '70%', width: '70%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker key={currentBathingWater.eubwidNotation} position={[Number(currentBathingWater.lat), Number(currentBathingWater.lon)]}>

                    </Marker>

                </MapContainer>
            </section>
        </div>

            <Comments eubwid = {currentBathingWater.eubwidNotation}/>

        </>
    )
}




// <Link to="/birthday" state={{email : email }} style={{textDecoration : 'none' ,color: 'inherit'}}>
// you can get by using useLocation

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom'

// function Birthday() {
//   const location = useLocation()
//   const { email } = location.state
//   console.log(email)
//   return email
// }
// export default Birthday;
export default BathingWater;