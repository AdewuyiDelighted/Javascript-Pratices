
let foodName = 0
const shoppingList = [
    {name:"Apple",category:"Fruits",isHealthly:true},
    {name:"Potatoe",category:"Snacks",isHealthly:false},
    {name:"Carrot",category:"Vegetable",isHealthly:true},
    {name:"Chocolate Bars",category:"Sweets",isHealthly:false},
    {name:"Greek yourhurt",category:"Dairy",isHealthly:true},
    {name:"Sode",category:"Bevarage",isHealthly:false}
]

// two different methods


// const filter = shoppingList.filter(food => food.isHealthly === true )
// healthyFood = []
// healthyFood.push(filter)
// console.log(healthyFood);


// healthyFood.forEach(element =>  {
//     for(let key of element){
//         console.log(key.name)
//     }
// });

const healthyFood = shoppingList.filter(food => food.isHealthly === true )
 healthyFood.forEach((element) => console.log(element.name));
