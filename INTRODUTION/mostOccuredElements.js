// let x = 1;
// let y = "1";

// console.log(x==y);
// console.log(x===y);
let arrays = [1,2,1,2,1,2]

function countDuplicate(array){
    let maxOccurance = 0; 
    let maxOccurances = 0;
    let occurence = 0;
    for(let num in array){
         occurence = array[num].count()

         console.log(occurence)
        
        if(occurence > maxOccurances){
            maxOccurances = occurence
            maxOccurance = num
    }
}
    return maxOccurance;
}


console.log(countDuplicate(arrays))
