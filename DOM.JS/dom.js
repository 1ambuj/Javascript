//DOM
//document object model the fils are prsent in the form of object 
//object called the document and add in window object

// const main_heading = document.getElementById("main-heading")
// const text_content = main_heading.textContent
// main_heading.textContent = "this is somting else"
// console.log(main_heading)
// console.log(document)

//element select by quary selector
//const btn = document.querySelectorAll("#main-heading")//it give all the id 0r class
//console.log(btn)

const heading = document.querySelector("#main-heading")
console.log(heading.textContent)//it return all the text prsent in web page even it hiden

//const main_heading = heading.style.color = "blue"
//console.log(heading.innerHTML)
console.log(heading.innerText)//it return only actual content which are present in webpage






