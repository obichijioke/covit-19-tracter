import React from "react";
import Ratio from "./Ratio";
import Table from "./Table";
import CountrySelect from "./CountrySelect";

const Sidebar = ({ countries, onChange, cases }) => {
  return (
    <div>
      <CountrySelect countries={countries} onChange={onChange} />
      <Ratio cases={cases} />
      <Table cases={countries} />
    </div>
  );
};

export default Sidebar;
