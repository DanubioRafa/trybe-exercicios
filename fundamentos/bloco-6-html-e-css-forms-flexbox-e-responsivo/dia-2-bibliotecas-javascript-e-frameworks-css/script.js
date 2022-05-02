const buttonSubmit = document.getElementById('submit');

function addEventToSubmit() {
    buttonSubmit.addEventListener('click', (event) => {
        event.preventDefault();
    })
}
addEventToSubmit();

console.log('a');