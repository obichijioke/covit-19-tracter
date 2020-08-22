import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const TableRow = ({ flag, name, cases, arrow, bkColor }) => {
  return (
    <div
      style={{
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: !bkColor ? "white" : bkColor,
      }}
    >
      <div style={{ display: "flex", marginLeft: "0.5rem" }}>
        <img
          style={{
            width: "2.8rem",
            height: "2.1rem",
            display: "block",
            alignSelf: "center",
            marginRight: "0.5rem",
            objectFit: "cover",
          }}
          src={flag}
          alt={name}
        />
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {name}
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <h4>{cases}</h4>
        <ArrowDropUpIcon
          style={{
            fontSize: "1.8rem",
            display: "block",
            alignSelf: "center",
            color: "red",
          }}
        />
      </div>
    </div>
  );
};

export default TableRow;
