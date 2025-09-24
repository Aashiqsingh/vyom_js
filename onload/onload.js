var body = document.getElementsByTagName("body")[0]

function orange(){
    // console.log(body);
    body.style.backgroundColor = "orange"


    setTimeout(()=>{
        red()
    },100)
    
}

function red(){
    body.style.backgroundColor = "red"

    setTimeout(()=>{
        yellow()
    },100)
}

function yellow(){
    body.style.backgroundColor = "yellow"

    setTimeout(()=>{
        blue()
    },100)
}

function blue(){
    body.style.backgroundColor = "blue"


    setTimeout(()=>{
        orange()
    },100)

    
   
    // audio.play();
}


