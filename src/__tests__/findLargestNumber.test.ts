import { findLargestNumber } from "../app/findLargestNumber";

test('Return the largest number in the array if the array only consists of numbers', () => {
    const arrayOfNumbersOnly: number[] = [4, 5, 75, 23];
    expect(findLargestNumber(arrayOfNumbersOnly)).toStrictEqual(75);
});

test('Return zero if empty array is passed into the function', () => {
    expect(findLargestNumber([])).toStrictEqual(0);
});

test('Return the largest number if the original array contains non-numbers', () => {
    const arrayOfMixedItems: any[] = [2, -4, "frog", 17, NaN, 21];
    expect(findLargestNumber(arrayOfMixedItems)).toStrictEqual(21);
});