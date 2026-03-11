import {argv} from 'node:process'
import { addTask, listTasks, deleteTask } from './storage.js';

const command = argv[2];

const argument = argv[3];

const commands = {
    add: addTask,
    list: listTasks,
    delete: deleteTask,
}

//Checks if the command is valid, once loop reaches final command and doesnt break we then throw an error.
if(!commands[command]){
    console.error("Not a valid command.");
    process.exit(1);
}

commands[command](argument);