 function isPalindrome(input) { 

if (input === undefined) return false;

let str = '';
if (typeof input === 'number') {
    str = String(input);
} else if (typeof input === 'string') {
    str = input;
} else {
    return false; 
}

let cleanedStr = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        cleanedStr += str[i].toLowerCase();
    }
}

let length = cleanedStr.length;
for (let i = 0; i < length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
        return false;
    }
}
return true;
}


// Test cases

console.log("Test 1:", isPalindrome("racecar"));

console.log('Test 2:', isPalindrome("index"));

console.log("Test 3:", isPalindrome("RacEcaR"));

console.log("Test 4:", isPalindrome());

console.log("Test 5:", isPalindrome(157751));

console.log("Test 6:", isPalindrome(3261789));

