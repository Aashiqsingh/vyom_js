const london = (fname,amount)=>{
    return fname + " ur tour confimr in london with package " + amount
    
}

const paris = (fname,amount)=>{
    return fname + " ur tour confimr in paris with package " + amount
}

const goa = (fname,amount)=>{
    return fname + " ur tour confimr in goa with package " + amount
}

const dubai = (fname,amount)=>{
    return fname + " ur tour confimr in dubai with package " + amount
}

var budget = parseInt(prompt("Enter your budget"));
let firstName = "rahul";
let temp;

if(budget > 3500){
    temp = london(firstName,budget)
    
}
else if(budget > 2500){
    temp = paris(firstName,budget)
}
else if(budget > 1500){
    temp = dubai(firstName,budget)
}
else if(budget > 500){
    temp = goa(firstName,budget)
}
else{
    console.log("You can't afford to go on tour")
}

console.log(temp);
