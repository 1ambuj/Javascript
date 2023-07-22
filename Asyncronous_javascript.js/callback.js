const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")

// its give the changes one after another
// //call back hell
// setTimeout(()=>{
//     heading1.style.color = "red"
//     heading1.textContent = "my heading"
//     setTimeout(()=>{ 
//         heading2.style.color = "pink" //it change color after 1 sec of first heading
//         setTimeout(()=>{
//             heading3.style.color = "yellow"
//         },2000)
//     },1000)
// },2000)


// pyramid of dom

function changetext(element,color,time,text,onsucssescallback,onfailurecallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text
            element.style.color = color 
            if(onsucssescallback){
                onsucssescallback()
            }
        }
        else{
            if(onfailurecallback)(
                onfailurecallback()
            )
        }
    },time)
}

changetext(heading1,"green",1000,"one",()=>{
    changetext(heading2,"yellow",1000,"two",()=>{
        changetext(heading3,"orange",1000,"three",()=>{
            changetext(heading4,"blue",1000,"four",()=>{
                changetext(heading5,"red",1000,"five")
            },()=>{console.log("element does not exist")})
        })
    },()=>{console.log("element does not exist") })
},()=>{ console.log("element does not exist")})
