import ClientMeteo from "../components/client_meteo";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function MeteoPage() {
  return <BrowserOnly fallback={<div>Loading map...</div>}>
    {() => {

      const { MapContainer, TileLayer, Marker, useMapEvents } = require("react-leaflet");

      return <ClientMeteo
        useMapEvents={useMapEvents}
        Marker={Marker}
        MapContainer={MapContainer}
        TileLayer={TileLayer} />
    }}
  </BrowserOnly>
}
