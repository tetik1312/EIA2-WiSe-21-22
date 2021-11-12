var L03_Sequenz;
(function (L03_Sequenz) {
    var form;
    var memoryField;
    var startButton;
    var sequence = [];
    // let formData: FormData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        form = document.querySelector("#settings");
        form.addEventListener("change", clickHandler);
        memoryField = document.querySelector("#field");
        startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", createCard);
    }
    function clickHandler(_event) {
        var formData = new FormData(document.forms[0]);
        // sequence = [];
        // for (let entry of formData) {
        //     sequence.push(String(entry[1]));
        //     console.log(entry);
        // }    
    }
    function createCard(_word) {
        form.classList.add("hidden");
        startButton.classList.add("hidden");
    }
})(L03_Sequenz || (L03_Sequenz = {}));
//# sourceMappingURL=seqmemory.js.map