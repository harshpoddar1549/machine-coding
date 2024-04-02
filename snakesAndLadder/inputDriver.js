
import * as readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const takeInput = async () => {
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
            const postions = await rl.question('snake position ? ')
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
        return ladderArr 
    }
}
