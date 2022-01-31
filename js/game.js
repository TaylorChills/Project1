

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
        this.pusheen = 
        [(new Pusheen(this, 1, 250, 150, 150)),
         (new Pusheen(this, 1, 150, 150, 150)),
         (new Pusheen(this, 1, 50, 150, 150)),
         (new Pusheen(this, 1, 350, 150, 150))] 
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
            pusheen.speed()
            pusheen.draw(); 
        })
    }

    drawBackground() {
        this.background.src = '/Pictures/Road.png';
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasLength)
    }
    
    /* 

    checkWhoCrossed() {
        let finished = this.pusheen;

        for (let i = 0; i <= finished.length; i++)
            if ()
        
        


    }   */     

    stop() {
        clearInterval(this.pusheen)
    }
}
