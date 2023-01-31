//function inside function
function my_func(){
    console.log("function inside function: ")
    const mul = function(num1,num2){
        return num1 * num2
    }
    const sum = (a , b)=>{
        return a * b;
    }
console.log(mul(2,33));
console.log(sum(22,33));
}
my_func()

//lexcical scope of function
//lexical scope is a process that create a chain 
//if the variable is not present in it's local enviroment then it serch it's lexcal enviroment 
//if the value prsent then print tthe value 
let func1 = "hello"
function my_func2(){
    //func = ("function inside function: ")
    const mul = function(num1,num2){
        const var1 = "my var1"
        console.log(func1)
        //return num1 * num2

            const sum = (a , b)=>{
            //const var1 = 50
            console.log(var1)
            return a + b;
        }
        console.log(sum(22,33));
    }
    
console.log(mul(2,33));
//console.log(sum(22,33));
}
my_func2()

//BLOCK VS FUNCTION SCOPE
//let and const are the block scope variable 
//var is the function scope variable

{
    let name = "ambuj"
    console.log(name)
}

{
    const name = "harshit"
    console.log(name)
}

//example
if(true){
    console.log("i am inside if statement")
    //const a = 20;
    var a = 30;
}
console.log(a)

//