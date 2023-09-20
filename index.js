//insert /packages needed for this application
//imports jest and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');


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



/*
pseudocode:


//variables


//functions

When I open up the command line and run node index.js
I answer a series of questions on what my logo design is like
my series of questions = [
WHEN I am prompted for text
THEN I can enter up >= three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number #22ff00)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
]



the command line captures my user input and based on my user input: 
generates a custom design
console.log("Generated logo.svg")
createFile named 'logo.svg', with the contents based on my user input
handler function
writeFile


init function


//processes


*/