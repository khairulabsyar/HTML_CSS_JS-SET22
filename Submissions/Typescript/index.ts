// const addTwoNumber = (a: number, b: number) => {
//   return a + b;
// };

// const result = addTwoNumber(5, 5);

// const resultString = result.toString();

// const secondResult = addTwoNumber(resultString, 5);

// const createLowerCase = (str: string) => {
//   return str.toLowerCase();
// };

// const result = createLowerCase("HELLOW WOLRD");

// console.log(result);

// const response = {
//   data: {
//     success: true,
//     message: "Success",
//   },
// };

// const getResponseMessage = (res: typeof response) => {
//   if (res.data.success) {
//     return res;
//   }
// };

// console.log(getResponseMessage(response));

const getName = (firstName: string, secondName?: string) => {
  if (secondName) {
    return firstName + secondName;
  }
  return firstName;
};

getName("absyar");
