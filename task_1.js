// Task_1

let obj = {
    name: 'Andrey',
    year: 32
}

function hero (obj){
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(key);
        }
    }
}

hero(obj);