//convert kms to mils using function 
//1 km = 0.621371
//milse = km * factor
//const input = document.getElementById("#data").value
//alert(input)
// function convert_km_miles(){
//     const input = document.getElementById("data").value ;
//     const conversion = `${input} km equal to ${input*0.621371} miles`
//     alert(conversion)
// }
// const btn = document.querySelector(".btn")
// //console.log(btn)
// btn.addEventListener("click",()=>{
    
// })

function convert_km_miles(){
    const input = document.getElementById("data").value ;
    const conversion = `${input} km equal to ${input*0.621371} miles`
    const heading = document.getElementById("res")
    const miles =heading.textContent = conversion
    console.log(miles)
}
