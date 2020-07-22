/**
 * Remove duplicates from unsorted array using Set data structure
 * 
 * The Set object lets you store unique values of any type,
 * whether primitive values or object references.
 */

{
    const array = ['Alexander', '😻', 'Maria', '😻', 'Pavel', '😻'];

    const uniqArray1 = [...new Set(array)];
    const uniqArray2 = Array.from(new Set(array));

    console.log(uniqArray1); // ["Alexander", "😻", "Maria", "Pavel"]
    console.log(uniqArray2); // ["Alexander", "😻", "Maria", "Pavel"]
}

/**
 * Remove duplicates from unsorted array using Filter
 */

{
    const array = ['Alexander', '😻', 'Maria', '😻', 'Pavel', '😻'];

    const uniqArray = array.filter((item, index) => index === array.indexOf(item));

    console.log(uniqArray); // ["Alexander", "😻", "Maria", "Pavel"]
}

/**
 * Remove duplicates from unsorted array using Reduce
 */

{
    const array = ['Alexander', '😻', 'Maria', '😻', 'Pavel', '😻'];

    const uniqArray = array.reduce((uniq, item) => {
      return uniq.includes(item) ? uniq : [...uniq, item];
    }, []);

    console.log(uniqArray); // ["Alexander", "😻", "Maria", "Pavel"]
}
