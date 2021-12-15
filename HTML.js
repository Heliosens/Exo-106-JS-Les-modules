export {createDiv, createInput, createLabel};


// create element div
let createDiv = function(targetElem, text){
    let elem = document.createElement('div');
    elem.innerHTML = text;
    return elem;
}

// create input
let createInput = function (targetElem, inputType){
    let elem = document.createElement('input');
    elem.type = inputType;
    return elem;
}

// create label
let createLabel = function (targetElem, text){
    let elem = document.createElement('label');
    elem.innerHTML = text;
    return elem;
}
