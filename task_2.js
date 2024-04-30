// Task_2

function heroExists(key, obj){
    return key in obj ;
}

let objBat = {
    name: 'Andrey',
    year: 32
};

console.log(heroExists('year', objBat)); // true
console.log(heroExists('city', objBat)); // false
