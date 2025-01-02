"use client";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip as TooltipChart,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
  TooltipChart
);

const Graph = () => {
  const chartRef = useRef(null);

  const labels = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Expected Earnings",
        data: [65, 59, 80, 81, 56, 55, 40],
        lineTension: 0.3,
        fill: true, // Enable fill
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "rgba(73, 151, 253, 0.2)");
          gradient.addColorStop(1, "rgba(73, 151, 253, 0.8)");
          return gradient;
        },
        borderColor: "#4997FD",
        borderWidth: 0,
        pointBackgroundColor: "transparent",
      },
    ],
  };

  const options: any = {
    maintainAspectRatio: false,
    radius: 2.5,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `Total Expected Earnings: ${tooltipItem.raw}`; // Customize tooltip
          },
        },
      },
    },
    backgroundColor: "#4997FD",
    scales: {
      x: {
        ticks: {
          display: false, // Hides x-axis labels
        },
        display: true,
        title: {
          display: true,
        },
        grid: {
          color: "transparent",
        },
      },
      y: {
        ticks: {
          display: false, // Hides x-axis labels
        },
        grid: {
          color: "transparent",
        },
      },
    },
  };

  return (
    <div style={{ height: 144, width: 310 }}>
      <Line
        ref={chartRef}
        data={data}
        options={options}
        className="w-full rounded-2xl absolute -bottom-[2rem] left-1"
      />
    </div>
  );
};

export default Graph;
