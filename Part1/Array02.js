//some important array properties
//foreach
//map
//fileter
//reduce

//for each is a array important properties
//it return array value and its index

const arr1 = [2,10,5,6,6,7]
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

//Short method in js
console.log(arr1.sort())// IT short the value with ASCII value
fruits = ["apple","man","grapes"]
console.log(fruits.sort())
arr1.sort((a,b)=>{
    return b-a;
})
console.log(arr1)  

//realstic example
const product_detail = [
    {productID:1,productName:"product1",price:10000},
    {productId:2,productName:"product2",price:2000000},
    {productId:101,productName:"product3",price:3000},
    {productId:101,productName:"product4",price:4000}
]

//price low to high
console.log(product_detail)
const low_to_high = product_detail.slice(0).sort((a,b)=> a.price-b.price);
console.log(low_to_high)

//FIND METHOD
//find method is used to find the value prsent in array or not
const f = fruits.find((n) => n.length==4)
console.log(f)

//exaple

const pri = product_detail.find((product_price)=>product_price.price>=4000)
console.log(pri)

//Every method 
//it check the alll the elemnt of the array and return true or false

const my_array = [2,12,4,8,8,6]
const output = my_array.every((n)=>n%2==0);
//console.log(output)


const every_me = product_detail.every((n)=>n.price>=2000)
//console.log(every_me)

//SOME METHOD
//it can apply one element in Array
const check_element = my_array.some((n)=>n%2==0);
console.log(check_element)

//splice method
//it take three value
//start,delete,insert element

//my_array.splice(3,3,"inserted value1","inseted_value2")
//console.log(my_array)

//FILL METHOD
//fill the array with value
//it take three value=>value,start,end
const my_array2 = new Array(7).fill(0)
console.log(my_array2)

console.log(my_array.fill(2,3,6)) 