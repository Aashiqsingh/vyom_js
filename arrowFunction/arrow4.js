const pdfHandler = (option)=>{
    console.log(option + " handled with pdf Handler" );
    //  {fname:"test.pdf",size:"1000kb"}
} 

const pngHandler = (option)=>{
    return option.fname + " handled with png Handler"
}

const jpgHandler = (option)=>{
    return option.fname + " handled with jpg Handler"
}

const fileName = "test.pdf";

if(fileName.endsWith(".pdf")){
    // pdfHandler({
    //     fname:fileName,
    //     size:"1000kb"
    // })

    pdfHandler(fileName)
}
else if(fileName.endsWith(".png")){
    pngHandler({
        fname:fileName
    })
}
else if(fileName.endsWith(".jpg")){
    jpgHandler({
        fname:fileName
    })
}
else{
    console.log("File not supported")
}