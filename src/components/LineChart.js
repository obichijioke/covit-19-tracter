import React, { useEffect, useState } from "react";
import axios from "axios";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import Loading from "./Loading";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineChart = ({ color, countryIso, caseType }) => {
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    getData(countryIso && countryIso, caseType && caseType);
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
