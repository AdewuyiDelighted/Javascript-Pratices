let array = [3,6,2,8,5,3]
for(num in array){
    console.log(num)
}
for (num of array) {
    console.log(num)
    
}

let user = {
    firstName : "Delighted",
    lastName : "Adewuyi",
    age : "21"

};
// loop through object wont return the value of object
for(let key in user){
    console.log(key)
}
// rather you have to do this:
for(let key in user){
    let result = user[key];
    console.log(result)
}