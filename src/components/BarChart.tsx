import React from 'react';
import Chart from 'react-apexcharts';

interface BarChartProps {
  categories: string[];
  series: number[];
}

const BarChart: React.FC<BarChartProps> = ({ categories, series }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories,
    },
  };

  const chartSeries = [
    {
      name: 'Amount Invested',
      data: series,
    },
  ];

  console.log('Chart Options:', options);
  console.log('Chart Series:', chartSeries);

  return <Chart options={options} series={chartSeries} type="bar" height={350} />;
};

export default BarChart;
