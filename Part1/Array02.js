//some important array properties
//foreach
//map
//fileter
//reduce

//for each is a array important properties
//it return array value and its index

const arr1 = [2,4,5,6,6,7]
//task= print array element and index value
// for(let i in arr1){
//     console.log(` the value is ${arr1[i]} and index is ${i}`)
// }
//using for each method
function index_value(value,index){
    console.log(`the value is ${value} and the index is ${index}`)
}
 
//realstic example
const arr2 = [
    {productId:101,productName:"mobile",productPrice:4000},
    {productId:101,productName:"laptop",productPrice:40000},
    {productId:101,productName:"tv",productPrice:20000}
]
function product(value,index){
    console.log(value.productName,index)
}
 arr2.forEach(product)
//console.log(result)

//MAP METHOD IN JS 

function square(value){
   return  value*2
}
const new_arr1 = arr1.map(square)
console.log(new_arr1)

//FILTER METHOD => filter method is used to filter the value
//it return boolean value true or false
function iseven(n,b){
    return n%2==0    
}
const even = arr1.filter(iseven)
console.log(even)

//REDUCE METHOD
function sum(accumalator,currentvalue){
    return accumalator + currentvalue
}
const total  = arr1.reduce(sum)
console.log(total)

//real world example of reduce method 
const arr3 = [
    {productId:103,productName:"mobile",productPrice:40000},
    {productId:104,productName:"laptop",productPrice:4000},
    {productId:105,productName:"tv",productPrice:20000}
]
function product_total(accumalator,currentvalue){
    return accumalator + currentvalue.productPrice
}
const result = arr3.reduce(product_total)
console.log(result)


