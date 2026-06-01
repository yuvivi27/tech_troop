// (5 > 2) && false
// !("knife" === "sword")
// (1 < 2) || (-1 > -1) || !false
// ""
// (31 % 5) == "1"
// !!true
// "5th Avenue" != "5th Avenue"
// 52 !== "52"
// (undefined || null)


let age = 20;
// Your conditional code here
if (age >=18){
  console.log("can vote");
}
else{
  console.log("cant vote");
}


let score = 85;
// Your conditional code here
if (score >= 90){
  console.log('A');
}
else if(score >= 80 && score < 90 ){
  console.log('B');
}
else if(score >= 70 && score < 80 ){
  console.log('C');
}
else if(score >= 60 && score < 70 ){
  console.log('D');
}
else{
  console.log('E');
}

let temperature = 20;
let weather = "sunny";
// Your conditional code here
if(weather === "rainy"){
  console.log("Watch a movie indoors");
}
else if( weather === "sunny"){
  if (temperature > 24){
    console.log("Go to the beach");
  }
  else if(temperature >= 15 && temperature <= 24){
    console.log("Go for a walk");
  }
  else{
    console.log("Stay inside and read");
  }
}
else{
  if(temperature > 21){
    console.log("Go hiking");
  }
  else{
    console.log("Visit a museum");
  }
}


let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;
// Your conditional code here
if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13){
  console.log("success message");
}
if (usernameLength < 5) {
  console.log("Username must be at least 5 characters");
}
if (passwordLength < 8){
  console.log("Password must be at least 8 characters");
}
if (userAge < 13){
  console.log("User must be 13 or older");
}


let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.
// Your conditional code here
if (customerType === 'VIP') {
  console.log(purchaseAmount * 0.8);
}
else if (customerType === 'premium') {
  if (dayOfWeek === 6 || dayOfWeek === 5){
    console.log(purchaseAmount * 0.85);
  }
  else{
    console.log(purchaseAmount * 0.9);
  }
}
else{
  if (purchaseAmount > 100){
    console.log(purchaseAmount * 0.9);
  }
  else if (purchaseAmount > 50){
    console.log(purchaseAmount * 0.95);
  }
  else{
    console.log(purchaseAmount);
  }
}


let year = 2024;
// Your conditional code here
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap
if (year % 4 === 0){
  if (year % 100 !== 0) {
    console.log(true);
  }
  else{
    if (year % 400 === 0){
      console.log(true);
    }
    else{
      console.log(false);
    }
  }
}
else{
  console.log(false);
}