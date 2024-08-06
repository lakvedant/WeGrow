import React from 'react';
import Chart from 'react-apexcharts';

interface BarChartProps {
  types: string[];
  amounts: number[];
}

const BarChart: React.FC<BarChartProps> = ({ types, amounts }) => {
  // Determine the maximum value for y-axis scaling
  const maxAmount = Math.max(...amounts);
  const interval = 10000; // 10K intervals

  const options: ApexCharts.ApexOptions = {
    series: [{
      name: 'Amount Invested',
      data: amounts,
    }],
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: types,
    },
    yaxis: {
      title: {
        text: 'Amount Invested',
      },
      min: 0,
      max: Math.ceil(maxAmount / interval) * interval, // Set maximum value for the y-axis
      tickAmount: Math.ceil(maxAmount / interval), // Number of intervals
      labels: {
        formatter: (value) => `₹${value.toLocaleString()}`, // Format y-axis labels
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };

  return (
    <div id="chart">
      <Chart options={options} series={[{ name: 'Amount Invested', data: amounts }]} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
