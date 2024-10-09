// function encryptMe(text, shiftNums, direction) { }

function encryptMe(text,shiftNums,direction){
    if(!text||typeof text !== 'string'){
        return "invalid text";
    };
    for(let i=0;i<text.length;i++){
        const char=text[i];
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) {
            return "Invalid text to be encrypted.";
        }
    }

if(shiftNums === undefined){
    shiftNums = 1 ;
}

if(direction === undefined){
    direction = 'right';
}
if(direction !== "right" && direction !== "left"){
    return "invalid direction";
}
const shift = direction === "left" ? -shiftNums : shiftNums;
let result = '' ;

for (let i = 0; i < text.length; i++) {
    const char = text[i];
    let newCharCode;

    if (char >= 'A' && char <= 'Z') {
        
        newCharCode = char.charCodeAt(0) + shift;
        if (newCharCode > 'Z'.charCodeAt(0)) {
            newCharCode = newCharCode - 26; 
        } else if (newCharCode < 'A'.charCodeAt(0)) {
            newCharCode = newCharCode + 26; 
        }
        result += String.fromCharCode(newCharCode);
    } else if (char >= 'a' && char <= 'z') {
        
        newCharCode = char.charCodeAt(0) + shift;
        if (newCharCode > 'z'.charCodeAt(0)) {
            newCharCode = newCharCode - 26; 
        } else if (newCharCode < 'a'.charCodeAt(0)) {
            newCharCode = newCharCode + 26; 
        }
        result += String.fromCharCode(newCharCode);
    }
}

return result;
}
// Test cases
console.log(encryptMe("Kodok")); // Lpepl
console.log(encryptMe("")); // Invalid text.
console.log(encryptMe("Roda", 2, "left")); // Pmby
console.log(encryptMe("Tongkat", 2, "down")); // Invalid direction.
console.log(encryptMe("Xyz", 4, "right")); // Bcd
console.log(encryptMe("AbC", 1, "left")); // ZaB