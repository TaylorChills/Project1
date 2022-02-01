

class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.background = new Image();
        this.finishLine = (new FinishLine(this))
        this.x = 0;
        this.y = 0;
        this.canvasWidth = 1000;
        this.canvasLength = 600;
        this.intervalId = null;
        //this.winner = null;
        this.pusheen = 
        [(new Pusheen(this, 1, 100, 150, 150, 'Red Scoot')),
         (new Pusheen(this, 1, 190, 150, 150, 'Blue Scoot')),
         (new Pusheen(this, 1, 290, 150, 150, 'Green Scoot')),
         (new Pusheen(this, 1, 380, 150, 150, 'Purple Scoot'))] 
        
    }

    start() {
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
       // this.drawScore()
        
    }

    drawBackground() {
        this.background.src = '/Pictures/Road.png';
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, 700)
    }

    stop() {
        clearInterval(this.intervalId)
    }

    winner() {
        let winnerArr = []
        let winner
        for (let i = 0; i < this.pusheen.length; i++)

            if (this.pusheen[i].x > 850 ) {
                winnerArr.push(this.pusheen[i])
            }
            if (winnerArr.length !== 0) {
                winner = winnerArr[0].name
                this.ctx.textAlign = 'center'
                this.ctx.font = "900 30px Courier New";
                this.ctx.fillStyle = "black";
                console.log(winnerArr)
                return this.ctx.fillText(`${winner} Won The Race!`, 500, 75 );
            }

            
           
        } 
}
