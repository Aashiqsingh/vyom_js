function changeTxt(){
    let txt = document.getElementById("txt")
    // console.log(txt.innerHTML);
    txt.innerHTML = "Royal technosoft p ltd."
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
    txt.style.height = "200px";
    txt.style.width = "200px";
    
}


function changeRef(){
    let link = document.getElementById("link")
    link.href = "https://www.netflix.com";
    link.innerHTML = "netflix";
    link.target = "_blank";
}