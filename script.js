//your JS code here. If required.

let blockId = document.getElementById("block_id");
let colourId = document.getElementById("colour_id");

let changeButton = document.getElementById("change_button");
let resetButton = document.getElementById("Reset");

let gridItems = document.getElementsByClassName("grid-item");

changeButton.addEventListener("click", function() {

    let id = blockId.value;
    let color = colourId.value;

    // First reset all grid colors
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "transparent";
    }

    // Find the selected grid
    let selectedBlock = document.getElementById(id);

    // Change its background color
    if (selectedBlock && id >= 1 && id <= 9 && color !== "") {
        selectedBlock.style.backgroundColor = color;
    }
    else {
        alert("Please enter a valid block ID and color");
    }

});

resetButton.addEventListener("click", function() {

    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "transparent";
    }

    blockId.value = "";
    colourId.value = "";

});
