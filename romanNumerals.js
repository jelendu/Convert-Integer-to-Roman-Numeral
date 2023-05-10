// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for example, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

// function toRoman(num) {
//   let result = "";
//   const numerals = [
//     ["M", 1000],
//     ["D", 500],
//     ["C", 100],
//     ["L", 50],
//     ["X", 10],
//     ["V", 5],
//     ["I", 1],
//   ];
//   for (let i = 0; i < numerals.length; i++) {
//     while (num >= numerals[i][1]) {
//       result += numerals[i][0];
//       num -= numerals[i][1];
//     }
//   }
//   return result;
// }

// console.log(toRoman(9));


function toRoman(num) {
  let result = "";
  const values = [1000, 500, 100, 50, 10, 5, 1];
  const symbols = ["M", "D", "C", "L", "X", "V", "I"];

  for (let i = 0; i < 7; i++) {
    while (num >= values[i]) {
      num -= values[i];
      result += symbols[i];
    }
  }
  return result;
}

console.log(toRoman(5));
console.log(toRoman(267));
console.log(toRoman(99));