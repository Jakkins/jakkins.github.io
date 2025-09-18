import ClientMeteo from "../components/client_meteo";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function MeteoPage() {
  return <BrowserOnly fallback={<div>Loading map...</div>}>
    {() => {

      const { MapContainer, TileLayer, Marker, useMapEvents } = require("react-leaflet");
      const { L } = require("leaflet");

      let iconSize = [14, 20]; // width, height (smaller than default 41x41)
      let iconAnchor = [iconSize[0] / 2, iconSize[1]];
      let popupAnchor = [0, -iconSize[1]];

      return <ClientMeteo
        iconSize={iconSize}
        iconAnchor={iconAnchor}
        popupAnchor={popupAnchor}
        useMapEvents={useMapEvents}
        L={L}
        Marker={Marker}
        MapContainer={MapContainer}
        TileLayer={TileLayer} />
    }}
  </BrowserOnly>
}
