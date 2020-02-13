import { findSmallestNumber } from "../app/findSmallestNumber";

test('Return the smallest number in the array if the array only consists of numbers', () => {
    const arrayOfNumbersOnly: number[] = [2, 23, 4, 75, 5];
    expect(findSmallestNumber(arrayOfNumbersOnly)).toStrictEqual(2);
});

test('Return zero if empty array is passed into the function', () => {
    expect(findSmallestNumber([])).toStrictEqual(0);
});

test('Return the smallest number if the original array contains non-numbers', () => {
    const arrayOfMixedItems: any[] = [2, -4, "frog", 17, NaN, 21];
    expect(findSmallestNumber(arrayOfMixedItems)).toStrictEqual(-4);
});