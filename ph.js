// 1. Reverse a String
function stringReverse(str){
    let reversedString = "";
    for (let i = str.length - 1; i >=0; i--){
        reversedString += str[i];

    }
    return reversedString;
    
}

console.log(stringReverse("hello")) 


// 2. Count Vowels in a String
function vowelsCount(str){
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;

        }
    }

    return count;

}

console.log(vowelsCount("programming")) 

// 3. Check for Palindrome
function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return str === reversed;
}

console.log(isPalindrome("madam"));

// 4. Find the Maximum Number
function findMax(arr) {
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

console.log(findMax([5, 1, 9, 3]));


