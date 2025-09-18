import React, { useState, useEffect } from "react";
import { fetchWeatherApi } from "openmeteo";
import { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";
// import { useColorMode } from '@docusaurus/theme-common';

const meteocss: React.CSSProperties = {
  padding: "3px",
  paddingLeft: "5px",
  borderRadius: "10%"
};

export default function Weather({ coords }) {
  const [weather, setWeather] = useState<WeatherApiResponse | null>(null);

  useEffect(() => {
    if (!coords) return;
    const { lat, lon } = coords;
    const url = "https://api.open-meteo.com/v1/forecast";
    const params = {
      latitude: lat.toFixed(5),
      longitude: lon.toFixed(5),
      hourly: "rain",
      timezone: "auto",
      forecast_days: 1,
    };

    const fetchWeather = async () => {
      try {
        let responses: WeatherApiResponse[] = await fetchWeatherApi(
          url,
          params
        );
        const response = responses[0];
        // console.log("weather: ", response); do not log -> will log bytes, use methods
        setWeather(response);
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    };

    fetchWeather();
  }, [coords]);

  if (!weather) return <p>Waiting for coordinates to load weather...</p>;

  // Attributes for timezone and location
  const latitude = weather.latitude();
  const longitude = weather.longitude();
  const elevation = weather.elevation();
  const timezone = weather.timezone();
  const timezoneAbbreviation = weather.timezoneAbbreviation();
  const utcOffsetSeconds = weather.utcOffsetSeconds();
  const hourly = weather.hourly(); // assert non null or error
  const rain = Array.from(hourly.variables(0)!.valuesArray());

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>🌧 Hourly Precipitation</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 100px)",
          gap: "10px",
        }}
      >
        {rain &&
          rain.map((value, idx, arr) => {
            let hour = idx + 1 + ":00";
            let mmrain = value.toFixed(2);

            let backgroundColor = "rgba(0, 0, 0, 0)"; // default bg color is transparent
            let textColor = "var(--text-color-meteo-card)"; // default text color

            if (value > 1.0) {
              backgroundColor = "#a0350bff"; // heavy rain
              textColor = "#e2f1ffff";
            } else if (value > 0.5) {
              backgroundColor = "#3366ff"; // moderate rain
              textColor = "#e2f1ffff";
            } else if (value > 0) {
              backgroundColor = "#99ccff"; // light rain
              textColor = "#003366"; // darker text for contrast
            }

            return (
              <div
                key={idx}
                style={{
                  ...meteocss,
                  backgroundColor: backgroundColor,
                  color: textColor
                }}
              >
                <div>{hour}</div>
                <div>{mmrain} mm</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
