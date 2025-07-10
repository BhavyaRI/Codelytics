import React from "react";
import { ResponsiveBar } from "@nivo/bar";

// Custom Tooltip for more detailed info on hover
const CustomTooltip = ({ id, value, indexValue }) => (
  <div
    style={{
      padding: "8px 12px",
      background: "white",
      border: "1px solid #ccc",
      borderRadius: "3px",
    }}
  >
    <strong>Rating:</strong> {indexValue}
    <br />
    <strong>Problems Solved:</strong> {value}
  </div>
);

function BarChartGraph({ problemGraph }) {
  const data = Object.entries(problemGraph).map(([rating, count]) => ({
    rating,
    count,
  }));

  return (
    <div style={{ width: "860px", height: "400px" }}>
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="rating"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        // --- Enhancements ---
        // 1. Color each bar differently based on its rating
        colors={{ scheme: "nivo" }}
        colorBy="indexValue"
        
        // 2. Add borders to bars
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
        
        // 3. Add labels on top of bars
        enableLabel={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        
        // 4. Use the custom tooltip
        tooltip={CustomTooltip}

        // 5. Add animations
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        // --- Axis Configuration ---
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Problem Rating",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Problems Solved",
          legendPosition: "middle",
          legendOffset: -50,
        }}
      />
    </div>
  );
}

export default BarChartGraph;