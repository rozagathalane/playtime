const myName = 'roz';
let myAge = 10;
let myPet = 'hamsters';
let numberOfHamsters = 3;
let hamsterName1 = 'Stuffin';
let hamsterName2 = 'Cookie';
let hamsterName3 = 'Amber';
let myColour1 = 'red';
let myColour2 = 'blue';
let intro = `My name is ${myName} and i am ${myAge} years old.`;
let aboutMe = `My favorite pets are ${myPet} and i have ${numberOfHamsters} of them. there names are ${hamsterName1}, ${hamsterName2} and ${hamsterName3}, and my favorite colours are ${myColour1} and ${myColour2}.`;














// Ignore this stuff.

function hello() {
    document.getElementById("intro").innerHTML = intro;
    document.getElementById('aboutme').innerHTML = aboutMe; 
}
hello();