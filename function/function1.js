// there are four types of functions
// 1. without return without argument
// 2. without return with argument
// 3. with return without argument
// 4. with return with argument


// 1. without return without argument

function test(){
    console.log("test function called...");
    
}

// test()
// console.log(test);
// test()

// 2. without return with argument
function add(a,b){
    console.log("Addition = ",a+b);
    
}

// add(4,5)

// 3. with return without argument

function greet(){
    return "Good evening....";
}

// let ans = greet()
// console.log(ans);


// 4. with return with argument

function multiply(x,y){
    return x*y;
}

let mul = multiply(3,4)
console.log("multiply = ",mul);
