import React from "react";
import AppProgressBar from "./AppProgressBar";
import numeral from "numeral";

const TopCountriesCard = ({ name, cases, recovered, flag }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #e2dede80",
        borderRadius: "1rem",
        padding: "0.9rem 0.5rem",
        marginBottom: "0.5rem",
      }}
    >
      <div style={{ width: "20%" }}>
        <AppProgressBar
          radius={20}
          progress={numeral((recovered / cases) * 100).format("0.0a")}
          color={
            numeral((recovered / cases) * 100).format("0.0a") >= 50
              ? "green"
              : "red"
          }
        />
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            style={{
              height: "1rem",
              objectFit: "contain",
              marginRight: "0.5rem",
            }}
            src={flag}
            alt={name}
          />
          <p
            style={{
              marginBottom: "0.4rem",
              color: "#484848",
              fontWeight: "700",
            }}
          >
            {name}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: "600" }}>
            Affected - {numeral(cases).format("0.0a")}
          </p>
          <p style={{ fontSize: "0.8rem", fontWeight: "600" }}>
            Recovered - {numeral(recovered).format("0.0a")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCountriesCard;
