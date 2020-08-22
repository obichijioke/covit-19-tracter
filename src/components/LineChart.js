import React, { useEffect, useState } from "react";
import axios from "axios";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import Loading from "./Loading";

const LineChart = ({ color, countryIso, caseType }) => {
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    getData(countryIso && countryIso, caseType && caseType);
    // eslint-disable-next-line
  }, [countryIso]);

  const getData = async (data, type) => {
    if (data) {
      const res = await axios.get(
        `https://disease.sh/v3/covid-19/historical/${data}?lastdays=50`
      );
      let dataArray = [];
      let prevData = null;
      for (const date in res.data.timeline[type ? type : "cases"]) {
        if (prevData) {
          let newData =
            res.data.timeline[type ? type : "cases"][date] - prevData;
          dataArray.push({
            date: date,
            data: newData,
          });
        }
        prevData = res.data.timeline[type ? type : "cases"][date];
      }
      setGraphData(dataArray);
    } else {
      let dataArray = [];
      let prevData = null;
      const res = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=50"
      );

      for (const date in res.data[type ? type : "cases"]) {
        if (prevData) {
          let newData = res.data[type ? type : "cases"][date] - prevData;
          dataArray.push({
            date: date,
            data: newData,
          });
        }
        prevData = res.data[type ? type : "cases"][date];
      }
      setGraphData(dataArray);
    }
  };

  return (
    <>
      {graphData ? (
        <ResponsiveContainer>
          <AreaChart
            data={graphData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Area
              type="monotone"
              dataKey="data"
              stroke={color ? color : "#e32115"}
              fill={color ? color : "#e32115"}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default LineChart;
