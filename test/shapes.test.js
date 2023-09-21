const generateShapes = require('../lib/generateShapes')

/*
Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
*/

describe('generateShapes', () => {
  describe('renderTriangle', () => {
    it('should return a string for the corresponding SVG file with the given shape color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="145 0, 280 170, 25 170" fill="blue"/>');
    });
  });

  describe('renderCircle', () => {
    it('should return a string for the corresponding SVG file with the given shape color', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="105" r="80" fill="blue"/>');
    });
  });

  describe('renderSquare', () => {
    it('should return a string for the corresponding SVG file with the given shape color', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="55" y="20" width="65%" height="100%" fill="blue"/>');
    });
  });
});
