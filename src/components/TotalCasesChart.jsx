import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from 'contexts/DataProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const TotalCasesChart = () => {
  const data = useContext(MyContext);
  const { totalCases: { location, totalNewCases, totalDeaths } } = data;

  const chartData = {
    labels: [`Total cases for ${location} since beginning of covid`],
    datasets: [
      {
        label: 'Total new cases',
        data: [totalNewCases],
        borderColor: 'rgba(0, 0, 255, 0.8)',
        backgroundColor: 'rgba(0, 0, 255, 0.5)'
      },
      {
        label: 'Total deaths',
        data: [totalDeaths],
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
        text: `Total cases and deaths in ${location}`
      }
    }
  }

  return (
    <Card
      sx={{
        padding: "10px"
      }}
    >
      <Bar
        data={chartData}
        options={chartOptions}
      />
    </Card>
  );
};