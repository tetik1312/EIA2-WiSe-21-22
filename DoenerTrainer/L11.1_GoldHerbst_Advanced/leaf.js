"use strict";
var Advanced;
(function (Advanced) {
    class Leaf extends Advanced.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        draw() {
            Advanced.crc2.save();
            Advanced.crc2.translate(this.posX, this.posY);
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(0, 0, 11, 20, 10, 16, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fillStyle = "#d30000";
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
        update() {
            if (this.posX > Advanced.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.counter == this.randomNumber) {
                //this.velocityX = -this.velocityX;
                //this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
            this.draw();
        }
    }
    Advanced.Leaf = Leaf;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=leaf.js.map