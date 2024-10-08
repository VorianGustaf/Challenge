// function isPalindrome(value) { }
function isPalindrome(string) {
    if (string === undefined || string === null) {
        return false;
    }


    let str = string.toString();
    let cleanedValue = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            if (char >= 'A' && char <= 'Z') {
                cleanedValue += String.fromCharCode(char.charCodeAt(0) + 32); 
            } else {
                cleanedValue += char; 
            }
        }
    }

    const length = cleanedValue.length;
    for (let i = 0; i < length / 2; i++) {
        if (cleanedValue[i] !== cleanedValue[length - 1 - i]) {
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

