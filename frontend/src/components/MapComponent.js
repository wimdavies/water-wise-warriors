import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import BathingSpotMap from './BathingSpotComponent';

    // const [markers, setMarkers] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('/api');
    //             setMarkers(response.data);
    //         } catch (error) {
    //             console.log("ERROR!", error)
    //         }
    //     };
    //     fetchData();
        
    // }, [])

    // useEffect(() => {
    //     // Configure Leaflet's default icon options
    //     L.Icon.Default.mergeOptions({
    //         iconRetinaUrl: markerIcon2x,
    //         iconUrl: markerIcon,
    //         shadowUrl: markerShadow,
    //     });
    // }, []);


const MapComponent = ({ bathingspot }) => {
    let defaultCentre;
    bathingspot[0] ? defaultCentre = [Number(bathingspot[0].reclat), Number(bathingspot[0].reclong)] : defaultCentre = [54.97108, -1.61614]
  

    return (
            <section style={{ height: '80vh', width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
            <MapContainer center={[54.9781, -1.6103]} zoom={7} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker>
                
                </Marker>
                
                </MapContainer>
            </section>
            );
}

export default MapComponent;