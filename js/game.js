

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
        [(new Pusheen(this, 1, 50, 150, 150, '1')),
         (new Pusheen(this, 1, 150, 150, 150, '2')),
         (new Pusheen(this, 1, 250, 150, 150, '3')),
         (new Pusheen(this, 1, 350, 150, 150, '4'))] 
        
    }

    start() {
        this.intervalId = setInterval(() => {
           this.update(); 
        }, 1000 / 90);
    }

    update() {
        this.drawBackground();
        this.finishLine.draw();
        this.pusheen.forEach((pusheen) => {
            pusheen.speed();
            pusheen.draw();
        })
        this.winner()
        this.drawScore()
        
    }

    drawBackground() {
        this.background.src = '/Pictures/Road.png';
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasLength)
    }

    stop() {
        clearInterval(this.intervalId)
    }

    winner() {
        let winner = []
        for (let i = 0; i < this.pusheen.length; i++)

            if (this.pusheen[i].x > 500 ) {
                winner.push(this.pusheen[i])
            }
            console.log(winner)
           
        } 
            /* 
            this.ctx.font = "16px Arial";
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fillText(`Score: ${winner[0]}, 8, 20);
    */

    drawScore() {
     
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: ${winner}", 8, 20);
    }

   
}
