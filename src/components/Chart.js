import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export function Chart() {
    const data = {
        labels: [
            'If you make a mistake on this team. It is often hold against you',
            'It is safe to take a risk on this team',
            'Working with members of this team, my unique skills and talents are valued and utilized'
        ],
        datasets: [
            {
                label: '# of Votes',
                data: [100, 50, 75],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderWidth: 1,
            },
        ],
    };
    return <PolarArea data={data} />;
}
