// function isPalindrome(value) { }
function isPalindrome(string) {
    // Periksa apakah input valid
    if (string === undefined || string === null) {
        return false;
    }

    // Konversi input menjadi string jika berupa angka
    let str = string.toString();
    let cleanedValue = '';
    
    // Membersihkan string: hanya menyimpan karakter alfanumerik dan mengubah ke huruf kecil
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Memeriksa apakah karakter adalah huruf atau angka
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            // Mengubah huruf besar menjadi kecil
            if (char >= 'A' && char <= 'Z') {
                cleanedValue += String.fromCharCode(char.charCodeAt(0) + 32); // Mengubah ke huruf kecil
            } else {
                cleanedValue += char; // Menjaga karakter kecil dan angka
            }
        }
    }

    // Memeriksa palindrom
    const length = cleanedValue.length;
    for (let i = 0; i < length / 2; i++) {
        if (cleanedValue[i] !== cleanedValue[length - 1 - i]) {
            return false; // Jika ada karakter yang tidak cocok, bukan palindrom
        }
    }
    
    return true; // Jika semua karakter cocok, maka palindrom
}

// Test cases

console.log("Test 1:", isPalindrome("racecar"));

console.log('Test 2:', isPalindrome("index"));

console.log("Test 3:", isPalindrome("RacEcaR"));

console.log("Test 4:", isPalindrome());

console.log("Test 5:", isPalindrome(157751));

console.log("Test 6:", isPalindrome(3261789));

