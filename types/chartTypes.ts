export type lineChartType = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        background: string;
        fill: boolean;
        pointBackgroundColor: string;
        tension: number;
    }[];
}

export type lineOptionsType = {
    responsive: boolean;
    plugins: {
        legend: {
            display: boolean;
        };
    };
    scales: {
        y: {
            beginAtZero: boolean;
            grid: {
                display: boolean;
            };
        };
        x: {
            grid: {
                display: boolean;
            };
        };
    };
}