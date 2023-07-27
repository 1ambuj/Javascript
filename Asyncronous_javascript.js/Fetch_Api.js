const url = "https://jsonplaceholder.typicode.com/posts"
// fetch(url)
//   .then((response)=>{
//     return response.json()
//    //return data
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


//when we want to post request in server then we need 

fetch(url,{

    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response)=>{
    data = response.json()
    return data
}).then((data)=>{
    console.log(data)
})