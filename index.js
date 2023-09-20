//insert packages needed for this application
//imports jest and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const generateShapes = require('./lib/generateShapes');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter up to 3 characters for your logo text:',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'Please enter a color keyword (example: black) OR a hexadecimal number (example: #22ff00) for the color of your text:',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Please select the shape for your logo:',
        name: 'logoShape',
        choices: [
            'triangle',
            'circle',
            'square'
        ]
    },
    {
        type: 'input',
        message: 'Please enter a color keyword (example: black) OR a hexadecimal number (example: #22ff00) for the color of your shape:',
        name: 'shapeColor',
    },
];

// TODO: Create a function to write SVG file
const writeToFile = (fileName, data) => {
    fs.writeFile('logo.svg', generateShapes(data), (err) => {
        err ? console.error(err) : console.log("Generated on file")
    }
    )
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log("Generated logo.svg")
        writeToFile('logo.svg', data)
    })
}

init();



