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
var Advanced;
(function (Advanced) {
    var Squirrel = /** @class */ (function (_super) {
        __extends(Squirrel, _super);
        function Squirrel(_position, _velocity, _randomScale) {
            var _this = _super.call(this, _position, _velocity) || this;
            _this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            _this.counter = 0;
            _this.randomScaleX = _randomScale.x;
            _this.randomScaleY = _randomScale.y;
            return _this;
        }
        Squirrel.prototype.update = function () {
            if (this.posX > Advanced.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Advanced.crc2.canvas.height || this.posY < Advanced.crc2.canvas.height * 0.65) {
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
        };
        Squirrel.prototype.draw = function () {
            Advanced.crc2.save();
            Advanced.crc2.translate(this.posX, this.posY);
            // Schwanz 
            Advanced.crc2.scale(this.randomScaleX, this.randomScaleY);
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "brown";
            Advanced.crc2.ellipse(-20, -25, 14, 28, 12, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            // Arm
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(35, -30, 5, 15, 2, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            // Bauch 
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(10, -20, 20, 29, 10, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            //Ohren 
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(1, -65, 10, 3, 10, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(30, -65, 10, 3, 15, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            //Kopf 
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(15, -50, 13, 13, 0, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            // Füße 
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(15, -2, 5, 25, -80, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        };
        return Squirrel;
    }(Advanced.Moveable));
    Advanced.Squirrel = Squirrel;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=squirrel.js.map