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
    var Leaf = /** @class */ (function (_super) {
        __extends(Leaf, _super);
        function Leaf(_position, _velocity, _randomScale) {
            var _this = _super.call(this, _position, _velocity) || this;
            _this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            _this.counter = 0;
            _this.randomScaleX = _randomScale.x;
            _this.randomScaleY = _randomScale.y;
            return _this;
        }
        Leaf.prototype.draw = function () {
            Advanced.crc2.save();
            Advanced.crc2.translate(this.posX, this.posY);
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(0, 0, 11, 20, 10, 16, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fillStyle = "#d30000";
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        };
        Leaf.prototype.update = function () {
            if (this.posX > Advanced.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.counter == this.randomNumber) {
                //this.velocityX = -this.velocityX;
                //this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
            this.draw();
        };
        return Leaf;
    }(Advanced.Moveable));
    Advanced.Leaf = Leaf;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=leaf.js.map