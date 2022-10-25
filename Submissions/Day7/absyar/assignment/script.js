let result = document.getElementById("result");
let displayNumber = Number(result.innerHTML);

function clean() {
  result.innerHTML = 0;
}

function positiveNegative() {
  calculating();
  let displayNumber = Number(result.innerHTML);
  let number = -displayNumber;
  result.innerHTML = number;
}

function calculate(value) {
  if (result.innerHTML == 0) {
    result.innerHTML = "";
  }
  result.innerHTML += value;
}

function calculating() {
  result.innerHTML = eval(result.innerHTML);
}

function employee(name, age, occupation, department, salary) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.department = department;
  this.salary = salary;
  let bonus = 10000;

  let yearlyBonus = function () {
    let yearEndBonus = salary + bonus;
    console.log(yearEndBonus);
  };
  this.employeeDetails = function () {
    console.log(
      `Employee name: ${name} | Age: ${age} | Occupation: ${occupation} | Department: ${department}`
    );
    yearlyBonus();
  };
}

let absyar = new employee("Absyar", 29, "Software Engineer", "System", 10000);
absyar.employeeDetails();
