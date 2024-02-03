let elementOfTwo = []
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let evenNumber = array.filter((element) => element % 2 == 0)
console.log(evenNumber)

array.forEach(element => {
    elementOfTwo.push(element * 2)
   
});
console.log(elementOfTwo);

let squareOfElement = array.map((element) => element * element)
console.log(squareOfElement)