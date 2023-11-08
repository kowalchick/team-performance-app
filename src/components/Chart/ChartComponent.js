import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { colors, fontBase } from "../../settings/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const fontOptions = {
  family: fontBase,
};

const baseOptions = {
  scales: {
    x: { ticks: { font: fontOptions } },
    y: { ticks: { font: fontOptions } },
  },
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        title: (context) => context[0].label.replaceAll(",", " "),
      },
    },
    legend: {
      labels: { font: fontOptions },
    },
  },
};

const generateChartConfig = (
  isMobile,
  labels,
  userAnswersData,
  teamAnswersData
) => {
  const options = {
    ...baseOptions,
    aspectRatio: isMobile ? 1 : undefined,
    indexAxis: isMobile ? "y" : "x",
    plugins: {
      ...baseOptions.plugins,
      legend: {
        ...baseOptions.plugins.legend,
        position: isMobile ? "bottom" : "top",
      },
    },
    elements: isMobile ? { bar: { borderWidth: 2 } } : {},
  };

  const data = {
    labels,
    datasets: [
      {
        label: "My answers",
        data: userAnswersData,
        backgroundColor: colors.pinkie,
      },
      {
        label: "My team answers",
        data: teamAnswersData,
        backgroundColor: colors.violet,
      },
    ],
  };

  return { options, data };
};

export function Chart({ labels, userAnswersData, teamAnswersData, isMobile }) {
  const { options, data } = React.useMemo(() => {
    return generateChartConfig(
      isMobile,
      labels,
      userAnswersData,
      teamAnswersData
    );
  }, [isMobile, labels, userAnswersData, teamAnswersData]);

  return <Bar options={options} data={data} />;
}
