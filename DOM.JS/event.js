//when we perform any action called event
//their are three types of event use in js

// const btn = document.querySelector(".btn2")
// console.dir(btn)//object representatoon of btn
// btn.onclick = function(){//apply click event on btn class using onclick
//     console.log("you click me!")
// }

//next method to add event in your web page
// btn.addEventListener("click",function(){
//     console.log("you click me!")
//     console.log("value of this")
//     console.log(this)
// })

//use arrow function

// btn.addEventListener("click",()=>{
//     console.log("you can click me")
//     console.log("what's is your value")
//     console.log(this)
// }
// )

// le.log(list)const list = document.querySelectorAll(".list")
// conso


// //use event html file
// const btn = document.querySelectorAll("button")
// for(let button of btn){
//     button.addEventListener("click",function(){
//         console.log(this.textContent)
//     })
    
// }
//we can use any loops like
//simple loop
//for of loop
//forEach loop

// const firstButton = document.querySelector("button")
// firstButton.addEventListener("click",function(){
//     console.log("click me!!")
// })

//EVENT OBJECT
const firstButton = document.querySelector("button")
//firstButton.addEventListener("click",function(){
    //console.log("click me!!")
//})

//browser contain some thing
//1)browser ---> js engine + some api
//when any event accour  java cript give the callback function and some information

// const firs_btn = document.querySelector("button")
// firstButton.addEventListener("click",(a)=>{
//     console.log(a.currentTarget)
// })

//behaind the seen working of js

// const allbutton = document.querySelectorAll(".my-button button")
// for(let button of allbutton){
//     button.addEventListener("click",(e)=>{
//         e.target.style.backgroundColor = "red"
//         e.target.style.Color = "blue"
        
        
//     })
// }


//keypress event
//mouseover evnt 
//mouseleave event
// console.log("hello world!")
// const keypress_event = document.querySelector(".btn2")
// console.log(keypress_event)
// const body = document.body;
// body.addEventListener("keypress",(e)=>{
//        console.log(e.key)
// })

// keypress_event.addEventListener("mouseover",()=>{
//     console.log("mouse over event occurd !")
// })

// keypress_event.addEventListener("mouseleave",()=>{
//     console.log("mouse leave event occurd !")
// })


//click event 
const my_event = document.querySelectorAll(".my-button")
for(let event of my_event){
    event.addEventListener("click",(e)=>{
        console.log(e.target.textContent)
    })
}
