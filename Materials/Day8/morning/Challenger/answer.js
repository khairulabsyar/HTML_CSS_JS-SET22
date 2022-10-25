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

    






    //code above
}

// Array of largest in arrays
// example: [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]] => [27, 5, 39, 1001]
function Challenge2(input){
    //code below  
    







    //code above
}

// String truncater
// input is object of {"text" : "text here", "limit" : number here}
// output is string length == object.limit + "..."
// example: {"text": "Hello world", "limit" : 8} => "Hello wo..."
// note: if limit > text's length,  no truncation occurs
function Challenge3(input){
    //code below

    



    

    //code above
}

// String repeater
// input is array of a string to repeat and number of times to repeat ["String to repeat", 3]
// output is a string of string from input[0] repeated input[1] times
// example: ["abc", 3] => "abcabcabc"
function Challenge4(input){
    //code below
    




    

    //code above
}

// Search and destroy
// input is array structured such as [[array of elements to parse through] list of elements to find and remove from array at index 0]
// output is array of remaining elements from array at index 0 that are not removed
// example: [[1, 2, 3, 1, 2, 3], 2, 3] => [1, 1] 
function Challenge5(input){
    //code below
    




    

    //code above
}

// Find and replace
// input is array constructed such as ["text to test", "string to be replaced", "new string"]
// output is string where str in input[0]'s string to be replaced is replaced new string
// additional requirement: preserve the letter case of first character of string to be replaced and apply to first character of new string
// example: ["He is sleeping on the couch", "sleeping", "Sitting"] => "He is sitting on the couch"
function Challenge6(input){
    //code below





    

    //code above
}

// Only unique by order of discovery
// input is array of arrays to parse through
// output is unique collection of elements present in the multi dimensional array sorted by incrementing index in array(s)
// example: [[1, 3, 2], [5, 2, 1, 4], [2, 1]] => [1, 3, 2, 5, 4]
function Challenge7(input){
    //code below





    

    //code above
}

// Missing letter
// input is string of sequential characters of the alphabet
// output is singular character missing from the character sequence in the input
// example: "abce" => "d"
function Challenge8(input){
    //code below





    

    //code above
}

// Identify unique element(s)
// input is array of 2 set of arrays
// output is array of unique element(s) present only in either one of the arrays in input
// example: [[1, 2, 3, 5], [1, 2, 3, 4, 5]] => [4]
function Challenge9(input){
    //code below






    
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




    
    //code above
}