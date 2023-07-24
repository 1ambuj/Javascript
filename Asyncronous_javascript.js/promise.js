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


//promise.resolve and promise chaning 

myresolve = Promise.resolve(5) // it return some value
myresolve.then((value)=>{
    console.log(value)
})


function mypromisechain(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
    })
}

//.then keyword always returns the promise 

mypromisechain()
        .then((value)=>{
            console.log(value)
            value = value + "boo"
            return value      //it alwys retuns promise
        })
        .then((value)=>{
           console.log(value)
        })


        const heading1 = document.querySelector(".heading1")
        const heading2 = document.querySelector(".heading2")
        const heading3 = document.querySelector(".heading3")
        const heading4 = document.querySelector(".heading4")
        const heading5 = document.querySelector(".heading5")
        const heading6 = document.querySelector(".heading6")
        

function changetext(element, text, color,time){
    return new Promise((resolve ,reject) =>{
        setTimeout(()=>{
            if(element){
                element.textContent = text
                element.style.color = color
                resolve()
            }
            else{
                reject("elemnt not present!")
            }
        },time)
        
    })
}
changetext(heading1,"one","blue",1000)
.then(()=>changetext(heading2,"two","red",1000))
.then(()=> changetext(heading3,"three","green",1000))
.then(()=> changetext(heading4,"three","green",1000))
.then(()=> changetext(heading5,"three","green",1000))
.catch((error)=>{
     console.log(error)
})
