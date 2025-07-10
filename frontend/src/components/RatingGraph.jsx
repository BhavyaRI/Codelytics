import React from "react";
import { ResponsiveLine } from "@nivo/line";

// Custom tooltip component
const CustomTooltip = ({ point }) => {
  return (
    <div
      style={{
        padding: "5px",
        backgroundColor: "white",
        border: "1px solid #ccc",
      }}
    >
      <strong>Date:</strong> {point.data.xFormatted}
      <br />
      <strong>Rating:</strong> {point.data.yFormatted}
    </div>
  );
};

function RatingGraph({ data }) {
  if (!data || data.length === 0) {
    return <div style={{ height: 400, width: "100%" }}>Loading data or no data available...</div>;
  }

  const chartData = [
    {
      id: "Rating",
      data: data.map((item) => ({
        x: new Date(item.ratingUpdateTimeSeconds * 1000),
        y: item.newRating,
      })),
    },
  ];

  // --- Dynamic Axis Configuration ---
  const getAxisConfig = () => {
    const dates = data.map((d) => d.ratingUpdateTimeSeconds * 1000);
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));

    const diffYears = (maxDate - minDate) / (1000 * 60 * 60 * 24 * 365);

    if (diffYears > 10) {
      return { format: "%Y", tickValues: "every 2 years" };
    }
    if (diffYears > 5) {
      return { format: "%Y", tickValues: "every 1 year" };
    }
    if (diffYears > 1) {
      return { format: "%b %Y", tickValues: "every 6 months" };
    }
    return { format: "%b %Y", tickValues: "every 2 months" };
  };

  const { format, tickValues } = getAxisConfig();
  // --- End of Dynamic Axis Configuration ---

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 50, bottom: 70, left: 70 }}
        xScale={{
          type: "time",
          format: "native",
          precision: "day",
        }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
        curve="monotoneX"
        pointTooltip={({ point }) => <CustomTooltip point={point} />}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legend: "Date",
          legendOffset: 60,
          legendPosition: "middle",
          // Apply dynamic format and tickValues
          format: format,
          tickValues: tickValues,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Rating",
          legendOffset: -60,
          legendPosition: "middle",
        }}
        lineWidth={2}
        colors={["#3182CE"]}
        pointSize={6}
        pointColor={{ from: "color" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
      />
    </div>
  );
}

export default RatingGraph;