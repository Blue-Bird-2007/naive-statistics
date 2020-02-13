import { removeNonNumbers } from "./removeNonNumbers";

export function findLargestNumber(arrayOfNumbers: number[]): number {
    if (!arrayOfNumbers || arrayOfNumbers.length === 0) {
        return 0;
    }
    const arrayOfNumbersOnly: number[] = removeNonNumbers(arrayOfNumbers);
    let largestSoFar: number = arrayOfNumbersOnly[0];
    for (let i: number = 0; i < arrayOfNumbersOnly.length - 1; i++) {
        if (arrayOfNumbersOnly[i+1] > largestSoFar) {
            largestSoFar = arrayOfNumbersOnly[i+1];
        }
    }
    return largestSoFar;
} 