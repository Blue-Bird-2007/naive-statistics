import { mean } from "../app/mean";

test('Return the mean of the numbers in the array if the array only consists of numbers', () => {
    const arrayOfNumbersOnly: number[] = [4, 16, 75, 25];
    expect(mean(arrayOfNumbersOnly)).toStrictEqual(30);
});

test('Return zero if empty array is passed into the function', () => {
    expect(mean([])).toStrictEqual(0);
});

test('Return number of numbers if original array contains non-numbers', () => {
    const arrayOfMixedItems: any[] = [4, 16, "frog", 75, NaN, 25];
    expect(mean(arrayOfMixedItems)).toStrictEqual(30);
});