import {createDiv, createInput, createLabel} from "./HTML.js";

let result = document.getElementById('result');

result.appendChild(createDiv(result, "Creation d'un élément div"));

result.appendChild(createLabel(result, "E-mail"));

result.appendChild(createInput(result, "email"));

result.appendChild(createLabel(result, "Password"));

result.appendChild(createInput(result, "password"));
