"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Leaf extends Polymorphie.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        draw() {
            let nLeaves = 50;
            let r = 15;
            for (let drawn = 0; drawn < nLeaves; drawn++) {
                let leaves = new Path2D();
                let x = Math.random() * 1000;
                let y = Math.random() * 1200;
                leaves.ellipse(x, y, r, 4, 2, 10, 60);
                Polymorphie.crc2.fillStyle = "#C3AE2E";
                Polymorphie.crc2.fill(leaves);
            }
        }
        update() {
            if (this.posX > Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Polymorphie.crc2.canvas.height || this.posY < Polymorphie.crc2.canvas.height * 0.65) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                // this.velocityX = -this.velocityX;
                // this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
            this.draw();
        }
    }
    Polymorphie.Leaf = Leaf;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=leaf.js.map