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
let num = (prompt("enter the number: "));
let len = num.length
//console.log(len)
let total = 0;
for(let i in num){
    total = total + num[i]**len
}
if(total==(+num)){
    console.log("it is armastrong number: ")
}
else{
    console.log("not aramstrong number: ")
}

//using division method
let number = (+prompt("enter your number: "))
let tem = number;
sum = 0
while(tem>0){
    let digit= tem%10;
    console.log(sum)
    sum += digit**3
    console.log(sum)
    tem = parseInt(tem%10)
    console.log(sum)
}


//some of number
sum = 0;
while(true){
    let num = (+prompt("enter the number: "))
    sum = sum + num;
    if(num=="x"){
        break
    }
}
console.log(sum)
