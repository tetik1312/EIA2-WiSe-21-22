namespace Polymorphie {
    export class Leaf extends Moveable {
        randomScaleX: number;
        randomScaleY: number;
        randomNumber: number = (Math.floor(Math.random() * 800) + 100);
        counter: number = 0;

        constructor(_position: Vector, _velocity: Vector, _randomScale: Vector) {
            super(_position, _velocity);
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }

        draw(): void {
            let nLeaves: number = 50;
            let r: number = 15;

            for (let drawn: number = 0; drawn < nLeaves; drawn++) {
                let leaves: Path2D = new Path2D();
                let x: number = Math.random() * 1000;
                let y: number = Math.random() * 1200;

                leaves.ellipse(x, y, r, 4, 2, 10, 60);
                crc2.fillStyle = "#C3AE2E";
                crc2.fill(leaves);
            }
        }

        update(): void {
            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.65) {
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
            this.draw();
        }
    }
}
