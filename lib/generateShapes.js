
function renderTriangle(data) {
  if (`${data.logoShape}` === 'triangle') {
    return `
      <polygon points="145 0, 280 170, 25 170" fill="${data.shapeColor}"/>
      <text x="150" y="120" font-size="45" text-anchor="middle" fill="${data.textColor}"> 
      ${data.characters}</text>
      `
  }
  return "";
}


function renderCircle(data) {
  if (`${data.logoShape}` === 'circle') {
    return `  
        <circle cx="150" cy="105" r="80" fill="${data.shapeColor}"/>
        <text x="150" y="120" font-size="45" text-anchor="middle" fill="${data.textColor}"> ${data.characters}</text> 
      `
  }
  return "";
}


function renderSquare(data) {
  if (`${data.logoShape}` === 'square') {
    return `   
        <rect x="55" y="20" width="65%" height="100%" fill="${data.shapeColor}"/>
        <text x="150" y="120" font-size="45" text-anchor="middle" fill="${data.textColor}"> ${data.characters}</text>    
      `
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
