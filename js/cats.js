
class Pusheen {
    constructor(game, x, y, width, height, name, img) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.name = name;
        this.img = new Image()
        this.canvas;

    }

    //Each draw function contains the image for each Pusheen. They are referenced to their character in the update() function
    drawRed() {
        this.img.src = './Pictures/Test bikes/badass.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.x > 800) {
            return this.game.stop()
        }
    }
    drawBlue() {
        this.img.src = './Pictures/Test bikes/fancy.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.x > 800) {
            return this.game.stop()
        }
    }
    drawGreen() {
        this.img.src = './Pictures/Test bikes/compa.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.x > 800) {
            return this.game.stop()
        }
    }
    drawPurple() {
        this.img.src = './Pictures/Test bikes/hungry.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.x > 800) {
            return this.game.stop()
        }
    }

    //Randomizes an array of x values for the characters
    speedSelect() {
        let speeds = [1, 0.25, 2, 0.25, 1, 3, 0.25, 2, 0.25, 0.25, .25, 4, 0.25, 4, 1, 0.25, 0.50, 0.25, 0.5, 6]

        return speeds[Math.floor(Math.random() * speeds.length)];
    }

    //Selects randoms speeds from speedSelect() and increments the player x value
    speed() {
        let speeds = this.speedSelect()
        return this.x += speeds
    }

}

