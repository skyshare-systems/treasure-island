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
import useSize from "@/hooks/useWindowSize";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
  TooltipChart
);

const YieldGraph = () => {
  const chartRef = useRef(null);
  const windowSize = useSize();

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
        data: [65, 90, 95, 10, 80, 90, 100],
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
          gradient.addColorStop(0, "rgba(255, 208, 0, 0.2)");
          gradient.addColorStop(1, "rgba(255, 208, 0, 0.8)");
          return gradient;
        },
        borderColor: "#FFD000 ",
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
    backgroundColor: "#FFD000 ",
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
          color: "rgba(250,250,250, 0.09)",
        },
      },
      y: {
        ticks: {
          display: false, // Hides x-axis labels
        },
        grid: {
          color: "rgba(250,250,250, 0.09)",
        },
      },
    },
  };

  return (
    <div style={{ height: 144, width: windowSize?.[0] > 1024 ? 366 : 280 }}>
      <Line
        ref={chartRef}
        data={data}
        options={options}
        className="w-full rounded-2xl absolute -bottom-[2rem] left-1"
      />
    </div>
  );
};

export default YieldGraph;
