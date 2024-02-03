// another type of function

let birthYears = [1999,2003,2004,1998]
let currentYear = 2024

const getResultArray = (birthYears,func)=>{
    const result = [];

    for(let birthYear of birthYears){
        let value = func(birthYear)
        result.push(value)
        
    }
    return result;
}

const calculateAge = (birthYear)=>{
    let age = currentYear - birthYear
    return age
}

let ages = getResultArray(birthYears,calculateAge)
console.log(ages)