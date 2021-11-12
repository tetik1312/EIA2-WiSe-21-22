var L03_Sequenz;
(function (L03_Sequenz) {
    var card;
    var prepTime;
    var gameTime;
    var word;
    var sequence;
    var timer;
    var gameField;
    var formData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var startButton = document.querySelector("#startButton");
        startButton.addEventListener("pointerup", createSequenz);
    }
    function createSequenz(_event) {
        formData = new FormData(document.forms[0]);
        console.log(formData);
        // prepTime = formData.get("prepTime");
        // word = formData.get("word");
        //gameTime = formData.get("gameTime");
        var body = document.querySelector("body");
        body.innerHTML = " ";
    }
    function createCard(_word) {
        var card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("hidden");
        card.addEventListener("click", clickHandler);
    }
    function clickHandler(_event) {
    }
})(L03_Sequenz || (L03_Sequenz = {}));
//# sourceMappingURL=seqmemory.js.map