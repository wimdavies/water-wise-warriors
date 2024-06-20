import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {

        const [bathingwaters, setBathingWatersData] = useState([]);

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
                    const response = await fetch('http://localhost:8080/api/bathing-waters'); 
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json(); //get items out of api
                    const bathingWatersData = data.result.items.map(item => ({
                        eubwidNotation: item.eubwidNotation,
                        name: item.name._value,
                        samplingPoint: {
                            lat: item.samplingPoint.lat,
                            long: item.samplingPoint.long,
                        // },
                        // latestComplianceAssessment: {
                        //     complianceClassification: {
                        //         name: item.latestComplianceAssessment.complianceClassification.name._value,
                        //     },
                        // },
                        // latestRiskPrediction: {
                        //     expiresAt: item.latestRiskPrediction.expiresAt._value,
                        //     riskLevel: {
                        //         name: item.latestRiskPrediction.riskLevel.name._value,
                        //     },
                        },
                    }));
                    
                    setBathingWatersData(bathingWatersData); 
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
                        <Marker key={spot.id} position={[Number(spot.samplingPoint.lat), Number(spot.samplingPoint.long)]}>
                            <Popup>
                                <div>
                                    <h3>{spot.name}</h3>
                                    <p>Latitude: {spot.samplingPoint.lat}</p>
                                    <p>Longitude: {spot.samplingPoint.long}</p>
                                    {/* <p>Compliance: {spot.compliance}</p>
                                    <p>Risk level: {spot.riskLevel}</p>
                                    <p>Risk Expires At: {new Date(spot.riskExpiresAt).toLocaleDateString()}</p> */}
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </section>
        );
}
    
    export default MapComponent;