{
    const reverse = (str) => {
        let result = '';

        for (let i = 0; i < str.length; i++) {
            result = `${str[i]}${result}`;
        }
      
        return result;
      };
      
      reverse('Hello'); // 'olleH'
}
