import React from 'react';
import { ResponsivePie } from '@nivo/pie';

// This component creates a pie chart to display the proportion of solved problems per tag.
export default function ProblemTagsPieChart({ data }) {
  // 1. Format the data for Nivo Pie.
  // The legend label is taken from the 'id' field. We'll format it to include the count.
  const pieData = data.map(item => ({
    id: `${item.tag}: ${item.count}`, // This creates labels like "greedy: 2080"
    label: item.tag, // The 'label' is used for internal reference and can be kept clean
    value: item.count,
  }));

  return (
    <div style={{ height: '500px' }}>
      <ResponsivePie
        data={pieData}
        // Adjusted margin to give the longer legend labels more space
        margin={{ top: 40, right: 240, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        
        enableArcLinkLabels={false}
        enableArcLabels={false}
        
        // 2. Updated tooltip to look clean with the new 'id' format.
        tooltip={({ datum: { id, color } }) => (
            <div
                style={{
                    padding: '12px',
                    background: 'white',
                    color: 'black',
                    border: `1px solid ${color}`,
                }}
            >
                <strong>{id}</strong>
            </div>
        )}

        // 3. Configure the legend to display the formatted labels.
        legends={[
          {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 180, // Increased to move legend further right
            translateY: 56,
            itemsSpacing: 10,
            itemWidth: 150, // Increased width to prevent text wrapping
            itemHeight: 18,
            itemTextColor: '#333',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}