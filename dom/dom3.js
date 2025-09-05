let a = 0;

let colors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "darkblue"];

console.log(colors[2]);


function changeColor(){
    // console.log("hello");
    // console.log(a++);

    let randmonIndex = Math.floor(Math.random() * colors.length);
    console.log(randmonIndex);

    let mydiv = document.getElementById("mydiv")
    
    mydiv.style.backgroundColor = colors[randmonIndex]
    
}