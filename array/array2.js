let users = ["aman","aashiq","rahul","vijay","harshil","vyom"];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].toUpperCase());
// }

// forEach : void 

// arr.forEach((a)=>{
//     console.log(a);
    
// })

// users.forEach((user)=>{
//     if(user.length >= 5){
//         console.log(user);
        
//     }
// })

// map : it will return new array with same length

// let ans = users.map((user)=>{
//     return user.toUpperCase()
// })

// console.log(ans);


// let ans = users.map((user)=>{
//     return user.length > 5
// })

// console.log(ans);

// filter : it will return new array with modified data


// let ans = users.filter((user)=>{
//     return user.length > 5
// })

// console.log(ans);

// users.map((user)=>{
//     console.log(user);
    
// })

let newArr = [];
users.forEach((user)=>{
    newArr.push(user)
})

console.log(newArr);
