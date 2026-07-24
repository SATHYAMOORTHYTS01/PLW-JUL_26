for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log("The number is odd: " + i);
    }
    else {
        console.log("The number is even: " + i);
    }
}


// if statement 

// check if the number is positve 

let num = 10

if (num > 0) {
    console.log("The number is positive:" + num);
}

// if else statement 

// check if a person can vote

let age = 17

if (age >= 18){
    console.log("The person can vote")

} else{
    console.log("The person cannot vote")
}

// if else , if else (multiple statement)

// grade system 

let score = 85   

if (score >= 90) {
    console.log("The grade is A")
} else if (score >= 80) {
    console.log ("The grade is B")
} else if (score >= 70) {
    console.log("The grade is C")
} else if (score >= 60) {
    console.log("The grade is D")
} else {
    console.log("The grade is F")
}