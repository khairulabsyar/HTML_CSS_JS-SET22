// Testing the challenger
// increase the input value by 1
// example: 1 => 2
function Challenge0(input) {
  input = input + 2;
  return input;
}

// Celsius to fahrenheit
// Fahrenheit = (Celsius * 9/5) + 32
// input will be a number representing a value in celsius
// output should be a number value of input converted into fahrenheit using given formula
// example:
// input => 20
// output => 68
function Challenge1(input) {
  //code below
  return (input * 9) / 5 + 32;
  //code above
}

// Fahrenheit to Celsius
// Celsius = (Fahrenheit - 32) * 5/9
// input will be a number representing a value in fahrenheit
// output should be a number value of input converted into celsius using given formula
// example:
// input => 68
// output => 20
function Challenge2(input) {
  //code below
  return ((input - 32) * 5) / 9;
  //code above
}

// Temperature unit converter
// Fahrenheit = (Celsius * 9/5) + 32
// Celsius = (Fahrenheit - 32) * 5/9
// input is an array with 2 values
// at input[0] is the number representing the temperature value
// at input[1] is a character representing the unit of temperature of the input value
// "F" = fahrenheit, "C" = celsius
// output should be a string consisting of converted temperature value and a character representing the new unit of the converted temperature value
// convert fahrenheit to celsius if input[1] is "F"
// convert celsius to fahrenheit if input[0] is "C"
// example:
// input => [86, "F"]
// output => "30C"
function Challenge3(input) {
  //code below
  let fahrenheit = (input[0] * 9) / 5 + 32;
  let celsius = ((input[0] - 32) * 5) / 9;
  if (input[1] == "F") {
    return celsius + "C";
  } else {
    return fahrenheit + "F";
  }
  //changing to ternary
  let finalAnswer;
  input[1] == `F`
    ? (finalAnswer = celsius + `C`)
    : (finalAnswer = fahrenheit + `F`);
  return finalAnswer;
  //code above
}

// Return only truthy values
// falsy values are opposite of truthy values
// falsy values in JavaScript are false, null, 0, "", undefined, and NaN
// input will be an array of various values, including truthy and falsy values
// output should be an array of only various truthy values
// example:
// input => [7, "ate", "", false, 9]
// output => [7, "ate", 9]
function Challenge4(input) {
  //code below
  let falsy = [false, null, 0, "", NaN, undefined];
  for (let i = 0; i < input.length; i++) {
    for (let x = 0; x < falsy.length; x++) {
      if (input[i] == falsy[x]) {
        input.splice(i, 1);
      }
    }
  }
  // additional answer
  // for (let i = 0; i < input.length; i++) {
  //   if (Number.isNaN(input[i])) {
  //     input.splice(i, 1);
  //   }
  // }
  return input;
  //code above
}

// Length of longest word in a string
// input will be a string containing words of varying lengths
// output should be a number of value equals to length of longest word contained in input
// example:
// input => "The quick brown fox jumped over the lazy dog"
// output => 6
function Challenge5(input) {
  //code below
  let x = input.split(" ");
  console.log(x.length);
  let longest = x[0];
  for (let i = 1; i < x.length; i++) {
    if (longest.length < x[i].length) {
      longest = x[i];
    }
  }
  return longest.length;
  //code above
}
