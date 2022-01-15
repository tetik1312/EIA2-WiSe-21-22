/*
  Aufgabe: <L11.1_GoldenerHerbst: Advanced>
  Name: <Asya Tetik>
  Martrikelnummer: <268052>
  Datum: <13.01.2022>
  Quellen: <zusammengearbeitet mit Christina, Debbie und Lisa >
*/
namespace Advanced {
    export let crc2: CanvasRenderingContext2D;
    export let goldenCut: number = 0.62;
    let moveable: Moveable [] = [];
    let imageData: ImageData;
    
    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;

        createBackground();
        createLeafs(14);
        createSquirrels(4);
        createNut();
        createCloud();
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }

    function createBackground(): void {
        let horizon: number = crc2.canvas.height * goldenCut;
        let posMountains: Vector = {x: 0, y: horizon};
        drawBackground();
        drawSun({x: crc2.canvas.width * .15, y: crc2.canvas.height * .2});
        drawMountains(posMountains, 75, 200, "black", "white");
        drawMountains(posMountains, 50, 150, "grey", "white");
        drawPineTree(-30, -50, .6, .9);
        drawPineTree(-70, -90, .5, .7);
    }

    export function createLeafs(_nLeaf: number): void {
        for (let index: number = 0; index < _nLeaf; index++) {

            let randomScaleY: number = 0.1 + Math.random() * (0.1 - 0.05);
            let randomScaleX: number = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;

            let randomVelocityX: number = (Math.random() - 0.5) * 3; 
            let randomVelocityY: number = (Math.random() - 0.5) * 3;

            moveable.push(new Leaf({ x: crc2.canvas.width, y: crc2.canvas.height * -0.1}, { x: randomVelocityX, y: randomVelocityY }, {x: randomScaleX, y: randomScaleY}));
        }
    }

    function createNut(_event: MouseEvent): void {
        console.log(_event);
        let nut = new Nut(new Vector (_event.clientX, _event.clientY));
        moveables.push(nut);
        let nutSpot: Vector = new Vector(_event.clientX, _event.clientY);
        nutPosition.push(nutSpot);
        console.log(nutPosition); 

    }

    function createSquirrels (_nSquirrel: number): void {
        for (let index: number = 0; index < _nSquirrel; index++) {

            let randomScaleY: number = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX: number = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;

            let randomVelocityX: number = (Math.random() - 0.5) * 3; 
            let randomVelocityY: number = (Math.random() - 0.5) * 3;

            moveable.push(new Squirrel({ x: crc2.canvas.width / 2, y: crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, {x: randomScaleX, y: randomScaleY}));
        } 
    }

    function createCloud (): void {
        moveable.push(new Cloud({ x: crc2.canvas.width * .7, y: crc2.canvas.height * 0.19 }, {x: 0.17, y:  0.1}));
        moveable.push(new Cloud({ x: crc2.canvas.width * .10, y: crc2.canvas.height * 0.23 }, {x: 0.17, y:  0.1}));
        moveable.push(new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * 0.2 }, {x: 0.17, y:  0.1}));
        moveable.push(new Cloud({ x: crc2.canvas.width * .2, y: crc2.canvas.height * 0.2 }, {x: 0.17, y:  0.1}));
    }

    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let index: number = 0; index < moveable.length; index ++) {
            moveable[index].update();
            // moveable[index].draw();
        }

    }
}