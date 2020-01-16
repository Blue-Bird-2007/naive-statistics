export function entriesAreNumbers(arrayOfNumbers: number[]): boolean {
    let allEntriesAreNumbers: boolean = true;
    if (!arrayOfNumbers || arrayOfNumbers.length === 0) {
        return false;
    }
    for (const number of arrayOfNumbers) {
        if (typeof number !== "number" || Number.isNaN(number)) {
            allEntriesAreNumbers = false;
            break;
        }
    }
    return allEntriesAreNumbers;
} 