import Board from "./board.js";
import Player from "./player.js";
import Game from "./game.js";
import * as readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let snakeArr = []
let ladderArr = []
let playerArr = []
try{
    const snakeLen = await rl.question('Snakes? ')
    for (let i=0; i< snakeLen; i++){
        const postions = await rl.question('snake position ? ')
        snakeArr.push(postions.split(" ").map((val) => parseInt(val)))
    }
    console.log(snakeArr)

    const ladderLen = await rl.question('Ladder? ')
    for (let i=0; i< ladderLen; i++){
        const postions = await rl.question('Ladder position ? ')
        ladderArr.push(postions.split(" ").map((val) => parseInt(val)))
    }
    console.log(ladderArr)

    const playerLen = await rl.question('Player? ')
    for (let i=0; i< playerLen; i++){
        const name = await rl.question('Player Names ? ')
        playerArr.push(name)
    }
    console.log(playerArr)
}finally{
    rl.close(); 
}

const board = new Board(snakeArr, ladderArr)
let playerObjArr = []
for (let name of playerArr){
    playerObjArr.push(new Player(name))
}
const game = new Game(board, playerObjArr)

let i = 0
while(!game.isGameOver){
    game.rollADie(playerObjArr[i])
    i = (i+1)%(playerObjArr.length)
}