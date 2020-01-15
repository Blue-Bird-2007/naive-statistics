import { removeNonNumbers } from "../app/RemoveNonNumbers";

test('Return the same array if it only consists of numbers', () => {
    const arrayOfNumbersOnly: number[] = [4, 5, 75, 23];
    expect(removeNonNumbers(arrayOfNumbersOnly)).toStrictEqual(arrayOfNumbersOnly);
});

test('Return empty array if empty array is passed into the function', () => {
    expect(removeNonNumbers([])).toStrictEqual([]);
});

test('Return array of only numbers if original array contains non-numbers', () => {
    const arrayOfMixedItems: any[] = [2, 4, "frog", 17, NaN, 21];
    const arrayOfNumbersOnly: number[] = [2, 4, 17, 21];
    expect(removeNonNumbers(arrayOfMixedItems)).toStrictEqual(arrayOfNumbersOnly);
});