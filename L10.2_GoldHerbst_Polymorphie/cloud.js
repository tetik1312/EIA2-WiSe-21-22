var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Polymorphie;
(function (Polymorphie) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(_position, _velocity) {
            return _super.call(this, _position, _velocity) || this;
        }
        Cloud.prototype.draw = function () {
            var gradient = Polymorphie.crc2.createLinearGradient(0, 0, 0, Polymorphie.crc2.canvas.height);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.7, "black");
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.posX, this.posY);
            Polymorphie.crc2.scale(0.6, 0.6);
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(-115, -20);
            Polymorphie.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Polymorphie.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            Polymorphie.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Polymorphie.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Polymorphie.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Polymorphie.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Polymorphie.crc2.fillStyle = gradient;
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.restore();
        };
        Cloud.prototype.update = function () {
            if (this.posX > Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Polymorphie.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        };
        return Cloud;
    }(Polymorphie.Moveable));
    Polymorphie.Cloud = Cloud;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=cloud.js.map