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

/**
 * Simple closure
 */


{
    const add = x => y => x + y;

    const result = add(4)(2);
    console.log(result);
}

/**
 * Recursive closure
 */

{
    const add = x => y => {
        const z = x + y;
        console.log(`${x} + ${y} = ${z}`);
        
        return add(z);
    }

    // const add = x => y => add(x + y);

    const a1 = add(4);
    const a2 = a1(2);
    const a3 = a2(5);
    const a4 = a1(10);
    const a5 = a2(1);
    console.log(a1, a2, a3, a4, a5);

    const result = add(1)(3)(3)(7);
    console.log(result);
}

{
    const adder = x => {
        const value = () => x;
        const add = y => adder(x + y);

        return { add, value };
    }

    const result = adder(42).add(-4).add(12).add(-8).value();
    console.log(result);
}