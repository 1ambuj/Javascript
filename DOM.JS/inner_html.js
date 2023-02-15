//CLASS LIST
//we can work with class we can acces the class see the include clsss addd the class and many more

const element_class = document.querySelector(".to-do")
//console.log(element_class.classList)
// const list = element_class.classList.add("bg-dark")//add the bg-dark class using java script
// const remove = element_class.remove("bg-dark")//remove bg-dark class
// const remove_container = element_class.remove("container")
// //console.log(list)
// console.log(remove)

//INEER HTML
const inner = document.querySelector(".todo-list")

inner.innerHTML += "<li>new todo</li>" //add element
inner.innerHTML += "<li>new todo2</li>" 
console.log(inner.innerHTML)

//when we use inner-html and when we not use inner-html
//when we want to change the inner-html value then we use it
//wen we want to add elemnt then we not use beacause it take more time

