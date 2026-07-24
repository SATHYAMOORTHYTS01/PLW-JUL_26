// 1. Declaration
var course;
// 2. Initialization // it is allowed in var but not in let and const
var course = 'Playwright';
console.log(course);

course = 'Cypress';
console.log(course);
// 3. Re-Initialization

course = 89220;
console.log(course)

// 4. Re Declaration // it is allowed in var but not in let and const
var course = 'Selenium';
console.log(course);

// 5. hoisting // it is allowed in var but not in let and const
console.log(courseName);
var courseName = 'Playwright';

// 6.scoping

function Getnationality() { //function scope

    { // block scope - means the variable is accessible only within this block 
        let nationality = 'Indian';
        console.log(nationality);
    }
    
}
Getnationality()




