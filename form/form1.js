const submitHandler = (event)=>{
    event.preventDefault(); // default is to submit the form
    // alert("Form submitted");

    let name = document.getElementById("name")
    let age = document.getElementById("age")

    // console.log(name.value);
    // console.log(age.value);
    
    if(name.value.length == 0){
        // alert("Name is required");
    }



    console.log("Form submitted");
}