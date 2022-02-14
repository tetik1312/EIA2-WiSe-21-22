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
    var Nut = /** @class */ (function (_super) {
        __extends(Nut, _super);
        function Nut(_position) {
            return _super.call(this, _position) || this;
        }
        Nut.prototype.drawNuts = function () {
            Advanced.crc2.save();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(this.position.x, this.position.y, 6, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "brown";
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        };
        return Nut;
    }(Advanced.Moveable));
    Advanced.Nut = Nut;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=nut.js.map