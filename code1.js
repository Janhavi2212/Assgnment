function showDateTime(){
    var currentDate=new Date(); 
    console.log(currentDate);
    var time=new Date().getTime();
    console.log(time)
}

showDateTime();

function calculateAverage(num1,num2,num3){
    avg=(num1+num2+num3)/3;
    console.log(avg);
}

calculateAverage(10,20,30);

let calculateAverage1=function(num1,num2,num3){
    avg=(num1+num2+num3)/3;
    console.log(avg);
}

calculateAverage1(10,20,30);



function generateBill(basePrice,tax=0.1,discount=0.05){
    let bill= basePrice+ (basePrice*tax)-(basePrice*discount);
    console.log(bill);
}

generateBill();
generateBill(500);
generateBill(300,0.2,0.09);

function findLarger(num1,num2){
   return num1>num2 ? num1:num2;
}
let d=
console.log(findLarger(48,78));



/*
let userName = prompt("Please enter your name:", "John Doe");
console.log("User's name is: " + userName);

function greetUser(Name){
  console.log(`Hello ${Name}`);
}

greetUser(userName)*/

let age = prompt["How old are you?"];
if (age !== null) {
  alert("You are " + age + " years old.");
} else {
  alert("You canceled the prompt.");
}


