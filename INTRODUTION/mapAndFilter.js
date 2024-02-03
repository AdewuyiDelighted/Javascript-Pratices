// filter
const array = ["array","yam","cohort","home","ola"];
const filter = array.filter(word => word.length > 3 );
console.log(filter);


// map
const array1 = [1,4,9,16];
const map1 = array1.map((x)=> x *2)
console.log(map1)

// 
let elements = [2,3,5,6,7]
const squareOfNumber = elements.map((num) => num === 2)
console.log(squareOfNumber)



// find
// find the first element that is equal to the condition given
let numbers = [2,3,5,6,7,2,2]
let find = numbers.find((x)=> x > 2)
console.log(find)



// findIndes
// find the first index of the element that is equal to the condition given
let num = [2,3,5,6,7,2,2]
let findIndex = numbers.findIndex((x)=> x > 2)
console.log(findIndex)



