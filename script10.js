const points = 1000;

if(points == 1000){
    console.log('You lost!');
}

const logged = true;

if(logged){
    console.log("Welcome to the system");
}else{
    console.log("Please enter the correct password");
}

let cash = 500;
let totalCard = 600;
let creditCard = true;

if(cash > totalCard){
    console.log('You paid with cash');
}else if(creditCard){
    console.log('You paid with a credit card');
}else{
    console.log('Incorrect transaction');
}

const payMethod = 'cash';

switch(payMethod){
    case 'cash':
        console.log("Dollar or peso")
        break;
    case 'credit card':
        console.log("Master or VISA");
        break;
    default:
            console.log('Add a valid method');
            break;
}

function Hello(){
    console.log("Hello");
}