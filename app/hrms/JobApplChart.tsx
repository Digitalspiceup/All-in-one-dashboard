import LineChart from '@/components/LineChart'
import React from 'react'

const JobApplChart = () => {
    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Profit",
                data: [5000, 7000, 2000, 8000, 7000],
                borderColor: "#22c55e", // green-500 (Tailwind)
                background: "rgba(34,197,94,0.5)", // semi-transparent fill
                fill: true, // set true for area under the line
                pointBackgroundColor: "#22c55e",
                tension: 0.5, // smooth curve
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            }
        },
    };
    return (
        <LineChart data={lineData} options={options}/>
    )
}

export default JobApplChart