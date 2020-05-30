const myName = 'roz';
let myAge = 10;
let myPet = 'hamsters';
let numberOfHamsters = 3;
let hamsterName1 = 'Stuffin';
let hamsterName2 = 'Cookie';
let hamsterName3 = 'Amber';
let myColour1 = 'red';
let myColour2 = 'blue';
let myFriendsAndFamily = `i love my family and friends.`;
let intro = `My name is ${myName} and i am ${myAge} years old.`;
let aboutMe = `My favorite pets are ${myPet} and i have ${numberOfHamsters} of them. there names are ${hamsterName1}, ${hamsterName2} and ${hamsterName3}, and my favorite colours are ${myColour1} and ${myColour2}.${myFriendsAndFamily}` ;
let sum = 0;





if (sum < 10) {
    console.log('hello');
} else {
    console.log('goodbye forever!')
}








// Ignore this stuff.

function hello() {
    document.getElementById("intro").innerHTML = intro;
    document.getElementById('aboutme').innerHTML = aboutMe;
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('aboutFriends').innerHTML = myFriendsAndFamily

   if (sum === 10){
       console.log('this works');
       document.body.style.backgroundColor = "red";
   } else {
    document.body.style.backgroundColor = "royalblue"
      
   }
    
}
hello();

function increase() {
    sum++;
    document.getElementById('sum').innerHTML = sum;
    hello();
}

function decrease() {
    sum--;
    document.getElementById('sum').innerHTML = sum;
    hello();
}


function add10() {
    sum = sum + 10;
    document.getElementById('sum').innerHTML = sum;
    hello();
}

function minus10() {
    sum = sum - 10;
    document.getElementById('sum').innerHTML = sum;
    hello();
}

function roz() {
    // Change the value of sum to 0 here please roz. 
    sum = 0;
    document.getElementById('sum').innerHTML = sum;
    hello();
}

