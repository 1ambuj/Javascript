// DEFRENT BETWEEN PRIMITIVE TYPE AND REFERENCE TYPE

//primtive type
let num = 5;
let num2 = num
console.log(num)// Array is a collection of ordered element 

//reference type 
console.log(num2)
num = num + 1

//after increment 
console.log(num)
console.log(num2)

//reference type

let arr1 = ["item1","item2","item3"]
let arr2 = arr1
console.log(arr1)
console.log(arr2)

// after increment in arr1

arr1.push("item4")
console.log(arr1)
console.log(arr2)

//cloning in array

// const arr1 = ["item1","item2","item3"]
// //const arr2 = arr1.slice(0).concat(["item4","item5"])//slice ,method for cloning of array
// const arr2 = [].concat(arr1,["item 4","item5"])//concat method  for arr2

// //const arr2 = [...arr1,"item4","item5"]
// console.log(arr2)

//Array destructuring
const fruits = ["apple","mango","banana","orange"]
let [var1 ,var2, var3 ,var4] = fruits;
console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)

// for of loops in array

const name = ["ambuj","anuj","satyam"]
for(let nam of name){
    console.log(nam)
}
 
//for in loops in array

let fruit = ["mango ", "apple","pineapple"]
// for(let fruits in fruit){
//     console.log(fruit[fruits])
// }

//while loops in array

let i = 0
while(i<=fruit.length-1){
    console.log(i)
}