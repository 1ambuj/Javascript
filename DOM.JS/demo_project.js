const mainbutton = document.querySelector("button")
const currentCololor = document.querySelector(".current-color")
//console.log(currentCololor)
const body = document.body;

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor
}
mainbutton.addEventListener("click",(e)=>{
    const randomColor = randomColorGenerator()
    body.style.backgroundColor = randomColor
    currentCololor.textContent = randomColor

})