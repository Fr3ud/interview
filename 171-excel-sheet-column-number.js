
/**
 * Given a column title as appear in an Excel sheet, 
 * return its corresponding column number.
 *
 * For example:
 *
 *  A -> 1
 *  B -> 2
 *  C -> 3
 *  ...
 *  Z -> 26
 *  AA -> 27
 *  AB -> 28 
 *  ...
 *
 * Example 1:
 *
 *  Input: "A"
 *  Output: 1
 *  
 * Example 2:
 *
 *  Input: "AB"
 *  Output: 28
 * 
 * Example 3:
 *
 *  Input: "ZY"
 *  Output: 701
 */
 

const titleToNumber = string => {
    const A = 'A'.charCodeAt(0);
    let result = 0;
    
    for (let char of string) {
        result = result * 26 + (char.charCodeAt(0) - A + 1);
    }
    
    return result;
};

console.log(titleToNumber('A')); // 1
console.log(titleToNumber('AB')); // 28
console.log(titleToNumber('ZY')); // 701
console.log(titleToNumber('ABBA')); // 18981
