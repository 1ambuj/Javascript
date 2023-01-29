//function is a block of code that is used to avoide code
//basicaly there are three types of function used in js
//1.=>function declaration
//2.=>function exprestion
//3.=>Arrow function

function sum(){
    console.log(20+30)
}
console.log(sum())

function iseven(num){
    return num%2==0;
}
result = iseven(8)
console.log(result)

function find_target(array,target){
    for(let i=0;i<=array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
console.log(find_target([2,5,7,8,9],10))

