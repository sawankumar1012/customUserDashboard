"use client";
import React, { useRef, useState, useEffect, use } from "react";
import { Line, Chart } from "react-chartjs-2";
import { CrosshairPlugin, Interpolate } from "chartjs-plugin-crosshair";
import { Interaction } from "chart.js";

import { Heading, Text } from "@/components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Ticks,
  Filler,
} from "chart.js";
import { list } from "postcss";
const hoverLine = {
  id: "hoverline",
  afterDatasetsDraw: (chart, args, plugins) => {
    const {
      ctx,
      tooltip,
      chartArea: { top, bottom, left, right, width, height },
      scales: { x, y },
    } = chart;
    if (tooltip._active?.length > 0) {
      let xCoor = x.getPixelForValue(tooltip.dataPoints[0].dataIndex);
      let yCoor = y.getPixelForValue(tooltip.dataPoints[0].parsed.y - 5);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xCoor, yCoor);
      ctx.lineTo(xCoor, bottom);
      ctx.lineWidth = 2;

      ctx.strokeStyle = "#536DFE";
      ctx.stroke();
      ctx.closePath();
    }
  },
};

// Interaction.modes.interpolate = Interpolate

//Custom HTML Legend
const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);

  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");
    listContainer.style.display = "flex";
    listContainer.style.flexDirection = "row";
    listContainer.style.margin = "0";
    listContainer.style.padding = "0";
    listContainer.style.listStyle = "none";
    listContainer.style.alignItems = "center";
    listContainer.style.justifyContent = "center";
    listContainer.style.marginTop = "4px";
    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach((item) => {
      const li = document.createElement("li");
      li.style.alignItems = "center";
      li.style.cursor = "pointer";
      li.style.display = "flex";
      li.style.flexDirection = "row";
      li.style.marginLeft = "10px";

      li.onclick = () => {
        const { type } = chart.config;
        if (type === "pie" || type === "doughnut") {
          chart.toggleDataVisibility(item.index);
        } else {
          chart.setDatasetVisibility(
            item.datasetIndex,
            !chart.isDatasetVisible(item.datasetIndex)
          );
        }
        chart.update();
      };

      const boxSpan = document.createElement("span");
      boxSpan.style.background = item.strokeStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderRadius = "100%";
      boxSpan.style.borderWidth = String(item.lineWidth) + "px";
      boxSpan.style.display = "inline-block";
      boxSpan.style.height = "3px";
      boxSpan.style.marginRight = "10px";
      boxSpan.style.width = "3px";

      const textContainer = document.createElement("p");
      textContainer.style.color = item.fontColor;
      textContainer.style.margin = "0";
      textContainer.style.padding = "0";
      textContainer.style.textDecoration = item.hidden ? "line-through" : "";

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  },
};
ChartJS.register({
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  hoverLine,
  htmlLegendPlugin,
});

export const FeedBackChart = ({dataLabels,dataSet}) => {
  const chartRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  useEffect(() => {
    const chart = chartRef.current;
    setCtx(chart.canvas.getContext("2d"));
  }, []);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      htmlLegend: {
        containerID: "html-legend",
      },
      hoverLine,
      filler: {
        propagate: true,
      },
      tooltip: {
        backgroundColor: "white",
        bodyColor: "black",
        yAlign: "top",
        displayColors: false,
        callbacks: {
          label: function (tooltipItem) {
            let label = tooltipItem.formattedValue || "";
            if (label) {
              label = `${tooltipItem.formattedValue}%`;
            }

            return label;
          },
          title: function (tooltipItem) {
            return "";
          },
        },
      },
    },

    aspectRatio: 4 / 1,
    scales: {
      x: {
        min: 1,
        border: {
          display: false,
        },
        ticks: {
          color: "rgb(166,166,166)",
          stepSize: 1,
          callback: (value) => (value % 1 === 0 ? value : ""),
        },
        grid: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },

        min: 0,
        max: 100,
        ticks: {
          color: "rgb(166,166,166)",
          stepSize: 25,
          callback: (value) => value + "%",
        },
        grid: {},
      },
    },
  };
  const data = {
    labels: [
      "1",
      "1.5",
      "2",
      "2.5",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ],
    datasets: [
      {
        label: "Feedback Quality",
        data: [10, 5, 20, 15, 30, 40, 30, 40, 70, 65, 60, 19, 11, 12],
        tension: 0.5,
        fill: true,
        borderColor: "#ff7043",
        pointBackgroundColor: "transparent",
        pointRadius: 12,
        pointBorderWidth: 0,
        pointHoverRadius: 8,
        pointHoverBorderColor: "#536DFE",
        pointHoverBorderWidth: 2,
        pointHoverBackgroundColor: "white",
        pointStyle: "circle",
        fill: "start",
        backgroundColor: () => {
          var gradient = ctx?.createLinearGradient(0, 0, 0, 800);
          gradient?.addColorStop(0, "rgba(250,174,50,0.5)");
          gradient?.addColorStop(0.25, "rgba(250,174,50,0.1)");
          gradient?.addColorStop(0.5, "rgba(255,255,255,0.01)");
          gradient?.addColorStop(1, "rgba(255,255,255,-0.1)");
          return gradient;
        },
      },
    ],
  };

  return (
    <div className="mt-2  bg-white-A700  rounded-xl shadow-sm p-2  max-h-98 max-w-full py-6">
<Chart ref={chartRef} type="line" options={options} data={data} />
<div id="html-legend" className="mx-auto "></div>
</div>
  );
};

