// console.log(numberData); //single row array [21, 332, 8, 15, 30, 67]
// console.log(arrayData[0][1][2]); //multi dimension array => 5
// console.log(person.phoneNo.contactNumber); // => 123456789
// console.log(person[`phoneNo`][`countryCode`]); // => +263
// console.log(person[`name`]); // => Jamal
// console.log(`Jamal's country code is: ${person.phoneNo.countryCode}`);
// // => Jamal's country code is: +263
// console.log(person.likes[1]); // => Ice cream
// console.log(numberData.push(`hello world`));
// console.log(numberData.unshift(`world hello`));
// console.log(numberData);
// console.log(numberData.pop());
// console.log(numberData);
// console.log(numberData.shift());
// console.log(numberData);

// let panjang = numberData.length;
// let odd1 = [];
// for (let i = 0; i < panjang; i++) {
//   if (numberData[i] % 2) {
//     console.log(numberData[i]);
//     odd1.push(numberData[i]);
//   }
// }

// let i = 0;
// let odd2 = [];
// while (i < panjang) {
//   if (numberData[i] % 2) {
//     console.log(numberData[i]);
//     odd2.push(numberData[i]);
//   }
//   i++;
// }

// console.log(`for loop ${odd1} | while loop ${odd2}`);
// console.log(numberData.indexOf(15));
// let sliceArray = numberData.slice(1, 4);
// console.log(sliceArray);
// console.log(numberData);
// // numberData.splice(2, 2, "hello", "world", "happy");
// // console.log(numberData);
// numberData.splice(numberData.indexOf(15), 1, "Hello World");
// console.log(numberData);
// let newData = [];
// for (let i = 0; i < movies.length; i++) {
//   newData.push({
//     movieName: movies[i].Title,
//     rating: movies[i].imdbRating,
//   });
// }
// console.log(newData);

let newData2 = movies.map((arr, i) => {
  return {
    moviesName: arr.Title,
    rating: arr.imdbRating,
  };
});
console.log(newData2);

let f1 = [];
for (let i = 0; i < newData2.length; i++) {
  if (newData2[i].rating > 8) {
    f1.push(newData2[i]);
  }
}

let f2 = newData2.filter((x) => x.rating > 8);
// function highrating(x) {
//   if (x > 8) {
//     return {
//       moviesName: rating.Title,
//       rating: rating.imdbRating,
//     };
//   }
// }

console.log("f1", f1);
console.log("f2", f2);
