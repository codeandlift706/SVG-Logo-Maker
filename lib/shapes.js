//parent Shape class
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

//triangle class constructor to inherit their structure from the parent Shape
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {

return `<polygon points="145 0, 280 170, 25 170" fill="${this.shapeColor}"/>
<text x="150" y="120" font-size="45" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text>`
    }
}


//circle class constructor to inherit their structure from the parent Shape
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {

return `<circle cx="150" cy="105" r="80" fill="${this.shapeColor}"/>
<text x="150" y="120" font-size="45" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text>`
    }
}

//square class constructor to inherit their structure from the parent Shape
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {

return `<rect x="55" y="20" width="65%" height="100%" fill="${this.shapeColor}"/>
<text x="150" y="120" font-size="45" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text>`
    }
}



module.exports = { Triangle, Circle, Square }