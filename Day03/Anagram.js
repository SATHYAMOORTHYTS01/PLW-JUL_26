function isAnagram(str1, str2){

    if (str1.length !== str2.length){
        return false;
    }

    let arr1 = str1.toLowerCase().split("")
    let arr2 = str2.toLowerCase().split("")

    for(let i=0; i < arr1.length; i++){
        for (let j=0; j < arr1.length-i-1; j++){
            if (arr1[j] > arr1[j+1]){
                [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]];
            }
    }
}

    for(let i=0; i < arr2.length; i++){
        for (let j=0; j < arr2.length-i-1; j++){
            if (arr2[j] > arr2[j+1]){
                [arr2[j], arr2[j+1]] = [arr2[j+1], arr2[j]];
            }
    }
}
    
    let sortedstr1 = arr1.join("");
    let sortedstr2 = arr2.join("");

    if(sortedstr1 == sortedstr2){
        console.log("Anagram")
    }
    else {
        console.log("Not an Anagram")
    }
}

isAnagram("listen","silent")

