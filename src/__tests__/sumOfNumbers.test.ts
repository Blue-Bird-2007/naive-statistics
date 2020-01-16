import { sumOfNumbers } from "../app/sumOfNumbers";

test("Return 0 if array is empty", () => {
    expect(sumOfNumbers([])).toStrictEqual(0);
});

test("Return the value of 10", () => {
    const arrayWithNumbersOnly: number[] = [-2, 0, 2, 4, 6];
    expect(sumOfNumbers(arrayWithNumbersOnly)).toBe(10);
});

test("Return the value of 10, since nonNumbers are excluded", () => {
    const arrayWithNumbersOnly: any[] = [NaN, -2, 0, 2, "frog", 4, 6];
    expect(sumOfNumbers(arrayWithNumbersOnly)).toBe(10);
});