//function shiftCharacters() { }
// function encryptMe(text, shiftNums, direction) {}

function shiftCharacters(char, shift) {
    let newCharCode;

    // Menggeser huruf kapital
    if (char >= 'A' && char <= 'Z') {
        newCharCode = char.charCodeAt(0) + shift;
        if (newCharCode > 'Z'.charCodeAt(0)) {
            newCharCode -= 26; // Jika melewati Z
        } else if (newCharCode < 'A'.charCodeAt(0)) {
            newCharCode += 26; // Jika melewati A
        }
        return String.fromCharCode(newCharCode);
    }
    
    // Menggeser huruf kecil
    if (char >= 'a' && char <= 'z') {
        newCharCode = char.charCodeAt(0) + shift;
        if (newCharCode > 'z'.charCodeAt(0)) {
            newCharCode -= 26; // Jika melewati z
        } else if (newCharCode < 'a'.charCodeAt(0)) {
            newCharCode += 26; // Jika melewati a
        }
        return String.fromCharCode(newCharCode);
    }

    // Jika bukan huruf, kembalikan karakter asli
    return char;
}

function encryptMe(text, shiftNums, direction) {
    // Memeriksa validitas input text
    if (!text || typeof text !== 'string') {
        return "Invalid text.";
    }
    
    // Memeriksa apakah text hanya mengandung huruf
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) {
            return "Invalid text to be encrypted.";
        }
    }

    // Mengatur nilai default untuk shiftNums dan direction
    if (shiftNums === undefined) {
        shiftNums = 1; // jika shiftNums tidak diisi, default ke 1
    }
    if (direction === undefined) {
        direction = 'right'; // jika direction tidak diisi, default ke 'right'
    }
    
    // Memeriksa validitas direction
    if (direction !== "left" && direction !== "right") {
        return "Invalid direction.";
    }

    // Menentukan arah pergeseran
    const shift = direction === "left" ? -shiftNums : shiftNums;
    let result = '';

    // Melakukan pergeseran untuk setiap karakter
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        result += shiftCharacters(char, shift);
    }

    return result;
}

// Test cases
console.log(encryptMe("Kodok")); // Lpepl
console.log(encryptMe("")); // Invalid text.
console.log(encryptMe("Roda", 2, "left")); // Pmby
console.log(encryptMe("Tongkat", 2, "down")); // Invalid direction.
console.log(encryptMe("AbC", 1, "left")); // ZaB