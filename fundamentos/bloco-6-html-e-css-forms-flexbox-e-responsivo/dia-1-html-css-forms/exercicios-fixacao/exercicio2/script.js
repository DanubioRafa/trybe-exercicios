// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function addEventToHREF() {
    HREF_LINK.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('a');
    });

}
addEventToHREF();

function addEventToCheck() {
    INPUT_CHECKBOX.addEventListener('click', (event) => {
        event.preventDefault();
    });
}
addEventToCheck();

function addEventToText() {
    INPUT_TEXT.addEventListener('keypress', (e) => {
        e.preventDefault();
    });
}
addEventToText();