function isAnagram(str1, str2){

    if (str1.length !== str2.length){
        return false;
    }

    let sortedstr1 = str1.toLowerCase().split("")
    let sortedstr2 = str2.toLowerCase().split("")

    for(let i=0; i < arr1.length-i-1; i++)
        for (let j=0; j < arr1.length; j++){
            if (arr1[j] > arr1[j+1]{
                [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]];
            }
    }
    }

    for(let i=0; i < arr2.length-i-1;j++)
        for (let j=0; j < arr2.length; j++){
            if (arr2[j] > arr2[j+1]{
                [arr2[j], arr2[j+1]] = [arr2[j+1], arr2[j]];
            }
    }
    }

    let sortedstr1 = arr1.join("");
    let sortedstr2 = arr2.join("");

    if(sortedstr1 == sortedstr2){
        console.log("Anagram")
        return true
    }
    else {
        console.log("Not an Anagram")

    }
}

