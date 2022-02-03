

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
        [(new Pusheen(this, 1, 330, 200, 200, 'Red Scoot')),
         (new Pusheen(this, 1, 395, 200, 200, 'Blue Scoot')),
         (new Pusheen(this, 1, 440, 200, 200, 'Green Scoot')),
         (new Pusheen(this, 1, 500, 200, 200, 'Purple Scoot'))] 
        this.theWinner = null
        this.gameRun = null
        this.funds = document.getElementById('funds')
        this.betAmount = parseInt(document.getElementById('bet-amount').value)
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
        this.background.src = '/Pictures/game-background.jpg';
        this.ctx.drawImage(this.background, this.x, this.y, 1000, 700)
    }

    stop() {
        clearInterval(this.intervalId)
    }

    winner() { 
        this.gameRun = false
        for (let i = 0; i < this.pusheen.length; i++)
            if (this.pusheen[i].x > 850 ) {
                this.theWinner = this.pusheen[i]
                //Displays winner name
                this.ctx.textAlign = 'center'
                this.ctx.font = "900 30px Courier New";
                this.ctx.fillStyle = "white";
                this.ctx.fillText(`${this.theWinner.name} Won The Race!`, 500, 75 );
            }  
    } 

   



    bet() {
        let selected = document.getElementById('Racers').value
        console.log(selected)

        
        
        if (this.theWinner) {
         
            if (this.theWinner.name === selected) {
                console.log('first')
                this.funds.innerHTML = parseInt(this.funds.innerHTML) + (this.betAmount * 4);

            }else{
                console.log('second')
                this.funds.innerHTML = parseInt(this.funds.innerHTML) - this.betAmount;
            }
        }
        
        
    }

    checkGameOver() {
        if (this.funds.innerHTML <= 0) {
            console.log('loser')
            document.getElementById('go-button').disabled = true;


        this.ctx.textAlign = 'center'
        this.ctx.font = "900 30px Courier New";
        this.ctx.fillStyle = "white";
        this.ctx.fillText('Good job! You lost ALL your money!', 500, 125 );
        
        }
    }


    validate() {
        if (this.betAmount > parseInt(this.funds.innerHTML)) {
            return alert('you dont have enough')
         } else {
             this.start()
         }
    }
}
