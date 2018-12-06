let dishes = require('./Data.js');

function getCountry(dishes) {
    return dishes.filter(dish => {
        return dish.country === "China";
    });
}
console.log(getCountry(dishes));
//returns all recipes for China

function getCourse(getCountry) {
    return getCountry(dishes).filter(dish => {
        return dish.course === "main";
    });
}
console.log(getCourse(getCountry));
// returns an array of objects with all recipes for main courses from China


