const { Square } = require('../lib/shapes')

describe('generateShapes', () => {
    describe('renderSquare', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const shape = new Square('hello', 'purple', 'pink');
            expect(shape.render()).toEqual(
`<rect x="55" y="20" width="65%" height="100%" fill="pink"/>
<text x="150" y="120" font-size="45" text-anchor="middle" fill="purple">hello</text>`);
        });
    });
});