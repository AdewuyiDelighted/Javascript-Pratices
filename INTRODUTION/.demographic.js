
let user1 = {
    myName : "Atan",
    population : 100,
    temp : 20,
    currency : "#"
}
let user2 = {
    myName : "Yaba",
    population : 150,
    temp : 10,
    currency : "#"
}
let user3 = {
    myName : "Pako",
    population : 110,
    temp : 25,
    currency : "#"
}
let user4 = {
    myName : "Sabo",
    population : 120,
    temp : 6,
    currency : "#"
}
let user5 = {
    myName : "Ota",
    population : 98,
    temp : 50,
    currency : "#"
}
let user6 = {
    myName : "Iju",
    population : 70,
    temp : 30,
    currency : "#"
}
let user7 = {
    myName : "Obere",
    population : 50,
    temp : 45,
    currency : "#"
}
let user8 = {
    myName : "Winners",
    population : 43,
    temp : 2,
    currency : "#"
}
let user9 = {
    myName : "mainland",
    population : 100,
    temp : 12,
    currency : "#"
}

let demographic = [[null,user1,user2,user3],[user4,user5,user6,null],[user7,null,user8,user9]]
let count = 0
for(let index = 0; index < demographic.length;index++){
    for(let indices = 0;indices < demographic[index].length;indices++){
    let oneArea = (demographic[index][indices]) 
    if(oneArea == null){ 
        continue
    } 
    if(oneArea.temp <= 10) count += oneArea.population
    }
}
    console.log(count)


    
