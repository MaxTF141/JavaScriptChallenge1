let firstName = prompt("Enter your name");
let surname = prompt("Enter your surname");
let salary = prompt("Enter your salary");
let bonus = 500;
let product = eval(`${salary}+${bonus}`);

document.write(`<br> NAME: ${firstName}`);
document.write(`<br> SURNAME: ${surname}`);
document.write(`<br> SALARY: ${product}`);

