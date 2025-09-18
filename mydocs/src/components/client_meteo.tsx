import React, { useEffect, useState } from "react";
import Weather from "../components/weather";

export default function ClientMeteo({ iconSize, iconAnchor, popupAnchor, useMapEvents, L, Marker, MapContainer, TileLayer }) {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState(null); // "auto" or "manual"
  const [pointerIcon, setPointerIcon] = useState(null);

  useEffect(() => {
    setPointerIcon(L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", // default marker
      iconSize: iconSize,
      iconAnchor: iconAnchor, // point of the icon which will correspond to marker's location
      popupAnchor: popupAnchor, // where popups open relative to icon
    }))
  }, []);


  function LocationMarker() {
    useMapEvents({
      click(e) {
        setCoords({ lat: e.latlng.lat, lon: e.latlng.lng });
      },
    });

    // will show a marker in the map, if coords are valued
    if (coords) {
      console.log("Selected coordinates:", coords);
      return <Marker position={[coords.lat, coords.lon]} icon={pointerIcon} />;
    }

    return null;
  }

  const handleGetLocation = () => {
    setMode("auto");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setError(null);
        },
        (err) => setError(err.message)
      );
    } else {
      setError("Geolocation not supported");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      {error && <p>Error: {error}</p>}

      {/* Buttons */}
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleGetLocation} style={{ marginRight: "1rem" }}>
          Use My Location
        </button>

        <button onClick={() => setMode("manual")}>Search Location</button>
      </div>

      {/* Manual input form */}
      {mode === "manual" && (
        <MapContainer
          center={[48.8566, 2.3522]} // default to Paris
          zoom={5}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <LocationMarker />
        </MapContainer>
      )}

      <Weather coords={coords} />
    </div>
  );
}
