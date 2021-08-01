console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(false)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean(2)); // true
console.log(Boolean("Erick")); // true
console.log(Boolean([])); // true
console.log(Boolean(function(){})); // true
console.log(Boolean(true)); // true