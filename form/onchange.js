function changeColor(){
    let color = document.getElementById("color")

    console.log(color.value);

    let box = document.getElementById("box")
    box.style.height = "200px";
    box.style.width = "200px";
    box.style.backgroundColor = color.value;
    box.style.margin = "100px 400px";
    
}

function changeRadius(){
    let radius = document.getElementById("radius")
    console.log(radius.value);

    let box = document.getElementById("box")
    box.style.borderRadius = radius.value;
}