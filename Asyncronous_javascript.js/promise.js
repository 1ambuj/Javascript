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


//AJAX in js
//it is a asyncronous xml 
//when we want to takke data from the server we need http protocol
//with ajex, web application can send and retrive
//data from a server asyncronously (in the background )

//without interfering with the display and  
// behaviour of the existing page  

//we don't use data in xml format anymore.
//we use json now(java script object notation)


//we have three ways to create and send request to server 
//1.)xmlHTTPRequest (old way of doing)
//2.)fetch API(new way of doing)
//3.)axios (this is the third party library)  

//by using xmlhttprequest
const url = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()
xhr.open("get",url); 
// xhr.onreadystatechange =function(){
//     if(xhr.readyState==4){
//         console.log(xhr.readyState)  //it give the state of xmlhttprequest
//         console.log(xhr.response)
//     }
//}

// xhr.onload = ()=>{ 
//     if(xhr.status>=200 && xhr.status<300){ //error handling
//         //it calls when redy sate four
//        // console.log(xhr) //its present in the string formet
//         const data = JSON.parse(xhr.response)
//         console.log(data)
//         const id = data[3].id;
//         console.log(id) 
//         const xhr2 = new XMLHttpRequest()
//         const url2 = `${url}/${id}`
//         xhr.open("get",url2)
//         xhr.onload=()=>{
//             const data2 = JSON.parse(xhr.response)
//             console.log(data2)

//         }

//         xhr.send()
        
       
//     }
//     else{
//         console.log("somthing went wrong! ")
//     }
// }
// xhr.onerror=()=>{
//     console.log("net issue!")
// }
// xhr.send();  


//xhr(xml http request) using promise 

function sendrequest(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(method,url)
        xhr.onload=()=>{
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response)
            }
            else{
                reject(new error("somthing wrong"))
            }
        xhr.send()
        }
    })
}
sendrequest("get",url)
.then((response)=>{
    const data = JSON.parse(response)
    return data
})
.then((data)=>{
    const id = data[3].id
})
.then((id)=>{
    const url2 = `${url}/${id}`
    return sendrequest("get",url2)
})




