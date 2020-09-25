// require functions
var generateMarkdown = require("./utils/generateMarkdown.js");
var fs = require("fs");
var inquirer = require("inquirer");

// data object to hold data
var data =
{
    title: "",
    description: "",
    installation: "",
    usage: "",
    license: "",
    contribution: "",
    test: "",
    github: "",
    email: ""
}

// array of questions for user
var questions = 
[
    {
        type: "input",
        name: "title",
        message: "Enter the readme title.",
        validate: titleInput =>
        {
            if(titleInput)
            {
                return true;
            }
            else
            {
                console.log("Please enter a project title!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project.",
        validate: descriptionInput =>
        {
            if(descriptionInput)
            {
                return true;
            }
            else
            {
                console.log("Please enter a description!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter your installation instructions for your project. (Can leave Blank)"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage instructions. (Can leave Blank)"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license do you want for you application.",
        choices: ['Apache 2.0', 'GPLv3', 'ISC', 'MIT', 'none']
    },
    {
        type: "input",
        name: "contribution",
        message: "Give contribution instructions. (Can leave Blank)"
    },
    {
        type: "input",
        name: "test",
        message: "Give test instructions for your project. (Can leave Blank)"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github name. (Can leave Blank)"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email. (Can leave Blank)"
    }
];

// function to write README file
function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
    {
        if (err) throw err;
        
        console.log("complete");
    });
}

// function to initialize program
function init() 
{
    inquirer.prompt(questions).then( answers => 
    {
        // Move answers to data variable
        data.title = answers.title;
        data.description = answers.description;
        data.installation = answers.installation;
        data.usage = answers.usage;
        data.license = answers.license;
        data.contribution = answers.contribution;
        data.test = answers.test;
        data.github = answers.github;
        data.email = answers.email;
        
        // Write data to file
        writeToFile("README-GENERATED.md", data);
    });
}

// function call to initialize program
init();