const { Circle } = require('../lib/shapes')

describe('generateShapes', () => {
    describe('renderCircle', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const shape = new Circle('hello', 'purple', 'pink');
            expect(shape.render()).toEqual(
`<circle cx="150" cy="105" r="80" fill="pink"/>
<text x="150" y="120" font-size="45" text-anchor="middle" fill="purple">hello</text>`);
        });
    });
});