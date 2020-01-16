import { entriesAreNumbers } from "../app/entriesAreNumbers";

test("Return false if array is empty", () => {
    expect(entriesAreNumbers([])).toStrictEqual(false);
});

test("Return true if array contains only numbers", () => {
    const arrayWithNumbersOnly: number[] = [2.4, 54, 90, -8];
    expect(entriesAreNumbers(arrayWithNumbersOnly)).toStrictEqual(true);
});

test("Return false if array contains NaN", () => {
    const arrayWithNumbersAndNaN: number[] = [2.4, 54, NaN, -8];
    expect(entriesAreNumbers(arrayWithNumbersAndNaN)).toStrictEqual(false);
});

test("Return false if array contains string", () => {
    const arrayWithNumbersAndString: any[] = [2.4, 54, "frog", -8];
    expect(entriesAreNumbers(arrayWithNumbersAndString)).toStrictEqual(false);
});

test("Return false if array contains string and NaN", () => {
    const arrayWithNumbersAndStringAndNaN: any[] = [2.4, 54, "frog", -8, 12, NaN];
    expect(entriesAreNumbers(arrayWithNumbersAndStringAndNaN)).toStrictEqual(false);
});