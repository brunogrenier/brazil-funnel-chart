import React from 'react';
import Chart from './Chart';
import dataPopulation from '../data/population.json';

const ChartContainer = () => {
  const data = {
    labels: dataPopulation.map((item) => item.ageGroup),
    datasets: [{
      label: 'Men',
      data: dataPopulation.map((item) => item.men),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }, {
      label: 'Women',
      data: dataPopulation.map((item) => item.women),
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            stacked: true    
          }
      }
    };

  return (
    <div className="chart-container">
      <Chart data={data} options={options} />
    </div>
  );
};

export default ChartContainer;
