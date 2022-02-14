"use strict";
//wurde gemeinsam bearbeitet mit: Lisa, Debbie, Tini
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    let mouseX;
    let mouseY;
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("keyup", logInfo);
        document.getElementById("div1").addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        mouseX = _event.x;
        mouseY = _event.y;
        document.getElementById("span").innerHTML = "x position:" + mouseX + "y position:" + mouseY;
        document.getElementById("span").style.left = _event.x + "px";
        document.getElementById("span").style.top = _event.y + "px";
    }
    function logInfo(_event) {
        console.log("Target: " + _event.target);
        console.log("CurrentTarget:" + _event.currentTarget);
        console.log("Type Event: " + _event.type);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {})); //namespace
//# sourceMappingURL=event.js.map