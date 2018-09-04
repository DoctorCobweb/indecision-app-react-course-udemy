// arguments object - no longer bound with arrow functions
// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// console.log(add(55,1,1001));

const add = (a, b) => {
    // console.log(arguments); <= arguments is no longer defined in arrow function
    return a + b;
};
console.log(add(55, 1, 1001));



// this keywork - no longer bound
const user = {
    name: 'andre',
    cities: ['geelong', 'melbourne', 'brazil'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);
        return this.cities.map((city) => this.name + ' has live in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};
console.log(multiplier.multiply());
