
class FinishLine {
    constructor(game) {
        this.game = game;
        this.x = 870;
        this.y = 490;
        this.width = 150;
        this.height = 250;
        this.img = new Image();
        this.canvas;
    }

    draw() {
        this.img.src = '/Pictures/flagpole.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}