/**
 * Given a non-empty array of integers, every element appears twice except for one. 
 * Find that single one.
 */

{
    const input = [4, 1, 2, 1, 2];

    const singleNumber = (nums) => {
        let uniq = new Set();
        let uniqSum = 0;
        let numSum = 0;

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];

            if (!uniq.has(current)) {
                uniq.add(current);
                uniqSum += current;
            }

            numSum += current;
        }

        return uniqSum * 2 - numSum;
    };

    console.log(singleNumber(input));
}


{
    const input = [4, 1, 2, 1, 2];

    const singleNumber = (nums) => {
        const uniq = Array.from(new Set(nums));
        const reduceSum = (s, i) => s + i;
        const uniqSum = uniq.reduce(reduceSum);
        const numSum = nums.reduce(reduceSum);

        return uniqSum * 2 - numSum;
    };

    console.log(singleNumber(input));
}
