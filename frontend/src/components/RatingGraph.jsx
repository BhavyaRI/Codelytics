import React from "react";
import { ResponsiveLine } from "@nivo/line";

function RatingGraph({ data }) {
  // transform incoming data to nivo format using native dates
  const chartData = [
    {
      id: "Rating",
      data: data.map(item => ({
        x: new Date(item.ratingUpdateTimeSeconds * 1000),
        y: item.newRating,
      })),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 50, bottom: 70, left: 70 }}
        xScale={{
          type: "time",
          format: "native",    // use JS Date objects
          precision: "month",
        }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
        curve="monotoneX"       // smooth curve
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          format: "%b %Y",
          tickValues: "every 2 months", // show a tick every 2 months
          legend: "Date",
          legendOffset: 50,
          legendPosition: "middle",
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
        gridXValues="every 2 months"
        gridYValues={5}
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