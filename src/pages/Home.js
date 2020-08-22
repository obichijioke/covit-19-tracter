import React, { useState, useEffect } from "react";
import { ArrowRightAlt } from "@material-ui/icons";
import CasesCard from "../components/CasesCard";
import NavBar from "../components/NavBar";
import AppMap from "../components/AppMap";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import logo from "../images/logo.jpg";
import live from "../images/live2.gif";
import covid from "../images/covid.png";
import helpinghands from "../images/helpinghand.jpg";

const Home = () => {
  const [countries, setCountries] = useState(null);
  const [countryCases, setCountryCases] = useState(null);
  const [position, setPosition] = useState([34.80746, -40.4796]);
  const [zoom, setZoom] = useState(3);
  const [info, setInfo] = useState("worldwide");
  const [countryIso, setCountryIso] = useState(null);

  useEffect(() => {
    fetchData();
    worldWideCases();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/countries");
    setCountries(res.data);
  };

  const handleChange = (value = "worldwide") => {
    if (value === "worldwide") {
      setInfo("worldwide");
      worldWideCases();
    } else {
      getCountryCases(value);
    }
  };

  const worldWideCases = async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/all");
    setCountryCases(res.data);
    setPosition([34.80746, -40.4796]);
    setZoom(2);
    setInfo("worldwide");
  };

  const getCountryCases = (value) => {
    const data =
      countries &&
      countries.filter((country) => country.countryInfo.iso2 === value);
    setCountryCases(data[0]);
    setZoom(5);
    setPosition([data[0].countryInfo.lat, data[0].countryInfo.long]);
    setInfo("country");
    setCountryIso(data[0].countryInfo.iso2);
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",

        padding: "2rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          background: "white",
          borderRadius: "1rem",
          overflow: "hidden",
          padding: "2rem",
          marginBottom: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "4rem", objectFit: "contain" }}
          />
          <img
            src={live}
            alt="live"
            style={{ height: "1.5rem", objectFit: "contain" }}
          />
        </div>
        {info === "country" ? (
          <div
            style={{
              display: "flex",
              padding: "1rem",
              border: "0.05rem solid #e1e1e2",
              borderRadius: "1rem",
            }}
          >
            <img
              src={countryCases.countryInfo.flag}
              alt={countryCases.country}
              style={{
                height: "2rem",
                objectFit: "contain",
                marginRight: "1rem",
              }}
            />
            <h2 style={{ margin: "0", alignSelf: "center" }}>
              {countryCases.country}
            </h2>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="nav">
          <NavBar />
        </div>
        <div className="main">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CasesCard
              value={countryCases && countryCases.cases}
              type="cases"
              countryIso={countryIso && countryIso}
            />
            <CasesCard
              value={countryCases && countryCases.recovered}
              type="recovered"
              color="#3abb38"
              countryIso={countryIso && countryIso}
            />
            <CasesCard
              value={countryCases && countryCases.active}
              type="active"
              countryIso={countryIso && countryIso}
            />
            <CasesCard
              value={countryCases && countryCases.deaths}
              type="deaths"
              countryIso={countryIso && countryIso}
            />
          </div>
          <AppMap countries={countries} position={position} zoom={zoom} />
          <div
            style={{
              display: "flex",
              marginTop: "1rem",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                padding: "2rem 1rem",
                background: "white",
                borderRadius: "1rem",
                display: "flex",
                width: "49%",
              }}
            >
              <img
                style={{
                  height: "13rem",
                  marginRight: "1rem",
                  padding: "1rem",
                }}
                src={covid}
                alt="symptoms"
              />
              <div>
                <p
                  style={{
                    fontWeight: "600",
                    padding: "0.7rem",
                    color: "red",
                    background: "#ff010224",
                    display: "inline-block",
                    borderRadius: "0.5rem",
                  }}
                >
                  News & Update
                </p>
                <h3>5 Symptoms of Corona Virus that you should Know</h3>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      textDecoration: "none",
                      fontWeight: "700",
                      color: "#ff0102",
                      marginRoght: "0.7rem",
                    }}
                    href="#"
                  >
                    Read More{" "}
                  </div>
                  <ArrowRightAlt
                    style={{
                      color: "#ff0102",
                      fontSize: 25,
                      display: "block",
                      alignSelf: "center",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "2rem 1rem",
                background: "white",
                borderRadius: "1rem",
                display: "flex",
                width: "49%",
              }}
            >
              <img
                style={{
                  height: "13rem",
                  marginRight: "1rem",
                  padding: "1rem",
                }}
                src={helpinghands}
                alt="donate"
              />
              <div>
                <p
                  style={{
                    fontWeight: "600",
                    padding: "0.7rem",
                    color: "#3bba38",
                    background: "#3cb9381f",
                    display: "inline-block",
                    borderRadius: "0.5rem",
                  }}
                >
                  Donate
                </p>
                <h3>Donate to 3rd world countries which are suffering</h3>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      textDecoration: "none",
                      fontWeight: "700",
                      color: "#3bba38",
                      marginRoght: "0.7rem",
                    }}
                    href="#"
                  >
                    Donate Now{" "}
                  </div>
                  <ArrowRightAlt
                    style={{
                      color: "#3bba38",
                      fontSize: 25,
                      display: "block",
                      alignSelf: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <Sidebar
            countries={countries}
            onChange={handleChange}
            cases={countryCases}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
