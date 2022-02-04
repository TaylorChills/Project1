
class Game {
    constructor(index) {
        this.index = index
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.background = new Image();
        this.finishLine = (new FinishLine(this))
        this.x = 0;
        this.y = 0;
        this.canvasWidth = 1000;
        this.canvasLength = 800;
        this.intervalId = null;
        this.pusheen = 
        [(new Pusheen(this, 1, 330, 200, 200, 'Badboy Pusheen')),
         (new Pusheen(this, 1, 395, 200, 200, 'Mr. fancy pants')),
         (new Pusheen(this, 1, 440, 200, 200, 'Senor Tacos')),
         (new Pusheen(this, 1, 500, 200, 200, 'Sushi Rollin'))] 
        this.theWinner = null
        this.gameRun = null
        this.funds = document.getElementById('funds')
        this.betAmount = parseInt(document.getElementById('bet-amount').value)
    }

    //Iterates over the update() function and runs everything
    start() {
        this.gameRun = true
        this.intervalId = setInterval(() => {
           this.update(); 
        }, 1000 / 120);
    }

    //Stop function for the Pusheens
    stop() {
        clearInterval(this.intervalId)
    }


    //A list of functions in a function for start() to iterate over
    update() {
        this.drawBackground();
        this.pusheen[0].drawRed();
        this.pusheen[1].drawBlue();
        this.pusheen[2].drawGreen();
        this.pusheen[3].drawPurple();
        this.pusheen.forEach((pusheen) => {pusheen.speed();})
        this.finishLine.draw();
        this.winner()
        this.bet()
        this.checkGameOver()
        this.buttonLockout()
    }

    //Draws the background
    drawBackground() {
        this.background.src = './Pictures/game-background.jpg';
        this.ctx.drawImage(this.background, this.x, this.y, 1000, 700)
    }

    
    //Iterates over the array of new Pusheens and pushes the first Pusheen to hit a point in the canvas to this.theWinner while displaying who won
    winner() { 
        this.gameRun = false
        for (let i = 0; i < this.pusheen.length; i++)
            if (this.pusheen[i].x > 800) {
                this.theWinner = this.pusheen[i]
                this.ctx.textAlign = 'center'
                this.ctx.font = "900 30px Courier New";
                this.ctx.fillStyle = "white";
                this.ctx.fillText(`${this.theWinner.name} Won The Race!`, 500, 75 );
                console.log(this.theWinner)
            }  
    } 

    //Checks if the winner is who you selected. Interacts with the DOM spam element to update the players wallet
    bet() {
        let selected = document.getElementById('Racers').value
        if (this.theWinner) {
            if (this.theWinner.name === selected) {
                this.funds.innerHTML = parseInt(this.funds.innerHTML) + (this.betAmount * 4);

            }else{
                this.funds.innerHTML = parseInt(this.funds.innerHTML) - (this.betAmount);
            }
        }  
    }

    //Checks if player is out of money. If so you can't press go again.
    checkGameOver() {
        if (this.funds.innerHTML <= 0) {
            document.getElementById('go-button').disabled = true;

        this.ctx.textAlign = 'center'
        this.ctx.font = "900 34px Courier New";
        this.ctx.fillStyle = "white";
        this.ctx.fillText('Good job! You lost ALL your money!', 500, 125 );
        
        }
    }

    //this checks if you don't have money or if you're betting more than you have
    validate() {
        if (this.betAmount > parseInt(this.funds.innerHTML)) {
            return alert('you dont have enough')

         } else if (this.betAmount <= 0) {
            return alert('please enter an amount')

        } else {
             this.start()
        }
    }
    
    //if there is no winner the go button is locked to prevent spamming the start game
    buttonLockout() {
        document.getElementById('go-button').disabled = true;

        if (this.theWinner != null) {
            document.getElementById('go-button').disabled = false;
        }
        
        
    }
}
