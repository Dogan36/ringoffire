export class Game {
    public players: string[] = [];
    public playerImages: string[] = []
    public stack: string[] = [];
    public playedCards: string[] = []
    public currentPlayer: number = 0;
    public pickCardAnimation = false;
    public currentCard = '';
    public gameOver = false

    constructor() {
        for (let i = 1; i < 4; i++) {
            this.stack.push(i + '_of_spades')
            this.stack.push(i + '_of_hearts')
            this.stack.push(i + '_of_diamonds')
            this.stack.push(i + '_of_clubs')
        }
        shuffle(this.stack)
    }
    public toJson() {

        return {
            players: this.players,
            playerImages: this.playerImages,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard,
            gameOver: this.gameOver
        };
    }
}


function shuffle(array: string[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
