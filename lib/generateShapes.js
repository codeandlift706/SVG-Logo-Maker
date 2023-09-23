const { Triangle } = require('./shapes');
const { Circle } = require('./shapes');
const { Square } = require('./shapes');


function renderTriangle(data) {
  if (`${data.logoShape}` === 'triangle') {

    const newTriangle = new Triangle(data.text, data.textColor, data.shapeColor);
    return newTriangle.render()
  }
  return "";
}


function renderCircle(data) {
  if (`${data.logoShape}` === 'circle') {

    const newCircle = new Circle(data.text, data.textColor, data.shapeColor);
    return newCircle.render()
  }
  return "";
}


function renderSquare(data) {
  if (`${data.logoShape}` === 'square') {

    const newSquare = new Square(data.text, data.textColor, data.shapeColor);
    return newSquare.render()
  }
  return "";
}


function generateShapes(data) {
  return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${renderTriangle(data)}
${renderCircle(data)}
${renderSquare(data)}
</svg>
`
    ;
}

module.exports = generateShapes;
