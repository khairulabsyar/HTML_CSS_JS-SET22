// Testing the challenger
// increase the input value by 1
// example: 1 => 2
function Challenge0(input){
    input = input + 1
    return input
}

// Reversing a string
// example: hello => olleh
// example 2: Howdy => ydwoH
function Challenge1(input){
    //code below

    // solution 1

    // let output = ""
    // for(let i = input.length - 1; i >= 0; i-- ){
    //     output += input[i]
    // }

    // return output

    // solution 2

    return input.split("").reverse().join("")

    //code above
}

// Array of largest in arrays
// example: [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]] => [27, 5, 39, 1001]
function Challenge2(input){
    //code below  

    
    // solution 1

    // let output = []
    
    // for(let i = 0; i < input.length; i++){
    //     let largestNumber = input[i][0]
    //     for(let j = 0; j < input[i].length; j++){
    //         if(input[i][j] > largestNumber){
    //             largestNumber = input[i][j]
    //         }
    //     }
    //     output.push(largestNumber)
    // }

    // solution 2

    let output = []

    input.forEach((item) => {
        let sorted = item.sort((a, b) => b - a)
        output.push(sorted[0])
    })

    return output

    //code above
}

// String truncater
// input is object of {"text" : "text here", "limit" : number here}
// output is string length == object.limit + "..."
// example: {"text": "Hello world", "limit" : 8} => "Hello wo..."
// note: if limit > text's length,  no truncation occurs
function Challenge3(input){
    //code below
    input.text.substr()

    return input.text.length > input.limit 
    ? input.text.substr(0, input.limit) + "..."
    : input.text

    //code above
}

// String repeater
// input is array of a string to repeat and number of times to repeat ["String to repeat", 3]
// output is a string of string from input[0] repeated input[1] times
// example: ["abc", 3] => "abcabcabc"
function Challenge4(input){

    //code below

    // solution 1

    // let output = ""
    // for(let i = 0; i < input[1]; i++){
    //     output += input[0]
    // }
    // return output

    // solution 2

    return input[1] > 0 ? input[0].repeat(input[1]) : ""

    //code above
}

// Search and destroy
// input is array structured such as [[array of elements to parse through] list of elements to find and remove from array at index 0]
// output is array of remaining elements from array at index 0 that are not removed
// example: [[1, 2, 3, 1, 2, 3], 2, 3] => [1, 1] 
function Challenge5(input){
    //code below
    
    let target = input[0]
    let destroy = input.slice(1)

    // solution 1

    // for(item in destroy){
    //     let destroying
    //     do{
    //         destroying = target.indexOf(destroy[item])
    //         if(destroying !== -1 ){
    //             target.splice(destroying, 1)
    //         }
    //     }
    //     while(destroying !== -1)
    // }

    // return target

    // solution 2

    return target.filter((item) => {
        if(destroy.indexOf(item) === -1){
            return true
        } else return false
    })

    //code above
}

// Find and replace
// input is array constructed such as ["text to test", "string to be replaced", "new string"]
// output is string where str in input[0]'s string to be replaced is replaced new string
// additional requirement: preserve the letter case of first character of string to be replaced and apply to first character of new string
// example:  => "He is sitting on the couch"
function Challenge6(input){
    //code below

    //interesting solution

    // for (let i = 0; i < input.length; i++) {
    //     for (x = 0; x < input[i].length; x++) {
    //         let input2 = input[2].toLowerCase();
    //         if (input[2] == "john") {
    //             input2 = "John";
    //         }
    //         return input[i].replace(input[1], input2);
    //     }
    // }

    //solution 1


    //destructuring ES6
    //["He is sleeping on the couch", "sleeping", "Sitting"]
    // let [text, target, replacement] = input
    
    // let splitReplacement = replacement.split("")
    // if(target[0] === target[0].toUpperCase()){
    //     splitReplacement[0] = splitReplacement[0].toUpperCase()
    // } else {
    //     splitReplacement[0] = splitReplacement[0].toLowerCase()
    // }
    // replacement = splitReplacement.join("")

    // let splitText = text.split(" ")
    // splitText.splice(splitText.indexOf(target), 1, replacement)
    // let output = splitText.join(" ")

    // return output

    //solution 2

    let [text, target, replacement] = input

    replacement = target[0] === target[0].toUpperCase() 
    ? replacement[0].toUpperCase() + replacement.slice(1) 
    : replacement[0].toLowerCase() + replacement.slice(1)

    return text.replace(target, replacement)


    //code above
}

