{
    const isPalindrome = (str) => {
        str = str.toString().toUpperCase().replace(/\s/g, '');
    
        return str === str.split('').reverse().join('');
    }
    
    console.log(isPalindrome("anna"));
    console.log(isPalindrome("walter"));
    console.log(isPalindrome(12321));
    console.log(isPalindrome(123456));
  }
  