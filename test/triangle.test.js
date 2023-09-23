const { Triangle } = require('../lib/shapes')

describe('generateShapes', () => {
  describe('renderTriangle', () => {
    it('should return a string for the corresponding SVG file with the given shape color', () => {
      const shape = new Triangle('hello', 'purple', 'pink');
      expect(shape.render()).toEqual(
`<polygon points="145 0, 280 170, 25 170" fill="pink"/>
<text x="150" y="120" font-size="45" text-anchor="middle" fill="purple"> 
hello</text>`);
    });
  });
});

