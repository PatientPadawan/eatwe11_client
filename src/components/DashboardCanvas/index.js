import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DashboardCanvas = ({
  macros,
}) => {
  const data = {
    datasets: [{
      backgroundColor: ['#444444', '#000000', '#888888'],
      data: [macros.protein, macros.carb, macros.fat],
    }],
    labels: [
      'Proteins',
      'Carbohydrates',
      'Fats',
    ],
  };
  const options = {
    legend: {
      position: 'right',
      labels: {
        fontColor: 'black',
      },
    },
  };

  return (
    <Doughnut
      data={data}
      options={options}
    />
  );
};

export default DashboardCanvas;
