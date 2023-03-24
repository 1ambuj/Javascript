let a = 10;
let b = 50;
let c = 30;
if((a>b) && (a>c)){
    console.log(`${a} is the greatest number`)
}
else if((b>a) && (b>c)){
    console.log(`${b} is the greatest number`)
}
else{
    console.log(`${c} is the greatest number`)
}

//using math.max()
const max =Math.max(a,b,c)
//console.log(max)

//find facrorial of the number
//n! equal to 1 *2 *3....*n
//const num = (+prompt("enter the number: "))
// let factorial = 1
// if(num===0){
//     console.log(`factorial of ${num} is: 1`)
// }
// else if(num<0){
//     console.log("factorial is not possible")
// }
// else{
//     for(let i=1;i<=num;i++){
//         factorial = factorial * i
//     }
//     console.log(`factorial of ${num}  is : ${factorial}`)
// }

// function table(n){
//      for(let i=1;i<=10;i++){
//         console.log(`${n} x ${i} = ${n*i}`)
//      }
// }
// table(2)

//ar