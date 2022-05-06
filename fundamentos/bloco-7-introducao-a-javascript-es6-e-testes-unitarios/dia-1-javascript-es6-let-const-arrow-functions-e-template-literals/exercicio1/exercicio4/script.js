const elementButton = document.getElementById('count');
const elementP = document.getElementById('howMany');
let counter = 0;
elementButton.addEventListener('click', () => {
    counter += 1;
    elementP.innerText = counter;
});