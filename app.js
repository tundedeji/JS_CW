// Variables

const classArray = [
  42, // "number"
  "Tunde", // "string"
  true, // "boolean"
  undefined, // "undefined"
  null, // "object" (special case)
  Symbol("id"), // "symbol"
  BigInt(123456), // "bigint"
  { basketball: "luka" }, // "object"
  function () {}, // "function"
];

console.log(classArray[7]);
