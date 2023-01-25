//object is a collection of key value pair
//array is not suficient in real world data so we need object

const obj1 = {
    name : "harry",
    age :23,
    gender :"male"
}
// console.log(obj1.name)
console.log(obj1["name"])
// obj1.qualification  = "greguated"
// console.log(obj1)
//obj1["email add"] = "ambuj@1233"
//console.log(obj1)

//take the key name from the variable
let key = "email";
obj1[key] = "ambuj@"
console.log(obj1)