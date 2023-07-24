//object is a collection of key value pair
//array is not suficient in real world data so we need object

const obj1 = {
    name : "harry",
    age :23,
    gender :"male"
}
// console.log(obj1.name)
//console.log(obj1["name"])
// obj1.qualification  = "greguated"   // add the key value in object
// console.log(obj1)
//obj1["email add"] = "ambuj@1233"
//console.log(obj1)

//take the key name from the variable
let key = "email";
obj1[key] = "ambuj@"
// console.log(obj1)

//object destructuring
//let {name,age} = obj1
const {name:nam,age:adge} = obj1

// console.log(nam)
// console.log(adge)

//OBJECT INSIDE ARRAY NESTED DESTRUCTURING
const personInfo = [
    {name : "ambuj",age : 23,gender : "male"},
    {name : "harshit",age : 23,gender : "male"},
    {name : "shita",age : 23,gender : "female"}
]
let [person1, person2, person3] = personInfo
// console.log(person1.gender)
// console.log(person3.gender)
personInfo.push({name:"anuj",age:20,gender:"male"})
// console.log(personInfo)

//object spred operator 
const obj2 = {...obj1,name:"ambuj",age:22}
console.log(obj2)

