import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const fontOptions = {
  family: "'Montserrat', sans-serif",
};

const baseOptions = {
  scales: {
    x: { ticks: { font: fontOptions } },
    y: { ticks: { font: fontOptions } }
  },
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        title: (context) => context[0].label.replaceAll(',', ' '),
      }
    },
    legend: {
      labels: { font: fontOptions }
    },
  },
};

export function Chart({ labels, data1, data2, isMobile }) {

  const options = {
    ...baseOptions,
    aspectRatio: isMobile ? 1 : undefined,
    indexAxis: isMobile ? 'y' : 'x',
    plugins: {
      ...baseOptions.plugins,
      legend: {
        ...baseOptions.plugins.legend,
        position: isMobile ? "bottom" : "top",
      },
    },
    elements: isMobile ? { bar: { borderWidth: 2 } } : {}
  };

  const data = {
    labels,
    datasets: [
      {
        label: "My answers",
        data: data1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "My team answers",
        data: data2,
        backgroundColor: "rgba(161, 0, 255, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

