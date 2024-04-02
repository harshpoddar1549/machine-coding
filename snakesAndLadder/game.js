export default class Game{
    constructor(_board, _playerArr){
        this.board = _board
        this.players = _playerArr
        this.isGameOver = false
    }

    rollADie(player){
        const randomNumber = Math.floor(Math.random() * 6) + 1
        const playerOldPosition = player.position
        let playerPosition = player.move(randomNumber)

        let res = this.board.checkIfBittenBySnake(playerPosition)
        if(res != -1){
            console.log(`${player.name} got bitten by a snake`)
            playerPosition = res[1]
        }

        res = this.board.checkIfClimbingALadder(playerPosition)
        if(res != -1){
            console.log(`${player.name} got a ladder`)
            playerPosition = res[1]
        }

        console.log(`${player.name} rolled a ${randomNumber} and moved from ${playerOldPosition} to ${playerPosition}`)
        if(this.isWinner(playerPosition)){
            console.log(`${player.name} wins the game`)
        }
    }

    isWinner(playerPosition){
        if (playerPosition === 100){
            this.isGameOver = true
            return true
        }
        return false
    }
}