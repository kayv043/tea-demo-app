// Helper function to reverse a string
function reverseString(str) {
    if (typeof str !== 'string') {
      throw new Error("Input must be a string");
    }
  
    return str.split('').reverse().join('');
  }
  
  // Helper function to check if a string is a palindrome
  function isPalindrome(str) {
    if (typeof str !== 'string') {
      throw new Error("Input must be a string");
    }
  
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = reverseString(cleanedStr);
    return cleanedStr === reversedStr;
  }
  
  // Demo using the helper functions
  try {
    const originalString = "A man, a plan, a canal, Panama!";
    
    const reversedString = reverseString(originalString);
    console.log("Reversed String:", reversedString);
  
    const palindromeCheck = isPalindrome(originalString);
    console.log("Is Palindrome:", palindromeCheck);
  } catch (error) {
    console.error("Error:", error.message);
  }
  