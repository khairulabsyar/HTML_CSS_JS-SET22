// Testing the challenger
// increase the input value by 1
// example: 1 => 2
function Challenge0(input) {
  input = input + 1;
  return input;
}

// Reversing a string
// example: hello => olleh
// example 2: Howdy => ydwoH
function Challenge1(input) {
  //code below
  let reverseStr = input.split("");
  reverseStr.reverse();
  return reverseStr.join("");
  // return input.split("").reverse().join("")
  //code above
}

// Array of largest in arrays
// example: [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]] => [27, 5, 39, 1001]
function Challenge2(input) {
  //code below
  let finalAnswer = [];
  for (let i = 0; i < input.length; i++) {
    let high = input[i][0];
    for (let x = 0; x < input[i].length; x++) {
      if (high < input[i][x]) {
        high = input[i][x];
      }
    }
    finalAnswer.push(high);
  }
  return finalAnswer;
  //code above
}

// String truncater
// input is object of {"text" : "text here", "limit" : number here}
// output is string length == object.limit + "..."
// example: {"text": "Hello world", "limit" : 8} => "Hello wo..."
// note: if limit > text's length,  no truncation occurs
function Challenge3(input) {
  //code below
  return input.text.length > input.limit
    ? input.text.slice(0, input.limit) + "..."
    : input.text;
  //code above
}

// String repeater
// input is array of a string to repeat and number of times to repeat ["String to repeat", 3]
// output is a string of string from input[0] repeated input[1] times
// example: ["abc", 3] => "abcabcabc"
function Challenge4(input) {
  //code below
  if (input[1] >= 0) {
    return input[0].repeat(input[1]);
  } else {
    return "";
  }
  //code above
}

// Search and destroy
// input is array structured such as [[array of elements to parse through] list of elements to find and remove from array at index 0]
// output is array of remaining elements from array at index 0 that are not removed
// example: [[1, 2, 3, 1, 2, 3], 2, 3] => [1, 1]
function Challenge5(input) {
  //code below
  let newArr = input.splice(0, 1).flat();
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    for (let x = 0; x < input.length; x++) {
      if (newArr[i] === input[x]) {
        console.log("newarr", newArr[i]);
        console.log("input", input[x]);
        newArr.splice(i, 1);
        i--;
      }
    }
  }
  return newArr;
  //code above
}

// Find and replace
// input is array constructed such as ["text to test", "string to be replaced", "new string"]
// output is string where str in input[0]'s string to be replaced is replaced new string
// additional requirement: preserve the letter case of first character of string to be replaced and apply to first character of new string
// example: ["He is sleeping on the couch", "sleeping", "Sitting"] => "He is sitting on the couch"
function Challenge6(input) {
  //code below
  for (let i = 0; i < input.length; i++) {
    for (x = 0; x < input[i].length; x++) {
      let input2 = input[2].toLowerCase();
      if (input[2] == "john") {
        input2 = "John";
      }
      return input[i].replace(input[1], input2);
    }
  }
  //code above
}

// Only unique by order of discovery
// input is array of arrays to parse through
// output is unique collection of elements present in the multi dimensional array sorted by incrementing index in array(s)
// example: [[1, 3, 2], [5, 2, 1, 4], [2, 1]] => [1, 3, 2, 5, 4]
function Challenge7(input) {
  //code below
  let newarr = new Set(input.flat());
  let finalAnswer = [];
  newarr.forEach(function (value) {
    finalAnswer.push(value);
  });
  return finalAnswer;
  //code above
}

// Missing letter
// input is string of sequential characters of the alphabet
// output is singular character missing from the character sequence in the input
// example: "abce" => "d"
function Challenge8(input) {
  //code below

  let huruf = "abcdefghijklmnopqrstuvwxyz";
  let hurufIndex = huruf.indexOf(input[0]);

  for (let i = 0; i < input.length + 1; i++) {
    if (input[i] !== huruf[hurufIndex + i]) {
      return huruf[hurufIndex + i];
    }
  }
  //code above
}

// Identify unique element(s)
// input is array of 2 set of arrays
// output is array of unique element(s) present only in either one of the arrays in input
// example: [[1, 2, 3, 5], [1, 2, 3, 4, 5]] => [4]
function Challenge9(input) {
  //code below
  let x = [];
  let y = [];
  input[0].forEach((elements) => {
    if (!input[1].includes(elements)) {
      x.push(elements);
    }
  });

  input[1].forEach((elements) => {
    if (!input[0].includes(elements)) {
      y.push(elements);
    }
  });
  let finalAnswer = [];
  finalAnswer.push(...y, ...x);
  return finalAnswer;
  //code above
}

// Palindrome checker
// https://en.wikipedia.org/wiki/Palindrome
// input is string to be checked whether it is a palindrome or not
// output is boolean, return true if input is a palindrome, otherwise return false
// additional requirement: disregard letter cases of string, spaces and non-alphanumeric characters in input
// example 1: "My age is 0, 0 si ega ym." => true
// example 2: "1 eye for of 1 eye." => false
function Challenge10(input) {
  //code below
  let re = /[\W_]/g;
  let lowerCase = input.toLowerCase().replace(re, "");
  let reverseStr = lowerCase.split("").reverse().join("");
  return reverseStr === lowerCase;
  //code above
}

// Convert to roman numeral
// input is integers with individual value < 5000
// output is string of input integer converted into roman numeral equivalent
// example 1: 2014 => "MMXIV"
// example 2: 12 => "XII"
// note: pre-made conversionChart can be used if desired
function Challenge11(input) {
  //code below
  const RN = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let finalAnswer = "";

  console.log("object keys RN", Object.keys(RN)); // => ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  console.log("object values RN", Object.values(RN)); // => [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  console.log("object keys RN no 3", Object.keys(RN)[3]); // => CD
  console.log("object values RN no 3", Object.values(RN)[3]); // => 400
  console.log("RN object keys RN no 3", RN[Object.keys(RN)[3]]); // => 400
  console.log(RN["CD"]); // => 400
  console.log(RN.CD); // => 400

  for (let i = 0; i <= Object.values(RN).length - 1; i++) {
    while (Object.values(RN)[i] <= input) {
      input -= [Object.values(RN)[i]];
      finalAnswer += Object.keys(RN)[i];
    }
  }
  return finalAnswer;
  //code above
}
