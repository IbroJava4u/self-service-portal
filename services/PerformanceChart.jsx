import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Required for Chart.js 3+
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PerformanceChart({ data = [] }) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
    },
  };

  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: "Portfolio Value (₦)",
        data: data.map(item => item.value),
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.1)",
        fill: true,
        tension: 0.3, // Smoothes the line
      },
    ],
  };

  return (
    <div className="chart-wrapper">
      <h2>Investment Performance Chart</h2>
      <div style={{ height: '300px' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}