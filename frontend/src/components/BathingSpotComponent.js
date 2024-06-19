import { Marker, Popup } from "react-leaflet";

export default function BathingSpotMap({ bathingspot }) {
    if (bathingspot.reclat && bathingspot.reclat) {
        return (
        <Marker
            key={bathingspot.id}
            position={[Number(bathingspot.reclat), Number(bathingspot.reclong)]}
        >
        <Popup key={`${bathingspot.id} bathingspottext`}>Bathing Spot: {bathingspot.name}</Popup>
    </Marker>
    );
    }
}