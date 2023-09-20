
//
function renderTriangle(shape) {
    if (`${shape.logoShape}` === 'triangle') {
        return `
      <text 
            x="150" 
            y="120" 
            font-size="55" 
            text-anchor="middle" 
            fill="${shape.textColor}">
            ${shape.characters}
        </text>
      
      <polygon 
            points="150, 110 85, 120 90, 150"
            fill="${shape.shapeColor}"
        />
      `
    }

    return "";
}


function renderCircle(shape) {
    if (`${shape.logoShape}` === 'circle') {
        return `
      <text 
            x="150" 
            y="120" 
            font-size="55" 
            text-anchor="middle" 
            fill="${shape.textColor}">
            ${shape.characters}
        </text>      
      
      <circle
            cx="150" 
            cy="100" 
            r="80" 
            fill="${shape.shapeColor}" 
        />
      `
    }
    return "";
}


function renderSquare(shape) {
    if (`${shape.logoShape}` === 'square') {
        return `
      <text 
            x="150" 
            y="120" 
            font-size="55" 
            text-anchor="middle" 
            fill="${shape.textColor}">
            ${shape.characters}
        </text>      
      
      <rect 
            x="10" 
            y="10" 
            width="100%" 
            height="100%" 
            fill="${shape.shapeColor}" 
        />
      `
    }
    return "";
}


function generateShapes(data) {
    return `
<svg version="1.1"
     width="300" 
     height="200"
     xmlns="http://www.w3.org/2000/svg">

${renderTriangle(data.shape)}
${renderCircle(data.shape)}
${renderSquare(data.shape)}

</svg>
`
;
}

module.exports = generateShapes;
