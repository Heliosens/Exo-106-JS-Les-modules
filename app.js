import {createDiv, createInput, createLabel} from "./HTML.js";

let result = document.getElementById('result');

result.appendChild(createDiv("Creation d'un élément div"));

result.appendChild(createLabel("E-mail"));

result.appendChild(createInput("email"));

result.appendChild(createLabel("Password"));

result.appendChild(createInput("password"));
