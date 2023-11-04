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
import {colors} from "../../settings/colors";

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

const generateChartConfig = (isMobile, labels, data1, data2) => {
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
        backgroundColor: colors.pinkie,
      },
      {
        label: "My team answers",
        data: data2,
        backgroundColor: colors.violet,
      },
    ],
  };

  return { options, data };
};


export function Chart({ labels, data1, data2, isMobile }) {
  const { options, data } = React.useMemo(() => {
    return generateChartConfig(isMobile, labels, data1, data2);
  }, [isMobile, labels, data1, data2]);

  return <Bar options={options} data={data} />;
}