import { removeNonNumbers } from "./removeNonNumbers";

export function findSmallestNumber(arrayOfNumbers: number[]): number {
    if (!arrayOfNumbers || arrayOfNumbers.length === 0) {
        return 0;
    }
    const arrayOfNumbersOnly: number[] = removeNonNumbers(arrayOfNumbers);
    let smallestSoFar: number = arrayOfNumbersOnly[0];
    for (let i: number = 0; i < arrayOfNumbersOnly.length - 1; i++) {
        if (arrayOfNumbersOnly[i+1] < smallestSoFar) {
            smallestSoFar = arrayOfNumbersOnly[i+1];
        }
    }
    return smallestSoFar;
} 