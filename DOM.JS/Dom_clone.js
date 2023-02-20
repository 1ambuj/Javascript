//clone node 
// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "this is my content"
// const li2 = li.cloneNode(true)
// ul.append(li)
// ul.prepend(li2)
// console.log(ul)

//some of imprtant method of IE()
//appendChild;
//inserBfore;
//replaceChild;
//remove child

const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent = "this is my content"
//ul.appendChild(li)//use append child method

//insertBefore method
ul.insertBefore(li,ul)


//replace child method

