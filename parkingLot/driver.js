import * as readline from 'readline/promises'
import { handleUserInput } from './services/handleUserInput.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let userInput;

while(userInput!="exit"){
    userInput = await rl.question(">> ")
    handleUserInput(userInput)
}

rl.close()