// Only unique by order of discovery
// input is array of arrays to parse through
// output is unique collection of elements present in the multi dimensional array sorted by incrementing index in array(s)
// example: [[1, 3, 2], [5, 2, 1, 4], [2, 1]] => [1, 3, 2, 5, 4]
function Challenge7(input){
    //code below

    //solution 1

    // let flattened = []
    // input.forEach((item) => {
    //     flattened.push(...item)
    //     //ES6 spread operator    
    // })
    
    // let unique = []
    // flattened.forEach((item) => {
    //     unique.indexOf(item) === -1 && unique.push(item)
    // })

    // return unique

    //solution 2

    // let unique = new Set()

    // input.flat().forEach((item) => {
    //     unique.add(item)
    // })

    // return [...unique]

    //solution 3

    let unique = new Set(input.flat())
    return [...unique]

    //interesting solution

    // let newArr = input.flat()
    // let unique = newArr.filter((x, i, a) => a.indexOf(x) == i)
    // return unique

    //code above
}

// Missing letter
// input is string of sequential characters of the alphabet
// output is singular character missing from the character sequence in the input
// example: "abce" => "d"
function Challenge8(input){
    //code below

    for(let i = 0; i < input.length; i++){
        if(i !== 0 && input.charCodeAt(i) !== input.charCodeAt(i - 1) + 1){
            return String.fromCharCode(input.charCodeAt(i - 1) + 1)
        }
    }

    //code above
}

// Identify unique element(s)
// input is array of 2 set of arrays
// output is array of unique element(s) present only in either one of the arrays in input
// example: [[1, 2, 3, 5], [1, 2, 3, 4, 5]] => [4]
function Challenge9(input){
    //code below

    let [arr1, arr2, arrUnique] = [input[0], input[1], []]
    
    arr2.forEach((item) => {
        if(arr1.indexOf(item) === -1){
            arrUnique.push(item)
        }
    })
    arr1.forEach((item) => {
        if(arr2.indexOf(item) === -1){
            arrUnique.push(item)
        }
    })

    return arrUnique
    
    //code above
}

// Palindrome checker
// https://en.wikipedia.org/wiki/Palindrome
// input is string to be checked whether it is a palindrome or not
// output is boolean, return true if input is a palindrome, otherwise return false
// additional requirement: disregard letter cases of string, spaces and non-alphanumeric characters in input
// example 1: "My age is 0, 0 si ega ym." => true
// example 2: "1 eye for of 1 eye." => false
function Challenge10(input){
    //code below

    let lowercased = input.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let halfpoint = Math.floor(lowercased.length / 2)
    
    console.log(lowercased)

    for(i = 0; i < halfpoint; i++){
        if(lowercased[i] !== lowercased[lowercased.length - (i + 1)]){
            return false
        }
    }
    return true

    //code above
}

// Convert to roman numeral
// input is integers with individual value < 5000
// output is string of input integer converted into roman numeral equivalent
// example 1: 2014 => "MMXIV"
// example 2: 12 => "XII"
// note: pre-made conversionChart can be used if desired
function Challenge11(input){
    //code below

    console.log(conversionChart)

    let roman = ""

    while(input > 0){
        for(let i = 0; i < conversionChart.length;){
            if(input - conversionChart[i].arabic >= 0){
                input -= conversionChart[i].arabic
                roman += conversionChart[i].roman
                i = 0
            } else i++
        }
    } 

    return roman
    
    //code above
}