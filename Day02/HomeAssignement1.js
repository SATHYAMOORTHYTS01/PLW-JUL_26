// Write a JavaScript function named isOddOrEven that takes an integer as i
// input and returns Odd if the number is odd and "Even" if the number is even.

function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    }else {
        return "Odd";
    }
}
number = 6;
console.log(isOddOrEven(number)) 


