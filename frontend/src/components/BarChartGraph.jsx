import React from "react";
import { ResponsiveBar } from "@nivo/bar";

function BarChartGraph({ problemGraph }) {
  // Convert problemGraph object into an array for the chart
  const data = Object.entries(problemGraph).map(([rating, count]) => ({
    rating,
    count,
  }));

  const margin = { top: 20, right: 20, bottom: 50, left: 40 };


  return (
    <div style={{ width: "860px", height: "400px" }}>
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="rating"
        margin={margin}
        padding={0.3}
        colors={{ scheme: 'category10' }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Rating",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
      />
    </div>
  );
}

export default BarChartGraph;