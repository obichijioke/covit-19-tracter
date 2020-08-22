import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import numeral from "numeral";
import LineChart from "./LineChart";

const useStyles = makeStyles({
  root: {
    width: "24%",
    backgroundColor: "white",
    borderRadius: "1rem",
    padding: "1rem",
    margin: "0.2rem",
  },
  title: {
    fontSize: 11,
  },
  pos: {
    marginBottom: 12,
  },
});

const CasesCard = ({ value, type, color, countryIso }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "50%" }}>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontSize: "0.7rem",
                alignSelf: "center",
                textTransform: "capitalize",
              }}
            >
              {type && type}
            </p>
            <ArrowDropUpIcon
              style={{
                fontSize: 25,
                display: "block",
                alignSelf: "center",
                color: `${color ? color : "black"}`,
              }}
            />
          </div>

          <Typography variant="h5" component="h5">
            {value && numeral(value).format("0.0a")}
          </Typography>
        </div>
        <div style={{ width: "50%" }}>
          <LineChart
            color={color}
            countryIso={countryIso && countryIso}
            caseType={type === "active" ? "cases" : type}
          />
        </div>
      </div>
    </div>
  );
};

export default CasesCard;
