// Use google to create a function that checks the day using a swich statement and prints to the console.




var d = new Date().getDay();



document.write('test');




switch(new Date().getDay()) {
case 1:
    console.log('its monday.');
    break;
case 2:
    console.log('it is tuesday.');
    break;
case 3:
    console.log('it is wednesday.');
    break;
case 4:
    console.log('it is Thursday.');
    break;
case 5:
    console.log('it is friday.');
    break;
case 6:
    console.log('it is saturday.');
    break;
case 0:
    console.log('it is sunday.');
    break;
default:
    console.log('it is not any day.');
    break;
};

console.log(d);


