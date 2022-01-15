/*
  Aufgabe: <L10.2_GoldenerHerbst: Polymorphie>
  Name: <Asya Tetik>
  Martrikelnummer: <268052>
  Datum: <08.01.2022>
  Quellen: <zusammengearbeitet mit Christina, Debbie und Lisa >
*/
namespace Polymorphie {
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    let moveable: Moveable [] = [];
    let imageData: ImageData;
    let horizon: number = crc2.canvas.height * golden;

    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        // let horizon: number = crc2.canvas.height * golden;

        createBackground();
        createLeaves(20);
        createSquirrel(6);
        createCloud();
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();

    }

    function createBackground(): void {
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawPineTree(-10, -100);
        drawBush({ x: 130, y: 350 }, { x: 100, y: 100 }, 250, 300);


    }

    export function createLeaves(_nleaf: number): void {
        for (let i: number = 0; i < _nleaf; i++) {
            let randomScaleY: number = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX: number = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;

            let randomVelocityX: number = (Math.random() - 0.5) * 3;
            let randomVelocityY: number = (Math.random() - 0.5) * 3;

            moveable.push(new Leaf({x: crc2.canvas.width / 2, y: crc2.canvas.height * 0.8}, { x: randomVelocityX, y: randomVelocityY }, {x: randomScaleX, y: randomScaleY}));
        }
    }

    function createSquirrel(_nSquirrel: number): void {
        for (let index: number = 0; index < _nSquirrel; index++) {

            let randomScaleY: number = 0.90 + Math.random() * (0.30 - 0.10);
            let randomScaleX: number = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;

            let randomVelocityX: number = (Math.random() - 0.5) * 2;
            let randomVelocityY: number = (Math.random() - 0.5) * 3;

            moveable.push(new Squirrel({ x: crc2.canvas.width / 2, y: crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }

    function createCloud(): void {
        moveable.push(new Cloud({ x: crc2.canvas.width * .7, y: crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Cloud({ x: crc2.canvas.width * .10, y: crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Cloud({ x: crc2.canvas.width * .2, y: crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }

    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        for (let i: number = 0; i < moveable.length; i++) {
            moveable[i].draw();
            moveable[i].update();
        }
    }

}