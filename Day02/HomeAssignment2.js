// Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
// corresponding string indicating the type.

function checknumbertype(number) {

    if(number > 0){
        return "Positive";
    }
    else if (number < 0){
        return "Negative";
    }
    else {
        return "zero";
    }
}

number = -10
console.log(checknumbertype(number))
