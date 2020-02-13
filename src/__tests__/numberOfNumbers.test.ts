import { numberOfNumbers } from "../app/numberOfNumbers";

test('Return the number of elements in the array if the array only consists of numbers', () => {
    const arrayOfNumbersOnly: number[] = [4, 5, 75, 23];
    expect(numberOfNumbers(arrayOfNumbersOnly)).toStrictEqual(4);
});

test('Return zero if empty array is passed into the function', () => {
    expect(numberOfNumbers([])).toStrictEqual(0);
});

test('Return number of numbers if original array contains non-numbers', () => {
    const arrayOfMixedItems: any[] = [2, 4, "frog", 17, NaN, 21];
    expect(numberOfNumbers(arrayOfMixedItems)).toStrictEqual(4);
});