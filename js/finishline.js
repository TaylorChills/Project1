
class FinishLine {
    constructor(game) {
        this.game = game;
        this.x = 925;
        this.y = 0;
        this.width = 75;
        this.height = 1000;
        this.img = new Image();
        this.canvas;
    }

    left() {
        return this.x;
    }

    draw() {
        this.img.src = '/Pictures/Finish-line.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}