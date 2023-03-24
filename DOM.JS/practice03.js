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

// function convert_km_miles(){
//     const input = document.getElementById("data").value ;
//     const conversion = `${input} km equal to ${input*0.621371} miles`
//     const heading = document.querySelector(".res")
//     const miles = heading.textContent = conversion
//     console.log(miles)
// }


//convert celsius to forenhite
//formula fohrenheit = celsius * 1.8 + 32
// function convert_c_f(){
//     const celsius = document.querySelector(".celsius-input").value
//     const h1 = document.querySelector(".fohrenheite")
//     const fohrenheit = (celsius * 1.8) + 8
//     const conversion = `${celsius} celsius equa to ${fohrenheit} fohrenheit`
//     h1.textContent = conversion
// }

// //check number is positive nigate or zero
// const num = (+prompt("enter the number: "))
// if(num>0){
//     console.log("positive number")
// }
// else if(num<0){
//     console.log("negative number: ")
// }
// else{
//     console.log("zero")
// }

// //using math.sign method()
// const res = Math.sign(num)
// console.log(res)

// //random number
//const random = Math.floor(Math.random()*100)
//console.log(random)

//even odd number
//using ternary operator
const num = (+prompt("enter the number: "))
//const res = num%2==0 ? "even number" : "odd number"
//console.log(res)

//prime number
for(let i=2;i<num;i++){
    if(num%i==0){
        console.log("not a prime number: ")
        break
    }
    else{
        console.log("prime number: ")
        break
    }
}

