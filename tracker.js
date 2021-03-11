const { createPromptModule } = require("inquirer");
const inquirer = require("inquirer");
const mysql = requirer("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gautham01",
    port: 3360,
    database: "employeeTrackerDB"
});

connection.connect((err) => {
    if(err) throw err;
    questions ();
});

function question(){
    inquirer.prompt([
        {
            type:"list",
            message:"What do you want to do?",
            name:"choice",
            choices: ["Edit","Add","view","Exit","Remove"]
        }
    ]).then(answers => {
        switch(answers.choice){
            case "Edit":
                return updatePrompt(false);
            case "Add":
                return createPrompt(false);
            case "view":
                return viewPrompt();
            case "Exit":
                return exitApp();    
        }
    });
}
