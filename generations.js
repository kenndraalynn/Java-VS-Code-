let userName = 'Kendra';
console.log('Hello ' + userName + '!' + ' What is your age?');

let age = 23;

if (age >= 97) {
    console.log(userName + ' , your age is ' + age + '. You are in the WWII generation');
}
else if (age < 97 && age >= 79) {
    console.log(userName + ' , your age is ' + age + '. You are in the PostWar generation');
}
else if (age < 79 && age >=70){
    console.log(userName + ' , your age is ' + age + '. You are in the Boomers I generation');
}
else if (age < 70 && age >=60) {
    console.log(userName + ' , your age is ' + age + '. You are in the Boomers II generation');
}
else if (age < 60 && age >= 44) {
    console.log(userName + ' , your age is ' + age + '. You are in the Gen X generation');
}
else if (age < 44 && age >=28) {
    console.log(userName + ' , your age is ' + age + '. You are in the Millenials generation');
}
else {
    console.log(userName + ' , your age is ' + age + '. You are in the Gen Z generation');
}