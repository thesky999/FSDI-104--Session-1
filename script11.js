//declaration
function Hello(){
    console.log("Hello friends");
}

Hello();

function Traveling(country){
    return 'Traveling to ' + country;
}

console.log(Traveling('Italy'));

//let Traveling2 = function(city){
//    return 'Traveling to ' + country;
//}

//let travel;

//travel = Traveling2('Naples');
//console.log(travel);

//autocalling funtion

(function(topic){
    console.log('I am learning '+topic);
})('Javascript');

// arrow functions

let Traveling2 = city => 'Traveling to' +city;

let travel;

travel = Traveling2('Naples');
console.log(travel);

const sum = (a,b) => a+b;

let total;

total = sum(5,5);
console.log(total);