function isPalindrome(word) {
   // reverse the input string
   const reversedWord = reverseString(word);
   // if the reversed string is the same as the input
   return word === reversedWord;
}

function reverseString(word) {
  // reverse the string
  const reversedWord = word.split("").reverse().join("");
  // return the reversed string
  return reversedWord;
}

/* 
  Add your pseudocode here
  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  

}

module.exports = isPalindrome;
