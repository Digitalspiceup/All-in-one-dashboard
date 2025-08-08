'use client'
import { lineChartType, lineOptionsType } from "@/types/chartTypes";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend, 
  Filler
} from "chart.js";
import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);


export default function LineChart({data, options}:{data: lineChartType, options: lineOptionsType}) {
  const chartRef = useRef(null);
  
  useEffect(() => {
    const chart = chartRef.current;
  
    if (!chart) return;
  
    const ctx = chart.ctx;
  
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(34,197,94,0.8)");   // green top
    gradient.addColorStop(1, "rgba(34,197,94,0.4)");   // transparent bottom
  
    chart.data.datasets[0].backgroundColor = gradient;
    chart.update();
  }, []);
  return <Line ref={chartRef} data={data} options={options} />;
}
