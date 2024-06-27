import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MapContainer, useMap, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.locatecontrol'
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';
import "leaflet-loading";
import customMarkerIcon from '../assets/custom-marker-icon.png';
import swimmer from '../assets/swimmer.gif'

const LocateControl = () => {
    const map = useMap();

    useEffect(() => {
        const lc = L.control.locate({
            position: 'bottomleft',
            strings: {
                title: 'Show me where I am',
            },
            keepCurrentZoomLevel: false,
            initialZoomLevel: 11,
            locateOptions: {
                enableHighAccuracy: true,
            },
        });
        lc.addTo(map);
        return () => {
            lc.remove();
        };
    }, []);

    return null;
};

const MapComponent = () => {
    const [bathingWaters, setBathingWatersData] = useState([]);
    const [loading, setLoading] = useState(true)

    // Classify data by compliance assessment
    const excellentMarkers = bathingWaters.filter(water => water.latestComplianceAssessment === 'Excellent');
    const goodMarkers = bathingWaters.filter(water => water.latestComplianceAssessment === 'Good');
    const sufficientMarkers = bathingWaters.filter(water => water.latestComplianceAssessment === 'Sufficient');
    const poorMarkers = bathingWaters.filter(water => water.latestComplianceAssessment === 'Poor');
    const unclassifiedMarkers = bathingWaters.filter(water => water.latestComplianceAssessment === null);

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

    useEffect(() => {
        const fetchBathingWaters = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/bathing-waters'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json(); //get items out of api
                setBathingWatersData(data)
            } catch (error) {
                console.error('Error fetching BathingWaters:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchBathingWaters();

    }, []); 
    
    return (
        <section style={{ height: '80vh', width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }} >
            {loading ? 
            <>
                <h2>Just fetching some bathing spots..</h2>
                <img src={swimmer} alt="Loading..." className="loading-gif" />
            </>
            :
            <MapContainer center={[52.727104, -1.62608]} zoom={6.5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }} id='map' loadingControl={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocateControl/>
                <LayersControl position="topright">
                    <LayersControl.Overlay name="Excellent" checked="true">
                        <LayerGroup>                   
                            {excellentMarkers.map((bathingWater) => (
                                <Marker key={bathingWater.eubwidNotation} position={[Number(bathingWater.lat), Number(bathingWater.lon)]}>
                                    <Popup>
                                        <div>
                                            <h3>{bathingWater.name}</h3>
                                            <p>Latest Compliance Assessment: {bathingWater.latestComplianceAssessment ? bathingWater.latestComplianceAssessment : "Information not available"}</p>
                                            <p>Risk Prediction Level: {bathingWater.latestRiskPredictionLevel ? bathingWater.latestRiskPredictionLevel : "Information not available"}</p>
                                            <p>
                                            <Link to={`bathingwater/${bathingWater.eubwidNotation}`} state={{bathingWater:bathingWater}}>
                                                Click here for more info and comments
                                            </Link>
                                            </p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Good" checked="true">
                        <LayerGroup>                   
                            {goodMarkers.map((bathingWater) => (
                                <Marker key={bathingWater.eubwidNotation} position={[Number(bathingWater.lat), Number(bathingWater.lon)]}>
                                    <Popup>
                                        <div>
                                            <h3>{bathingWater.name}</h3>
                                            <p>Latest Compliance Assessment: {bathingWater.latestComplianceAssessment ? bathingWater.latestComplianceAssessment : "Information not available"}</p>
                                            <p>Risk Prediction Level: {bathingWater.latestRiskPredictionLevel ? bathingWater.latestRiskPredictionLevel : "Information not available"}</p>
                                            <p>
                                            <Link to={`bathingwater/${bathingWater.eubwidNotation}`} state={{bathingWater:bathingWater}}>
                                                Click here for more info and comments
                                            </Link>
                                            </p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>  

                    <LayersControl.Overlay name="Sufficient" checked="true">
                        <LayerGroup>                   
                            {sufficientMarkers.map((bathingWater) => (
                                <Marker key={bathingWater.eubwidNotation} position={[Number(bathingWater.lat), Number(bathingWater.lon)]}>
                                    <Popup>
                                        <div>
                                            <h3>{bathingWater.name}</h3>
                                            <p>Latest Compliance Assessment: {bathingWater.latestComplianceAssessment ? bathingWater.latestComplianceAssessment : "Information not available"}</p>
                                            <p>Risk Prediction Level: {bathingWater.latestRiskPredictionLevel ? bathingWater.latestRiskPredictionLevel : "Information not available"}</p>
                                            <p>
                                            <Link to={`bathingwater/${bathingWater.eubwidNotation}`} state={{bathingWater:bathingWater}}>
                                                Click here for more info and comments
                                            </Link>
                                            </p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>  
                    
                    <LayersControl.Overlay name="Poor" checked="true">
                        <LayerGroup>                   
                            {poorMarkers.map((bathingWater) => (
                                <Marker key={bathingWater.eubwidNotation} position={[Number(bathingWater.lat), Number(bathingWater.lon)]}>
                                    <Popup>
                                        <div>
                                            <h3>{bathingWater.name}</h3>
                                            <p>Latest Compliance Assessment: {bathingWater.latestComplianceAssessment ? bathingWater.latestComplianceAssessment : "Information not available"}</p>
                                            <p>Risk Prediction Level: {bathingWater.latestRiskPredictionLevel ? bathingWater.latestRiskPredictionLevel : "Information not available"}</p>
                                            <p>
                                            <Link to={`bathingwater/${bathingWater.eubwidNotation}`} state={{bathingWater:bathingWater}}>
                                                Click here for more info and comments
                                            </Link>
                                            </p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Unclassified" checked="true">
                        <LayerGroup>
                            {unclassifiedMarkers.map((bathingWater) => (
                                <Marker key={bathingWater.eubwidNotation} position={[Number(bathingWater.lat), Number(bathingWater.lon)]}>
                                    <Popup>
                                        <div>
                                            <h3>{bathingWater.name}</h3>
                                            <p>Latest Compliance Assessment: {bathingWater.latestComplianceAssessment ? bathingWater.latestComplianceAssessment : "Information not available"}</p>
                                            <p>Risk Prediction Level: {bathingWater.latestRiskPredictionLevel ? bathingWater.latestRiskPredictionLevel : "Information not available"}</p>
                                            <p>
                                            <Link to={`bathingwater/${bathingWater.eubwidNotation}`} state={{bathingWater:bathingWater}}>
                                                Click here for more info and comments
                                            </Link>
                                            </p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>
                </LayersControl>
            </MapContainer>
            }
        </section>
    );
}

export default MapComponent;
