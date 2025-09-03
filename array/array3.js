let users = ["aman","aashiq","rahul","vijay","harshil","vyom"];


// filter : it will return new array with modified data

// let x = users.filter((user)=>{
//     return user != "rahul"
// })

// console.log(x);


// const deleteUser = (userName)=>{

//     let ans = users.filter((user)=>{
//         return user != userName
//     })

//     return ans;
// }


// let output = deleteUser("vyom")
// console.log(output);


// const deleteUser = (userName)=>{

//     return users.filter((user)=>{
//         return user != userName
//     })
    
// }


// let output = deleteUser("vijay")
// console.log(output);



// const deleteUser = (userName)=>{

//     return users.filter((user)=> user != userName)
    
// }


// let output = deleteUser("harshil")
// console.log(output);



const deleteUser = (userName)=> users.filter((user)=> user != userName)
    



let output = deleteUser("aman")
console.log(output);