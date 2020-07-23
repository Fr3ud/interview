/**
 * The modern version of the Fisher–Yates shuffle algorithm.
 */

{
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = arr[i];
            
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        return arr;
    }
    
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    console.log(shuffle(array));
}
