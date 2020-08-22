import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CountrySelect = ({ countries, onChange }) => {
  const classes = useStyles();
  const [country, setCountry] = useState("worldwide");

  const handleChange = (event) => {
    setCountry(event.target.value);
    onChange(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: "0.7rem 1.5rem",
        borderRadius: "1rem",
        width: "100%",
      }}
    >
      <h5
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        Select Country
      </h5>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Countries
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={country}
            onChange={handleChange}
            label="Countries"
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries &&
              countries.map((country, index) => (
                <MenuItem value={country.countryInfo.iso2} key={index}>
                  {country.country}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default CountrySelect;
