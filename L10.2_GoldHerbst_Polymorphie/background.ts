namespace Polymorphie {
    export function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "orange");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    export function drawMountains(_position: Vector, _min: number, _max: number, _colorlow: string, _colorhigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorlow);
        gradient.addColorStop(0.6, _colorhigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }

    export function drawSun(_position: Vector): void {
        console.log("Sun", _position);
        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    export function drawPineTree(_min: number, _max: number): void {
        let treesColors: string[] = ["#182E1A", "#224225", "#356E3C"];

        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        let horizon: number = crc2.canvas.height * golden;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 30));
            //Stamm
            crc2.fillStyle = "#473306";
            crc2.fillRect(0, 0, 30, -40);
            let y1: number = -40;
            let y2: number = -100;
            for (let x: number = 0; x < 3; x++) {
                //triangle
                crc2.beginPath();
                crc2.moveTo(-50, y1);
                crc2.lineTo(80, y1);
                crc2.lineTo(15, y2);
                crc2.closePath();
                crc2.fillStyle = treesColors[x];
                crc2.fill();
                //
                y1 += -40;
                y2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        }
        while (x < crc2.canvas.width);
    }

    export function drawBush(_position: Vector, _size: Vector, _min: number, _max: number): void {

        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        let position: number = crc2.canvas.height * golden;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 20));

            let nParticles: number = 60;
            let radiusParticle: number = 15;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#C3AE2E");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();

        }
        while (x < crc2.canvas.width);
    }
}