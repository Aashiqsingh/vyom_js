function dubai(amount,fname){
    console.log(fname + " ur tour confirm in dubai with package " + amount);
    
}

function paris(amount,fname){
    console.log(fname + " ur tour confirm in paris with package " + amount);
}

function london(amount,fname){
    console.log(fname + " ur tour confirm in london with package " + amount);
}

function goa(amount,fname){
    console.log(fname + " ur tour confirm in goa with package " + amount);
}


let budget = parseInt(prompt("Enter your budget"));

if(budget > 4000){
    dubai(budget,"vyom")
}
else if(budget > 3000){
    paris(budget,"vyom")

}
else if(budget > 2000){
    london(budget,"vyom")
}
else if(budget > 1000){
    goa(budget,"vyom")
}
else{
    console.log("Your budget is less than 1000 rupees")
}