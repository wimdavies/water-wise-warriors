import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {

        const [bathingwaters, setBathingwaters] = useState([]);

        useEffect(() => {
            // Configure Leaflet's default icon options for markers
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: markerIcon2x,
                iconUrl: markerIcon,
                shadowUrl: markerShadow,
            });
        }, []);
    
        useEffect(() => {
            const fetchBathingwaters = async () => {
                try {
                    const response = await fetch('https://localhost8080/api/bathing-waters'); 
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setBathingwaters(data); 
                } catch (error) {
                    console.error('Error fetching bathingwater:', error);
                }
            };
    
            fetchBathingwaters();
        }, []); 
    
        return (
            <section style={{ height: '80vh', width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                <MapContainer center={[54.9781, -1.6103]} zoom={7} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {bathingwaters.map(spot => (
                        <Marker key={spot.id} position={[Number(spot.reclat), Number(spot.reclong)]}>
                            <Popup>
                                <div>
                                    <h3>Bathingspot {spot.id}</h3>
                                    <p>Latitude: {spot.reclat}</p>
                                    <p>Longitude: {spot.reclong}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </section>
        );
}
    
    export default MapComponent;