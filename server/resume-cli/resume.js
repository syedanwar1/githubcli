var fs = require('fs');
var path = require('path');

var filepath = path.join(__dirname,'resume.json');

function getData() {
    return JSON.parse(fs.readFileSync(filepath));
}

// var[,,command] = process.argv;
function runCommand(command){
if (!command){
 return{
 output: null,
 error: 'Invalid Command',
 help: true
 }
}

if(command === 'clear'){
    return{
        output: 'clearCommand'
    }
}

var value = getData();

if(value[command]) {
    return{
    output: value[command],
    error: null,
    };
}
  return {
    output: null,
    error: 'Invalid command',
    help: true
  };
}

function showHelp(){
    return (`
        Use only below commands
        name
        qualification
        experience
        designation
        tech_stack
        db_language
        companies
        clear
        `);
}

module.exports = {showHelp,runCommand}