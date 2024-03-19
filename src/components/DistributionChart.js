import React from "react";
import Chart from "chart.js";

export default function DistributionChart() {
  React.useEffect(() => {
    var config = {
      type: "doughnut",
      data: {
        labels: [
          'Crowdsale investors 80%',
          'Foundation 20%',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [80, 20],
          backgroundColor: [
            '#0082FF',
            '#FAA002',
          ],
          hoverOffset: 4
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "black",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: true,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
      },
    };
    var ctx = document.getElementById("doughnut-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-blueGray-700">
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-[250px]">
            <canvas id="doughnut-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}