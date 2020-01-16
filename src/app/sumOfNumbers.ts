import { entriesAreNumbers } from "./entriesAreNumbers";
import { removeNonNumbers } from "../app/removeNonNumbers";

export function sumOfNumbers(arrayOfNumbers: number[]): number {
    if (arrayOfNumbers.length === 0 || !arrayOfNumbers) {
        return 0;
    }
    const allEntriesAreNumbers: boolean = entriesAreNumbers(arrayOfNumbers);
    if (allEntriesAreNumbers) {
        let sum: number = 0;
        for (const number of arrayOfNumbers) {
            sum += number;
        }
        return sum;
    } else {
          const arrayWithOnlyNumbers: number[] = removeNonNumbers(arrayOfNumbers);
          let sum: number = 0;
          for (const number of arrayWithOnlyNumbers) {
              sum += number;
          }
          return sum;
    }
}