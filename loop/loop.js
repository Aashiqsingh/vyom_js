// for(let i=0;i<=10;i++){
//     console.log(i);
    
// }


// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// let i = 1;
// do{
//     console.log(i);
//     i++;

// }while(i <= 10)



var num = 2345;

let rev = 0;
for(;num!=0;){
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num/10);
}
console.log(rev);
