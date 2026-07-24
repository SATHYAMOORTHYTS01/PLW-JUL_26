// // Create two functions : launchBrowser, runTests where,
//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value
//  b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript

// 1.

function launchBrowser(browserName){
    if(browserName === "chrome"){
        console.log("Launching Chrome Browser");
    }else{
        console.log("Launching Other Browser");
    }
}

browserName = "chrome"
console.log(launchBrowser(browserName))

// 2. 

function runtests(testType){
    switch (testType){
    case "Smoke":
        console.log("Running smoke tests");
        break;
    case "Sanity":
        console.log("Running Sanity tests");
        break;
    case "Regression":
        console.log("Running Regression tests");
        break;
    default:
        console.log("Running Smoke tests");
        break;
    }
}

runtests("Smoke")
runtests("Sanity")
runtests("Regression")
runtests("Other")


