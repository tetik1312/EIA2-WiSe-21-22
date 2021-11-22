  /*
    Aufgabe: <L08.1 Generative Art>
    Name: <Asya Tetik>
    Martrikelnummer: <268052>
    Datum: <20.11.2021>
    Quellen: <zusammengearbeitet mit Christina Gabler, Deborah Reinbold und Lisa Fingerle>
    */ 
namespace Canvas {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let button: HTMLButtonElement;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        button = document.querySelector("#button");
        button.addEventListener("click", reloadButton);

        for (let i: number = 0; i < 40; i++) {
            let x: number = Math.random() * 800;
            let y: number = Math.random() * 400;
            drawTriangle(x, y);
            let a: number = Math.random() * 800;
            let b: number = Math.random() * 400;
            drawCircle(a, b);
            let c: number = Math.random() * 800;
            let d: number = Math.random() * 400;
            drawLines(c, d);
            let e: number = Math.random() * 800;
            let f: number = Math.random() * 400;
            drawLine(e, f);
            let g: number = Math.random() * 800;
            let h: number = Math.random() * 400;
            word(g, h);

        }
    }

    function reloadButton(): void {
        window.location.reload();
    }

    function generateColor(): string {
        var color: string = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            +
            Math.floor(Math.random() * 255) + ")";
        return color;

    }

    function drawTriangle(_x: number, _y: number): void {
        crc2.fillStyle = generateColor();
        crc2.strokeStyle = "#F7D358";
        crc2.lineWidth = 3;

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 35);
        crc2.lineTo(_x + 40, _y + 17);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

    }

    function drawCircle(_a: number, _b: number): void {
        crc2.fillStyle = generateColor();
        crc2.strokeStyle = "#FE642E";
        crc2.lineWidth = 2;

        crc2.beginPath();
        crc2.arc(_a, _b, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawLines(_c: number, _d: number): void {
        crc2.strokeStyle = generateColor();
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(_c, _d);
        crc2.lineTo(300, 150);
        crc2.stroke();
    }

    function drawLine(_e: number, _f: number): void {
        crc2.strokeStyle = generateColor();
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(_e, _f);
        crc2.lineTo(100, 350);
        crc2.stroke();
    }

    function word(_g: number, _h: number): void {
        crc2.font = "30px Arial";
        crc2.strokeText("Party", _g, _h);
    }

}