import React, { useState, useEffect } from "react";
import TopCountriesCard from "./TopCountriesCard";
import { Circle, Map, Popup, TileLayer } from "react-leaflet";

const AppMap = ({ countries, position, zoom }) => {
  const [sortedCountries, setSortedCountries] = useState(null);

  useEffect(() => {
    sortCountries(countries && countries);
  }, [countries]);

  const sortCountries = (countriesArray) => {
    if (countriesArray != null) {
      const newArray = [...countriesArray]
        .sort((a, b) => {
          if (a.cases > b.cases) {
            return -1;
          } else {
            return 1;
          }
        })
        .slice(0, 5);
      setSortedCountries(newArray);
    } else return;
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1.5rem",
        backgroundColor: "white",
        borderRadius: "1rem",
        flex: "1",
        marginTop: "1rem",
      }}
    >
      <div style={{ width: "60%" }}>
        <h2>COVID - 19 Affected Areas</h2>
        <div style={{ borderRadius: "1rem", overflow: "hidden" }}>
          <Map center={position} zoom={zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {countries &&
              countries.map((country, index) => (
                <Circle
                  center={[country.countryInfo.lat, country.countryInfo.long]}
                  fillColor="red"
                  color="red"
                  radius={Math.sqrt(country.cases) * 800}
                  key={index}
                >
                  <Popup>
                    <div style={{ padding: "0.4rem" }}>
                      <div style={{ display: "flex" }}>
                        <img
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            objectFit: "contain",
                          }}
                          src={country.countryInfo.flag}
                          alt={country.country}
                        />
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            margin: "0 1rem",
                            alignSelf: "center",
                          }}
                        >
                          {country.country}
                        </p>
                      </div>
                      <h3>
                        Total Cases:{" "}
                        <span style={{ color: "#ff0102" }}>
                          {country.cases}
                        </span>
                      </h3>
                      <h3>
                        Total Recovered:{" "}
                        <span style={{ color: "#3bba38" }}>
                          {country.recovered}
                        </span>
                      </h3>
                      <h3>
                        Total Deaths:{" "}
                        <span style={{ color: "#ff0102" }}>
                          {country.deaths}
                        </span>
                      </h3>
                    </div>
                  </Popup>
                </Circle>
              ))}
          </Map>
        </div>
      </div>
      <div style={{ width: "38%" }}>
        <h2>Top Countries</h2>
        <div>
          {sortedCountries &&
            sortedCountries.map((country, index) => (
              <TopCountriesCard
                name={country.country}
                cases={country.cases}
                recovered={country.recovered}
                size="small"
                flag={country.countryInfo.flag}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AppMap;
