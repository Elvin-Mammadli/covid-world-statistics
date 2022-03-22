import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { Card } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from 'contexts/DataProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const DailyChart = () => {
  const data = useContext(MyContext);
  const { chartType, period, countryData: { newCases, newDeaths, dates } } = data;

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'New cases',
        data: newCases,
        borderColor: 'rgba(0, 0, 255, 0.8)',
        backgroundColor: 'rgba(0, 0, 255, 0.5)'
      },
      {
        label: 'Death cases',
        data: newDeaths,
        borderColor: 'rgba(255, 0, 0, 0.8)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)'
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: `New cases vs Death cases for last ${period} days`
      }
    }
  }

  return (
    <Card sx={{ padding: "10px" }}>
      {chartType === 'Line' ? <Line
        data={chartData}
        options={chartOptions}
      /> :
        <Bar
          data={chartData}
          options={chartOptions}
        />}
    </Card>
  );
};