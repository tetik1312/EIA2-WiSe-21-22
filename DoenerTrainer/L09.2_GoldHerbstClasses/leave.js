"use strict";
var L09_2_Classes;
(function (L09_2_Classes) {
    class Leaf extends L09_2_Classes.Vector {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        update() {
            if (this.posX > L09_2_Classes.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L09_2_Classes.crc2.canvas.height || this.posY < L09_2_Classes.crc2.canvas.height * 0.65) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
            this.drawLeavesOrange();
            this.drawLeaves();
        }
        drawLeavesOrange() {
            let nLeaves = 50;
            let r = 15;
            for (let drawn = 0; drawn < nLeaves; drawn++) {
                let leaves = new Path2D();
                let x = Math.random() * 1000;
                let y = Math.random() * 1200;
                leaves.arc(x, y, r, 199, 50 * Math.PI);
                L09_2_Classes.crc2.fillStyle = "#DC7726";
                L09_2_Classes.crc2.fill(leaves);
            }
        }
        drawLeaves() {
            let nLeaves = 50;
            let r = 15;
            for (let drawn = 0; drawn < nLeaves; drawn++) {
                let leaves = new Path2D();
                let x = Math.random() * 1000;
                let y = Math.random() * 1200;
                leaves.ellipse(x, y, r, 4, 2, 10, 60);
                L09_2_Classes.crc2.fillStyle = "#C3AE2E";
                L09_2_Classes.crc2.fill(leaves);
            }
        }
    }
    L09_2_Classes.Leaf = Leaf;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=leave.js.map