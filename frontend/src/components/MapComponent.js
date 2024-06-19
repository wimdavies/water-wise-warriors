import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';




const MapComponent = () => {
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

    useEffect(() => {
        // Configure Leaflet's default icon options
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: markerIcon2x,
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
        });
    }, []);

    return (
    <section style={{ height: '80vh', width: '100%' }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }} 
        >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    </section>
    );

}

export default MapComponent;