/**
 * Context
 */

{
    const hash = () => {
        const data = {};
        let counter = 0;

        return (key, value) => {
            data[key] = value;
            counter++;
            console.log(counter);

            return data;
        };
    };

    const h1 = hash();

    h1('name', 'Marcus');
    h1('city', 'Roma');

    const obj = h1('born', 121);

    console.dir({ obj });
}

{
    const add = x => y => x + y;

    const result = add(4)(2);
    console.log(result);
}