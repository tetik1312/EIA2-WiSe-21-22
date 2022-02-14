"use strict";
var L09_2_Classes;
(function (L09_2_Classes) {
    class Cloud extends L09_2_Classes.Vector {
        update() {
            if (this.posX > L09_2_Classes.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L09_2_Classes.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
        drawCloud(_size, _pos) {
            console.log("Cloud");
            let nParticles = 60;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(_pos.x, _pos.y);
            L09_2_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_Classes.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = (Math.random() * _size.y);
                L09_2_Classes.crc2.translate(x, y);
                L09_2_Classes.crc2.fill(particle);
                L09_2_Classes.crc2.restore();
            }
            L09_2_Classes.crc2.restore();
        }
    }
    L09_2_Classes.Cloud = Cloud;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=cloud.js.map