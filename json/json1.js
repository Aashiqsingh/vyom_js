var student = {
    id:1,
    name:"vyom",
    age:20,
    email:"vyom@gmail.com",
    isActive:true,
    mobile:[85427164827,873649827278],
    address:{
        street:"c.g road",
        city:"Ahmedabad",
        state:"Gujarat",
        pincode:380001,
        country:"India"
    }
}

console.log(student);
console.log(student.name);
console.log(student.email);
console.log(student.age);
console.log(student.address);
console.log(student.address.city);


console.log(student.mobile);
// console.log(student.mobile[0]);

for(let i = 0 ;i<student.mobile.length;i++){
    console.log(student.mobile[i]);
}





