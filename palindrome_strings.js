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
  

{
    function isPalindrome(str) {
        const len = Math.floor(str.length / 2);
      
        for (let i = 0; i < len; i++) {
            if (str[i] !== str[str.length - i - 1]) {
                return false;
            }
        }
      
        return true;
    }
    
    console.log(isPalindrome("anna"));
    console.log(isPalindrome("walter"));
}
