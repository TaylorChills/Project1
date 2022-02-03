
class FinishLine {
    constructor(game) {
        this.game = game;
        this.x = 900;
        this.y = 0;
        this.width = 75;
        this.height = 1000;
        this.img = new Image();
        this.canvas;
    }

    draw() {
        this.img.src = '/Pictures/Finish-line.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}