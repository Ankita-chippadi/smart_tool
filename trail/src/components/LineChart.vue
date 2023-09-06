<template>
  <div>
    <div id="chartContainer" style="height: 370px; width: 100%;"></div>
  </div>
</template>

<script>
import CanvasJS from 'canvasjs';

export default {
  mounted() {
    let dps = [{x: 1, y: 10}, {x: 2, y: 10}, {x: 3, y: 10}, {x: 4, y: 10}, {x: 5, y: 10}];
    let dps2 = [{x: 0, y: 12}, {x: 6, y: 12}, {x: 5, y: 15}, {x: 8, y: 15}, {x: 5, y: 16}];
    let dps3 = [{x: 1, y: 11}, {x: 3, y: 21}, {x: 4, y: 11}, {x: 5, y: 19}, {x: 9, y: 6}];

    let chart = new CanvasJS.Chart("chartContainer", {
      axisX: {
        title: "Time",
        labelAngle: -180,
        labelFontColor: "black",
        interval: 0.5,
        label: []
      },
      axisY: [
        {
          title: "Torsion(Nm)",
          lineColor: "Blue",
          tickColor: "Blue",
          labelFontColor: "Blue",
          titleFontColor: "Blue",
          includeZero: true
        },
        {
          title: "Tension(N)",
          lineColor: "Red",
          tickColor: "Red",
          labelFontColor: "Red",
          titleFontColor: "Red",
          includeZero: true
        },
        {
          title: "Bending moment(Nm)",
          lineColor: "green",
          tickColor: "green",
          labelFontColor: "Green",
          titleFontColor: "Green",
          includeZero: true,
        }
      ],
      axisY2: {
          title: "Temperature(c)",
          lineColor: "#7F6084",
          tickColor: "#7F6084",
          labelFontColor: "#7F6084",
          titleFontColor: "#7F6084",
          includeZero: true
      },
      toolTip: {
          shared: true
      },
      data: [
        {
          type: "line",
          name: "Torsion",
          color: "Blue",
          axisYIndex: 1,
          dataPoints: dps2
        },
        {
          type: "line",
          name: "Bending moment",
          color: "green",
          axisYIndex: 0,
          showInLegend: true,
          dataPoints: dps3
        },
        {
          type: "line",
          name: "Tension",
          color: "Red",
          axisYIndex: 2,
          showInLegend: true,
          dataPoints: dps
        },
        {
          type: "line",
          name: "Temperature",
          color: "#7F6084",
          axisYType: "secondary",
          showInLegend: true,
        }
      ]
    });

    chart.render();

    let xVal = 0;
    let updateInterval = 1000; // Update every second

    let updateChart = function() {
      let newDataPoint = {
        x: xVal,
        y: Math.random() * 10 // Replace with your data source
      };
      xVal++;

      dps.push(newDataPoint);
      dps2.push(newDataPoint);
      dps3.push(newDataPoint);

      if (dps.length > 12) {
        dps.shift();
      } else if (dps2.length > 12) {
        dps2.shift();
      } else if (dps3.length > 12) {
        dps3.shift();
      }

      chart.options.axisX.label.push("Label " + (xVal % 12)); // Update X-axis labels

      chart.render();
    };

    // Initial load of data
    updateChart();

    // You can set an interval to update the data periodically
    setInterval(updateChart, updateInterval);
  }
};
</script>

<style>
#chartContainer {
  height: 370px;
  width: 100%;
}
</style>