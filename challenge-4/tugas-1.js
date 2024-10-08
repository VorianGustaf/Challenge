// function isPalindrome(value) { }

function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^A-Za-z0–9]/g);  
    const word = [...string];
    const baru =[];
    word.forEach(element => {
        baru.unshift(element);
    });
    const kebalik = baru.join(''); 
    return string === kebalik ;
 }

 console.log("Expecting: true");
  console.log("Test 1:", isPalindrome("racecar"))

  console.log('Expecting: false');
  console.log('Test 2:', isPalindrome("index"))

  console.log("Expecting: true");
  console.log("Test 3:", isPalindrome("RacEcaR"));

  console.log("Expecting: false");
  console.log("Test 4:", isPalindrome());

  console.log("Expecting: true");
  console.log("Test 5:", isPalindrome(157751));

  console.log("Expecting: false");
  console.log("Test 6:", isPalindrome(3261789));

