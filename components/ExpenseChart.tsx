// components/ExpenseChart.tsx
'use client';

import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: [12000, 13500, 11000, 14500, 13000, 15000],
        backgroundColor: '#0808af99',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Raw Material Expenses (Monthly)' },
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
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default ExpenseChart;
