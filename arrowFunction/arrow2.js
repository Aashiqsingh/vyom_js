const london = (fname,amount)=>{
    console.log(fname + " ur tour confimr in london with package " + amount);
    
}

const paris = (fname,amount)=>{
    console.log(fname + " ur tour confimr in paris with package " + amount);
}

const goa = (fname,amount)=>{
    console.log(fname + " ur tour confimr in goa with package " + amount);
}

const dubai = (fname,amount)=>{
    console.log(fname + " ur tour confimr in dubai with package " + amount);
}

var budget = parseInt(prompt("Enter your budget"));
let firstName = "rahul";

if(budget > 3500){
    london(firstName,budget)
}
else if(budget > 2500){
    paris(firstName,budget)
}
else if(budget > 1500){
    dubai(firstName,budget)
}
else if(budget > 500){
    goa(firstName,budget)
}
else{
    console.log("You can't afford to go on tour")
}