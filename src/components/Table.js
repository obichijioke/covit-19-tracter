import React from "react";
import TableRow from "./TableRow";
const Table = ({ cases }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "1.5rem 1rem",
        borderRadius: "1rem",
        backgroundColor: "white",
        marginTop: "1rem",
      }}
    >
      <h2>Live Reports</h2>
      <div
        style={{
          width: "100%",
          height: "23rem",
          marginTop: "1rem",
          overflow: "scroll",
        }}
      >
        {cases &&
          cases.map((country, index) => (
            <TableRow
              flag={country.countryInfo.flag}
              name={country.country}
              cases={country.cases}
              arrow={"up"}
              key={index}
              bkColor={index % 2 === 1 ? "#f3f2f2" : "white"}
            />
          ))}
      </div>
    </div>
  );
};

export default Table;
