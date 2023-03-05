//Event bubbling
//when we apply same event on the child and parent then ,when will click on child
//parent also clicked

const grand_parent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child= document.querySelector(".child")
console.log("hello world! ")
grand_parent.addEventListener("click",()=>{
    console.log("i am grand parent")
})

parent.addEventListener("click",()=>{
    console.log("i am  parent")
})

child.addEventListener("click",()=>{
    console.log("i am  child")
})

document.body.addEventListener("click",()=>{
    console.log("i am body")
})
// event capturing

grand_parent.addEventListener("click",()=>{
    console.log("i am grand parent")
},true)

parent.addEventListener("click",()=>{
    console.log("i am  parent")
},true)

child.addEventListener("click",()=>{
    console.log("i am  child")
},true)

document.body.addEventListener("click",()=>{
    console.log("i am body")
},true)
