const myName = 'roz';
let myAge = 10;
let myPet = 'hamsters';
let numberOfHamsters = 2;
let hamsterName1 = 'Cookie';
let hamsterName2 = 'Amber';
let myColour1 = 'red';
let myColour2 = 'blue';
let myFriendsAndFamily = `i love my family and friends.`;
let intro = `My name is ${myName} and i am ${myAge} years old.`;
let aboutMe = `My favorite pets are ${myPet} and i have ${numberOfHamsters} of them. there names are ${hamsterName1} and ${hamsterName2}  , and my favorite colours are ${myColour1} and ${myColour2}.${myFriendsAndFamily}` ;
let sum = 0;





if (sum < 10) {
    console.log('hello');
} else {
    console.log('goodbye forever!')
}




 //   document.body.style.backgroundColor = "red";







function hello() {
    document.getElementById("intro").innerHTML = intro;
    document.getElementById('aboutme').innerHTML = aboutMe;
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('aboutFriends').innerHTML = myFriendsAndFamily

    switch(sum){
        case 1:
            document.body.style.backgroundColor = "#db1616";
            break;
        case 2:
            document.body.style.backgroundColor = "#db7916";
            break;
        case 3:
            document.body.style.backgroundColor = "#dbcb16";
            break;
        case 4:
            document.body.style.backgroundColor = "#65db16";
            break;
        case 5:
            document.body.style.backgroundColor = "#1675db";
            break;
        case 6:
            document.body.style.backgroundColor = "#2616db";
            break;
        case 7:
            document.body.style.backgroundColor = "#6216db";
            break;
        case 8:
            document.body.style.backgroundColor = "#8916db";
            break;
        case 9:
            document.body.style.backgroundColor = "#bd16db";
            break;
        case 10:
            document.body.style.backgroundColor = "#db168c";
            break;
        default:
            document.body.style.backgroundColor = "blue";
            break;


            
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

// Roz add a function called add100 that adds 100 to the sum  

function add100(){
sum = sum + 100;
document.getElementById('sum').innerHTML = sum;
hello();
}

function minus100(){
    sum = sum - 100;
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

