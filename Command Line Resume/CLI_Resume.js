const { createPromptModule } = require('inquirer');
const inquirer = require('inquirer');
const cp = require('child_process')

function displayList(){
inquirer
    .prompt([
        {
            type: "list",
            name: 'selection',
            choices: ['About','Skills','Projects','Academics']
        }
    ])
    .then(function(answer){
        if(answer.selection=='About'){
            console.log("Hi, I'm Shikher Jaitly,I’m interested in web development and Devops,I'm currently working as a software Engineer intern!!");
            displayNext();
        }
        else if(answer.selection =='Skills'){
            console.log('JavaScript, Python, Java, Problem Solving, NodeJS, Flask');
            displayNext();
        }
        else if(answer.selection == 'Academics'){
            console.log('Academics section');
            displayNext();
        }
        else if(answer.selection == 'Projects'){
            cp.execSync('start chrome https://github.com/shikherjaitly')
            displayNext();
        }
    }) 
}

displayList()

function displayNext(){
    inquirer
    .prompt([
        {
            type: "list",
            name: 'selection',
            choices: ['Go Back','Exit']
        }
    ])
    .then(function(answer){
        if(answer.selection=='Go Back'){
            displayList()
        }
        else if(answer.selection =='Exit'){
            console.log('Thanks for Checking out my Resume');
        }
    }) 

}