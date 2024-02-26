export {};

// ✅ For STRING Enums
enum StringEnum {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

const values = Object.values(StringEnum);
// 👇️ ['S', 'M', 'L']
console.log(values);

const names = Object.keys(StringEnum);
// 👇️ ['Small', 'Medium', 'Large']
console.log(names);

// ---------------------------------------------------

// EXAMPLE 2

// // ✅ For NUMERIC Enums
// enum NumericEnum {
//   Small,
//   Medium,
//   Large,
// }

// const values = Object.keys(NumericEnum).filter((v) => !isNaN(Number(v)));
// console.log(values); // 👉️ ['0', '1', '2']

// const names = Object.keys(NumericEnum).filter((v) => isNaN(Number(v)));
// console.log(names); // 👉️ ['Small', 'Medium', 'Large']

// ---------------------------------------------------

// EXAMPLE 3 - Get all Enum Names as an Array in TypeScript

// // ✅ STRING Enums
// enum StringEnum {
//   Yes = 'Y',
//   No = 'N',
//   Maybe = 'M',
// }

// const names = Object.keys(StringEnum);
// console.log(names); // 👉️ ['Yes', 'No', 'Maybe']

// ---------------------------------------------------

// // EXAMPLE 4

// // ✅ NUMERIC Enums
// enum NumericEnum {
//   Yes,
//   No,
//   Maybe,
// }

// const names = Object.keys(NumericEnum).filter((v) => isNaN(Number(v)));
// console.log(names); // 👉️ ['Yes', 'No', 'Maybe']

// ---------------------------------------------------

// EXAMPLE 5 - Convert an Enum to an Array of Objects in TypeScript

// // ✅ For NUMERIC Enums
// enum NumericEnum {
//   Small,
//   Medium,
//   Large,
// }

// const arr = Object.keys(NumericEnum)
//   .filter((v) => isNaN(Number(v)))
//   .map((name) => {
//     return {
//       id: NumericEnum[name as keyof typeof NumericEnum],
//       name,
//     };
//   });

// // 👇️ [{id: 0, name: 'Small'}, {id: 1, name: 'Medium'}, {id: 2, name: 'Large'}]
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 6

// // ✅ For STRING Enums
// enum StringEnum {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
// }

// const arr = Object.keys(StringEnum).map((name) => {
//   return {
//     name,
//     value: StringEnum[name as keyof typeof StringEnum],
//   };
// });

// // 👇️ [{name: 'Small', value: 'S'}, {name: 'Medium', value: 'M'}, {name: 'Large', value: 'L'}]
// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 7 - Get the length of an Enum in TypeScript

// // ✅ For String Enums
// enum Sizes {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
// }

// const len = Object.keys(Sizes).length;
// console.log(len); // 👉️ 3

// ---------------------------------------------------

// // EXAMPLE 8

// // ✅ For Numeric Enums
// enum SizesNumeric {
//   Small,
//   Medium,
//   Large,
// }

// const len = Object.keys(SizesNumeric).length / 2;
// console.log(len); // 👉️ 3

// ---------------------------------------------------

// // EXAMPLE 9 - Get the length of a Mixed Enum in TypeScript

// // ✅ For Mixed Enums (both strings and numbers)
// enum SizesMixed {
//   Small = 1,
//   Medium = 'M',
//   Large = 3,
//   ExtraLarge = 4,
// }

// const length3 = Object.keys(SizesMixed).filter((v) => isNaN(Number(v))).length;

// console.log(length3); // 👉️ 4
