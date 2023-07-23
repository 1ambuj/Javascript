//promise is a way to represent the future value
//promise can be define by new keyword and promise 
//new promise(resolve , reject) 
console.log("script start")
const bucket = ["mango","banana","apple","orange"]
const mySake = new Promise((resolve,reject)=>{
    if(bucket.includes("mango") && bucket.includes("banana")){
        resolve("sake")
    }
    else{
        reject("the data is not persent ")
    }
})

//produce 


//promise consume  

// mySake.then((mysake)=>{
//     //promise fulfil
//     console.log(mysake) //it take the value from resolve function
// },(error)=>{
//     //promise reject
//     //console.log(error) //it take the value from reject function
// })

setTimeout(()=>{
    console.log("hello world")
},1000)

mySake.then((mysake)=>{
    console.log(mysake)
}).catch((error)=>{
    console.log(error)
}) 


console.log("script end") 


//function returning promise 

function rturnPromise(){
    const bucket = ["mango","banana","apple","orange"]
    return new Promise((resolve , reject)=>{
        if(bucket.includes("mango") && bucket.includes("banana")){
            resolve("milk")
        }
        else{
            reject("the element is not present")
        }
    })
}

rturnPromise().then((value)=>{
    console.log(value)
}).catch((error)=>(
    console.log(error)
))

