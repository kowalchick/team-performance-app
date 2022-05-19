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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    scales: {
        x: {
            ticks: {
                font: {
                    family: "'Montserrat', sans-serif",
                }
            }
        },
        y: {
            ticks: {
                font: {
                    family: "'Montserrat', sans-serif",
                }
            }
        }
    },
    responsive: true,
    plugins: {
        legend: {
            position: "top",
            labels: {
                font: {
                    family: "'Montserrat', sans-serif",
                }
            }
        },
        tooltip: {
            callbacks: {
                title: (context)=>{
                    return context[0].label.replaceAll(',',' ');
                }
            }
        },
    },
};

function Chart(props) {

    const data = {
        labels: props.labels,
        datasets: [
            {
                label: "My answers",
                data: props.data1,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "My team answers",
                data: props.data2,
                backgroundColor: "rgba(161, 0, 255, 0.5)",
            },
        ],
    };
    return (
        <>
            <div>
                <Bar options={options} data={data}/>
            </div>
        </>
    );
}

export default Chart;