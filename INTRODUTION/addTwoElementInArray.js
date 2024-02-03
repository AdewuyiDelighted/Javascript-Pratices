function addTwoElements(array){
    let count = 0
    let addElementArray = [];
    let length = array.length
    let lengths = array / 2 + 1;
    if(length % 2 == 0){
        for(let index = 0; index < array.length;index+=2){
            addElementArray[count] = array[index] + array[index +1]
            count++;


        }
    } else{
        for(let index = 0; index < array.length -1;index+=2){
            addElementArray[count] = array[index] + array[index +1]
            count++;
            addElementArray[lengths] = array[array.length -1];
        }


    }
    return addElementArray
    
        
    }
    let arrays = [2,3,5,6,7]
    
    console.log(addTwoElements(arrays))


