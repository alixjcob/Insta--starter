const canvasSketch = require('canvas-sketch');

// Sketch parameters
const settings = {
  dimensions: [1080,1080],
};

// Artwork function
const sketch = () => {
  return ({ context, width, height }) => {
  
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);

   
  };
};
canvasSketch(sketch, settings);