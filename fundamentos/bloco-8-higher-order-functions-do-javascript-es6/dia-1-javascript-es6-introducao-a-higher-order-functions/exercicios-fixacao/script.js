const wakingUp = () => 'Acordando!!';
const drinkCoffe = () => 'Bora tomar café!!';
const letsGoSleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakingUp);
doingThings(drinkCoffe);
doingThings(letsGoSleep);