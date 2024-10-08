// function isPalindrome(value) { }

function isPalindrome(string) {
    // Periksa apakah input valid
    if (string === undefined || string === null) {
        return false;
    }

    // Konversi ke huruf kecil dan hapus karakter non-alfanumerik
    string = string.toString().toLowerCase().replace(/[^A-Za-z0-9]/g, '');  
    const reversed = string.split('').reverse().join(''); // Membalik string
    return string === reversed; // Bandingkan string asli dengan yang dibalik
}

// Test cases
console.log("Expecting: true");
console.log("Test 1:", isPalindrome("racecar"));

console.log('Expecting: false');
console.log('Test 2:', isPalindrome("index"));

console.log("Expecting: true");
console.log("Test 3:", isPalindrome("RacEcaR"));

console.log("Expecting: false");
console.log("Test 4:", isPalindrome());

console.log("Expecting: true");
console.log("Test 5:", isPalindrome(157751));

console.log("Expecting: false");
console.log("Test 6:", isPalindrome(3261789));

