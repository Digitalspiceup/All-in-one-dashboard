import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins, scales } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)
const DoughnutChart = () => {
    const projectsData = {
        'Completed': 6,
        'On Hold': 4,
        'Ongoing': 11,
        'Cancelled': 5
    }
    const data = {
        labels: Object.keys(projectsData),
        datasets: [
            {
                data: Object.values(projectsData),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A'],
                borderWidth: 1,
            }
        ]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {position: 'top' as const},
            title: {display: false,}, 
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        }
    }
  return (
    <div className="h-[370px] flex justify-center items-center">
        <Doughnut data={data} options={options}/>
    </div>
  )
}

export default DoughnutChart