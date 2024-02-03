function scores(array){
    newArray = []
    let score = 0
    for(let count = 0; count < array.length; count+=1){
        score = array[count]
    const answer1 = array.map((score) => score >= 90 && score < 100)
    if(answer1[count] === true) newArray.push("A")
    const answer2 = array.map((score) => score >= 80 && score < 89)
    if(answer2[count] === true) newArray.push("B")
    const answer3 = array.map((score) => score >= 70 && score < 79)
    if(answer3[count] === true) newArray.push("C")
    const answer4 = array.map((score) => score >= 60 && score < 69)
    if(answer4[count]===true) newArray.push("D")
    const answer5 = array.map((score) => score <= 60)
    if(answer5[count]) newArray.push("F")
}
    return newArray
}
let listOfScore = [98,46,62,82,70]
console.log(scores(listOfScore))
    