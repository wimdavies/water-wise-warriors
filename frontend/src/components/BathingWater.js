import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLocation } from 'react-router-dom';

const BathingWater = () =>{
    const location = useLocation()
    const {bathingWater}  = location.state
    console.log(bathingWater, "<<<< BathingWaters in component")
    return (
    <p>hello</p>
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