//tree treversing parent to child and child to parent
//PARENT TO CHILD
const root_element = document.getRootNode()//giv the root node
const html_elemnt = root_element.childNodes[0]
//console.log(html_elemnt.childNodes)
const head_element = html_elemnt.childNodes[0]
const text_element = head_element.childNodes
//console.log(head_element)
const body_elemnt = html_elemnt.childNodes[2]
const div_elemnt = body_elemnt.childNodes[1]
//console.log(div_elemnt)

//CHILD TO PARENT CONVRSTION
const parent_root = html_elemnt.parentNode
const parent_head = head_element.parentNode
//console.log(parent_head)
//when we want to show the parent of div()
const parent_div = div_elemnt.parentNode
//console.log(parent_div)

const h1 = document.querySelector("h1")
// //console.log(h1.parentNode)
// const h1_parent = h1.parentNode
// const body = h1.parentNode.parentNode
// h1_parent.style.color = "green"
// h1_parent.style.backgroundColor = "black"
// body.style.backgroundColor = "red"


//we can aplly query selcotor method on any elment
//emaple
const head = document.querySelector("head")
const head_query =head.querySelector("title")
console.log(head_query)



