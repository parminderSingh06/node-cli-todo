import {argv} from 'node:process'
import { addTask, listTasks, deleteTask } from './storage.js';

const command = argv[2];

const commandArgs = argv[3];

const validCommands = ['add', 'list', 'delete'];

const commands = {
    add: addTask,
    list: listTasks,
    delete: deleteTask,
}

//Checks if the command is valid, once loop reaches final command and doesnt break we then throw an error.
for(let i=0;i<validCommands.length;i++){
    if(validCommands[i] == command){
        break;
    }
    if(i == validCommands.length-1) console.error("Not a valid command.");
}

commands[command](commandArgs);