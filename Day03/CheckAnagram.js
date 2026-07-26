function isAnagram(str1, str2){

    if (str1.length !== str2.length){ // check if the lengths of the two strings are equal
        return false
    }
    let sortedstr1 = str1.toLowerCase().split("").sort().join("")
    let sortedstr2 = str2.toLowerCase().split("").sort().join("")
    
    if (sortedstr1 === sortedstr2){  // here === checks for both value and type equality
        console.log("The two strings are anagrams.")
        return true
    } else {
        console.log("The two strings are not anagrams.")
        return false
    }
}
isAnagram("listen", "silent"); // passing arguments to the function to check if they are anagrams
isAnagram("hello", "world"); 
isAnagram("Triangle", "Integral"); 
isAnagram("Apple", "Pabble");  // length of the two strings are not equal so they are not anagrams




