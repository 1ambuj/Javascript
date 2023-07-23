//asyncronous javascript
//Aj is a way of programing in which sequencence does not fix
//syncronous programing
// console.log("script begain")
// for(i = 0 ;i<=10; i++){
//     console.log(i)
// }
// console.log("script end!!")


//asyncronous programing
console.log("script start")
setTimeout(()=>{
    console.log("hello world! ")
},1000)
console.log("script end")

//it is called asyncronous programing 
//in this program first line execute then second line give to web browser in given time of period 
//after then java script execute  next line 
//after finishing the code js execute the call back function 

console.log("script start")
const id = setTimeout(()=>{
    console.log("hello")

},2000)
console.log("java script end!") 
clearTimeout(id) // it does not call callback function
//console.log(id)


//time interval 

const my_id = setInterval(()=>{
    for( let i=1;i<=50;i++){
    console.log("ambuj")
    }
},10000)
console.log("hey! , ambuj")
clearInterval(my_id)


//call back function  

function my_func(num1,num2,onsucsses){
    if(typeof num1 && typeof num2 === Number){
        console.log(num1 + num2)
        onsucsses(num1,num2)
    }
    else{
        console.log("wrong datatype!")
    }
}

my_func("4",5,(number1,number2)=>{
    console.log(number1*number2)
}) 


