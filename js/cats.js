
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

    draw() {
        this.img.src = '/Pictures/Pusheen-Scooter.png';
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

        if (this.x > 500) {
            return this.game.stop()
        }

    }

    speedSelect() {
        let speeds = [1, 0.25, 2, 0.25, 1, 3, 0.25, 2, 0.25, 0.25, 1, 4, 0.25]

        return speeds[Math.floor(Math.random() * speeds.length)];
    }

    speed() {
        let speeds = this.speedSelect()

        
        return this.x += speeds
    }

}

