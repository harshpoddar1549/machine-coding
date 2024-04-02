// Assumption in the structure
// Board comes with Ladder Array (2D Array)= [[34,12], [50,3]]


export default class Board {
    constructor(snakesArr, ladderArr){
        this.snakes = snakesArr
        this.ladders = ladderArr
    }

    /* it returs an Array if true or else number/ Boolean */
    checkIfBittenBySnake(playerPosition) {
        for (let snake of this.snakes){
            if(playerPosition === snake[0]){
                return snake
            }
        }
        return -1
    }

    /* it returs an Array if true or else number/ Boolean */
    checkIfClimbingALadder(playerPosition) {
        for (let ladder of this.ladders){
            if(playerPosition === ladder[1]){
                return ladder
            }
        }
        return -1
    }
}
