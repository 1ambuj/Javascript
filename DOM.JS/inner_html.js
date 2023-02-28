//CLASS LIST
//we can work with class we can acces the class see the include clsss add the class and many more

const element_class = document.querySelector(".to-do")
//console.log(element_class.classList)
// const list = element_class.classList.add("bg-dark")//add the bg-dark class using java script
// const remove = element_class.remove("bg-dark")//remove bg-dark class
// const remove_container = element_class.remove("container")
// //console.log(list)
// console.log(remove)

//INEER HTML
//const inner = document.querySelector(".todo-list")

// inner.innerHTML += "<li>new todo</li>" //add element
// inner.innerHTML += "<li>new todo2</li>" 
// console.log(inner.innerHTML)
 
// //when we use inner-html and when we not use inner-html
//when we want to change the inner-html value then we use it
//when we want to add elemnt then we not use beacause it take more time


//document.creatElement()
//append
//prepand
//remove

//const todo_list = document.createElement("li")
//const todo_text = document.createTextNode("my list item")
//todo_list.textContent = "my list item"//it also add the content into li element
//todo_list.append(todo_text)
//onst todo_append_list =document.querySelector(".todo-list")
//todo_append_list.append(todo_list)//add the li elemnt after the elemnet
// todo_append_list.prepend(todo_list)//add the li elemnt bebore the existing element
// console.log(todo_append_list)
//console.log(todo_append_list)

//remove()
// const todo1 = document.querySelector(".todo-list li")
// todo1.remove()
// console.log(todo1)
// console.log(todo_append_list)

//before and after method

// const tag = document.createElement("li")
// tag.textContent = "my text"
// const take_element = document.querySelector(".todo-list")
// take_element.before(tag)
// take_element.after(tag)
// //console.log(take_element

const btn = document.querySelector(".btn")
btn.classList.remove(".btn2")

