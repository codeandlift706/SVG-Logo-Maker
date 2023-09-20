// Exports `Triangle`, `Circle`, and `Square` classes
// it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

//parent Shape class
class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}


//triangle class constructor to inherit their structure from the parent Shape
class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
}


//circle class constructor to inherit their structure from the parent Shape
class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
}


//square class constructor to inherit their structure from the parent Shape
class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
}

const newTriangle = new Triangle(


);

const newCircle = new Circle(


);


const newSquare = new Square(

    
);