let score = 26;
// console.log(typeof(score)) // number

//  score = '26';
// console.log(typeof score) // string

// let valueInNumber= Number(score) // conversion into number
// console.log(typeof valueInNumber) // number

// score = '26abc';
// valueInNumber = Number(score); // conversion into number
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // NaN (not a number)

// score = null;
// valueInNumber = Number(score); // conversion into number
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // 0

// score = undefined
// valueInNumber = Number(score); // conversion into number
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // NaN

// value             type            value-after-conversion
// "33"              number                  33
// "33abc"           number                  NaN
// true              number                  1
// false             number                  0
// null              number                  0
// undefined         number                  NaN


// when string is not empty
let str = 'Ashan';
// let valueInBoolean = Boolean(str);
// console.log(typeof valueInBoolean); // boolean
// console.log(valueInBoolean); // true

// when string is empty
//  str = '';
// let valueInBoolean = Boolean(str);
// console.log(typeof valueInBoolean); // boolean
// console.log(valueInBoolean); // false



// Conversion into string 
// let num = 2;
// let valueInString = String(num);
// console.log(typeof valueInString); // string
// console.log(valueInString); // 2


///////////////// OPERATIONS /////////////////
// let value = 4;
// let negvalue = -value;
// // console.log(negvalue);
// console.log(2 + 2); // 4
// console.log(2 - 2); // 0
// console.log(2 * 2); // 4
// console.log(2 / 2); // 1
// console.log(2 % 2); // 0
// console.log(2 ** 2); // 2 to the power 2 // 4
// console.log(2 ** 3); // 2 to the power 3 // 8

// let str1 = "Hello";
// let str2 = " World";
// let str3 = str1 + str2;
// console.log(str3);


// console.log(1 + "2"); // 12
// console.log("1" + 2); //12
// console.log("1" + 2 + 2); //122 (alls convert into string)
// console.log(1 + 2 + "2"); // 32

// console.log(true) // true
// console.log(+true) // 1
// console.log(-true) // -1
// console.log(true + 1) // 2
// console.log(1 + true) // 2
// console.log(-1 + true) // 0
// console.log(true * 0)  // 0

// let num1 , num2, num3;
// num1 = num2 = num3 = 2+2;
// console.log(num1)