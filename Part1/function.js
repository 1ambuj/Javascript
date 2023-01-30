//function is a block of code that is used to avoide code
//basicaly there are three types of function used in js
//1.=>function declaration
//2.=>function exprestion
//3.=>Arrow function

// function sum(){
//     console.log(20+30)
// }

//FUNCTION EXPRETION
const sum = function(){
    console.log(30+70)
}
sum()

//console.log(sum())

function iseven(num){
    return num%2==0;
}
result = iseven(8)
//console.log(result)

//function exprestion 

const iseven2=function(num){
    return num%2==0;
}
result = iseven(21)
console.log(result)


function find_target(array,target){
    for(let i=0;i<=array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
//console.log(find_target([2,5,7,8,9],10))

const find_target2 = function(array,target){
    for(let i=0;i<=array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}
console.log(find_target([2,5,7,8,10],10))


//ARRAOW FUNCTION 
const sum_netural = (n)=>{
    count = 0
    for(let i=1;i<=n;i++){
        count = count + i
    }
    return count
}
//console.log(sum_netural(8))

const string = ()=> "hello world"
console.log(string())

const sum_tow_int = (num1,num2) =>{
    return num1 + num2
}
//let a = prompt("enter the first value: ")
//let b = prompt("enter the second number:")
console.log(sum_tow_int(20,40))