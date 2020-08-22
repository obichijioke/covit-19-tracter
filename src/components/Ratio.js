import React, { useEffect, useState } from "react";
import numeral from "numeral";
import AppProgressBar from "./AppProgressBar";
import Loading from "./Loading";

const Ratio = ({ cases }) => {
  const [ratio, setRatio] = useState(null);
  useEffect(() => {
    cases && getRatio(cases);
    // eslint-disable-next-line
  }, [cases]);

  const getRatio = (value) => {
    const caseratio = Math.round((value.recovered / value.cases) * 100);
    setRatio({
      ...ratio,
      ratio: caseratio,
      cases: value.cases,
      recovered: value.recovered,
    });
  };
  return (
    <>
      {ratio === null ? (
        <Loading />
      ) : (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "1.5rem",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Ratio of Recovery</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AppProgressBar
              progress={ratio && ratio.ratio}
              radius={100}
              size="big"
              color={ratio && ratio.ratio >= 50 ? "green" : "red"}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{ratio && numeral(ratio.cases).format("0.0a")} Affected</p>
            <p>{ratio && numeral(ratio.recovered).format("0.0a")} Recovered</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Ratio;
