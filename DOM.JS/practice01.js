//problem you can drive the car if your age lie between
// const age = +prompt("enter your age .")
// if(age>18){
//     console.log("you can drive the car!")
// }
// else{
//     console.log("you can not drive the car")
// }

//print somthing using some method
//using console.log
//using alert method
//using consol.write

// console.log("hello world!!")
// document.write("my website, hello")

// //using alert method
// alert("are you sure") 


//program add to number using static number and dynamic number

// const num1 = 4;
// const num2 = 6;
// //console.log(num1+num2)

// //dynamic number

// const a = +(prompt("enter first number !!"))
// const b = +(prompt("enter second number!!"))
// console.log(a+b)

//note: parseInt method is used to convert string to number

//second program
//squre root finding


//const num = prompt("enter the number: ")
//const result = Math.sqrt(parseInt(num))
//console.log(result)

//program third
//arrea of trangle
//formula = s =(a + b + c)/2
//area = (s*(s-a) * (s-b) * (s-c))*1/2

// const a = 10;
// const b = 10;
// const c = 10;
// const s = ( a + b + c)/2
// const area = ((s*(s-a) * (s-b) * (s-c)) ** 1/2)
// console.log(Math.sqrt(area))


//fourth program swaping of two number
let arr1 = [ 1,2,4,5,6,7];
[arr1[0] ,arr1[5]] = [arr1[5],arr1[0]];
console.log(arr1)

// let a = 10;
// let b =20;
// let temp = a
// a = b
// b = temp
// console.log(a,b)

//pattern question
for(i = 1 ;i<6 ; i++){
    console.log(("i"*"*"))
}