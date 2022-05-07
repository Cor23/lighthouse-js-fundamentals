let name;
let yearOfBirth = 1988;
let currentYear = 2022;
let output;

function ageCalculator(name, yearOfBirth, currentYear){
  for(i = 0; i < 1; i++){
    let age = currentYear - yearOfBirth;
    output = name + " is " + age + " years old."
  }
  return output;
}
console.log(ageCalculator('Corey', 1988, 2022));