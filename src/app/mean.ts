import { numberOfNumbers } from "./numberOfNumbers";
import { sumOfNumbers } from "./sumOfNumbers";

export function mean(arrayOfNumbers: number[]): number {
    if (arrayOfNumbers.length === 0 || !arrayOfNumbers) {
        return 0;
    }
    return sumOfNumbers(arrayOfNumbers) / numberOfNumbers(arrayOfNumbers);
}