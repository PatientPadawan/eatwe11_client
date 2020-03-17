import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DashboardCanvas = ({
  macros,
}) => {
  const data = {
    datasets: [{
      backgroundColor: ['#085238', '#57D9AB', '#109E6C'],
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
        fontColor: 'white',
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
