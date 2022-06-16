function isPalindrome(word) {
    var re = /[^A-Za-z0-9]/g;
    word = word.toLowerCase().replace(re, '');
    let len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
isPalindrome("A man, a plan, a canal. Panama");

/* 
  Add your pseudocode here

Start by using the regular expression which will match anything except for letters and numbers.
Use the method .toLowerCase() to convert all of the characters in word into lowercase letters.
Use the regular expression to find any nonalphanumeric character (i.e., a space).
If there is one found, then return false; otherwise continue on with the loop until string has been divided by 2 and both strings has reached 0 or 1 depending on whether they match.
Find any nonalphanumeric character in word 
Find all the words that are not in the dictionary.
Use the regular expression to search for any non-alphanumeric characters and then replaces them with an empty string.
The next step of the code is to split up the string into two parts, splitting at every letter.
Then, check if one of those letters is not present in the word or not found within a certain range of letters by checking each character individually.
Return true if there are no errors and false otherwise.
  
*/

/*
  Add written explanation of your solution here
will use the For loop to iterate through the string 

  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;