import React from 'react';
import Chart from 'react-apexcharts';

interface PieChartProps {
  labels: string[];
  series: number[];
}

const PieChart: React.FC<PieChartProps> = ({ labels, series }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: labels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="pie" width={380} />
    </div>
  );
};

export default PieChart;
