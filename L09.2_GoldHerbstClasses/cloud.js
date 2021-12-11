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
var L09_2_Classes;
(function (L09_2_Classes) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cloud.prototype.update = function () {
            if (this.posX > L09_2_Classes.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L09_2_Classes.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        };
        Cloud.prototype.drawCloud = function (_size, _pos) {
            console.log("Cloud");
            var nParticles = 60;
            var radiusParticle = 50;
            var particle = new Path2D();
            var gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(_pos.x, _pos.y);
            L09_2_Classes.crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                L09_2_Classes.crc2.save();
                var x = (Math.random() - 0.5) * _size.x;
                var y = (Math.random() * _size.y);
                L09_2_Classes.crc2.translate(x, y);
                L09_2_Classes.crc2.fill(particle);
                L09_2_Classes.crc2.restore();
            }
            L09_2_Classes.crc2.restore();
        };
        return Cloud;
    }(L09_2_Classes.Vector));
    L09_2_Classes.Cloud = Cloud;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=cloud.js.map