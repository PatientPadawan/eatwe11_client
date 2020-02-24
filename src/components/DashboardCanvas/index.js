import React, {
  useRef,
  useEffect,
} from 'react';

const data = [120, 100, 140];
const colors = ['#215240', '#085238', '#57D9AB'];

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function sumTo(a, i) {
  let sum = 0;
  for (let j = 0; j < i; j++) {
    sum += a[j];
  }
  return sum;
}

function drawSegment(canvas, context, i) {
  context.save();
  const centerX = Math.floor(canvas.width / 2);
  const centerY = Math.floor(canvas.height / 2);
  const radius = Math.floor(canvas.width / 2);

  const startingAngle = degreesToRadians(sumTo(data, i));
  const arcSize = degreesToRadians(data[i]);
  const endingAngle = startingAngle + arcSize;

  context.beginPath();
  context.moveTo(centerX, centerY);
  context.arc(
    centerX,
    centerY,
    radius,
    startingAngle,
    endingAngle,
    false,
  );
  context.closePath();
  context.fillStyle = colors[i];
  context.fill();
  context.restore();
}

const DashboardCanvas = () => {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');


    for (let i = 0; i < data.length; i++) {
      drawSegment(canvas, context, i);
    }
  });

  return (
    <canvas
      ref={ref}
      style={{ width: '100px', height: '100px' }}
    />
  );
};

export default DashboardCanvas;
