import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function Index() {
  return (
      <MapContainer center={[51.16, 10.45]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
  );
}
