
let width = 3;
let length = 3;

let obj = [
{row:0,col:0,value:"x"},
{row:0,col:1,value:"x"},
{row:0,col:2,value:"o"},
{row:1,col:0,value:"o"},
{row:1,col:2,value:"x"},
{row:2,col:0,value:"x"},
{row:2,col:1,value:"o"},
{row:2,col:0,value:"o"},
]

function createBoard(width,length,obj){
    newArray = [[],[],[]];
    let count = 0;
    let counter = 0;
    for(let key of obj){
        let values = key.value;
        if(count == 1 && counter == 1){
            newArray[count][counter] = " ";
            counter+= 1;
            newArray[count][counter] = values
        }else
            newArray[count][counter] = values;
            counter +=1;
        if(counter == width || counter == length){
            count +=1;
            counter = 0;
        }
    }
    return newArray;
}

console.log(createBoard(3,3,obj));

