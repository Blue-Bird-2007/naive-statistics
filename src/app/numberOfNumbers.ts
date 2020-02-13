import { removeNonNumbers } from "./removeNonNumbers";

export function numberOfNumbers(arrayOfNumbers: number[]): number {
    const arrayWithNumbersOnly: number[] = removeNonNumbers(arrayOfNumbers);
    if (!arrayWithNumbersOnly || arrayWithNumbersOnly.length === 0) {
        return 0;
    }
    return arrayWithNumbersOnly.length;
} 