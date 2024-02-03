// funtion declation
// function humus(){

// }


// function expression
// const humus = function(factot){
// }



// nested function
const humus = function(factor){
    const ingredient = function(amount,unit,name){
        let ingredientAmount = factor * amount;
        if(ingredient > 1){
            unit += "s";
        }
        return(`${ingredientAmount}${unit} of${ name}`)
    }
    return ingredient(6," cup"," juice");
}
const showCalculation = humus(2)
console.log(showCalculation);

