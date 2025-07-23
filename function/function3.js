function dubai(amount,fname){
    return fname + " ur tour confirm in dubai with package " + amount
    
}

function paris(amount,fname){
    return fname + " ur tour confirm in paris with package " + amount
}

function london(amount,fname){
    return fname + " ur tour confirm in london with package " + amount
}

function goa(amount,fname){
    return fname + " ur tour confirm in goa with package " + amount
}


let budget = parseInt(prompt("Enter your budget"));
let result;

if(budget > 4000){
    result = dubai(budget,"vyom")
}
else if(budget > 3000){
    result = paris(budget,"vyom")

}
else if(budget > 2000){
    result = london(budget,"vyom")
}
else if(budget > 1000){
    result = goa(budget,"vyom")
}
else{
    console.log("Your budget is less than 1000 rupees")
}

console.log(result);
