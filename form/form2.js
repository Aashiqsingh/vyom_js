function submit(){
    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let gender = document.getElementsByName("gender")

    // console.log(gender);

    let gen = ''

    if(gender[0].checked === true){
        gen = "male"
    }
    else if(gender[1].checked === true){
        gen = "female"
    }
    else if(gender[2].checked === true){
        gen = "other"
    }
    

    let output = document.getElementById("output")



    if(gen == 'male')
    {
        if(age.value > 18){
            output.innerHTML = "You are a male and above 18 years old"
        }
        else{
            output.innerHTML = "You are a male and below 18 years old"
        }
    }
    else if(gen == "female"){
        if(age.value > 21){
            output.innerHTML = "You are a female and above 21 years old"
        }
        else{
            output.innerHTML = "You are a female and below 21 years old"
        }
    }
    else{
        if(age.value > 25){
            output.innerHTML = "You are an other and above 25 years old"
        }
        else{
            output.innerHTML = "You are an other and below 25 years old"
        }
    }

    // console.log(name.value);
    // console.log(age.value);
    // console.log(gen);
    
}