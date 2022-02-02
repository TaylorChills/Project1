

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
        this.canvasLength = 600;
        this.intervalId = null;
        this.pusheen = 
        [(new Pusheen(this, 1, 100, 150, 150, 'Red Scoot')),
         (new Pusheen(this, 1, 190, 150, 150, 'Blue Scoot')),
         (new Pusheen(this, 1, 290, 150, 150, 'Green Scoot')),
         (new Pusheen(this, 1, 380, 150, 150, 'Purple Scoot'))] 
        this.theWinner = null
        this.gameRun = null
        this.funds = document.getElementById('funds')
    }

    start() {
        this.gameRun = true
        this.intervalId = setInterval(() => {
           this.update(); 
        }, 1000 / 120);
        
    }

    update() {
        this.drawBackground();
        this.finishLine.draw();
        this.pusheen.forEach((pusheen) => {
            pusheen.speed();
        })
        this.pusheen[0].drawRed();
        this.pusheen[1].drawBlue();
        this.pusheen[2].drawGreen();
        this.pusheen[3].drawPurple();
        this.winner()
        this.bet()
        this.checkGameOver()
    }

    drawBackground() {
        this.background.src = '/Pictures/Road.png';
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, 700)
    }

    stop() {
        clearInterval(this.intervalId)
    }

    winner() {
        
        
        this.gameRun = false
        for (let i = 0; i < this.pusheen.length; i++)
            if (this.pusheen[i].x > 850 ) {
                this.theWinner = this.pusheen[i]
                this.ctx.textAlign = 'center'
                this.ctx.font = "900 30px Courier New";
                this.ctx.fillStyle = "black";
                this.ctx.fillText(`${this.theWinner.name} Won The Race!`, 500, 75 );
            }  
    } 



    bet() {
        let betAmount = parseInt(document.getElementById('bet-amount').value)
        let selected = document.getElementById('Racers').value
        console.log(selected)
        
        if (this.funds.innerHTML <= 0) {

        }

        if (this.theWinner) {
         
            if (this.theWinner.name === selected) {
                console.log('first')
                this.funds.innerHTML = parseInt(this.funds.innerHTML) + (betAmount * 4);

            }else{
                console.log('second')
                this.funds.innerHTML = parseInt(this.funds.innerHTML) - betAmount;
            }
        }
    }

    checkGameOver() {
        if (this.funds.innerHTML <= 0) {
            console.log('loser')
        }
    }





  /*   
    bet() {
        let winner = winner()

        inputAmount = parseInt(document.getElementsById('amount').value);

        if (winner.pusheen[0] == this.bet)
            this.index.


    }

 */



}
