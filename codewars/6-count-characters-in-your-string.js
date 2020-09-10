function count (string) {  
    const charObj = {};
      
    for (let char of string) {
      charObj[char] = charObj[char] + 1 || 1;
    }
    
    return charObj;
}
