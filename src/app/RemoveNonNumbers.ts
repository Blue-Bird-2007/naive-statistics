export function removeNonNumbers(arrayOfNumbers: number[]): number[] {
    const arrayOfNumbersOnly: number[] = [];
    if (!arrayOfNumbers) {
        return arrayOfNumbersOnly;
    }
    for (const number of arrayOfNumbers) {
        if (typeof number === "number" && !Number.isNaN(number)) {
            arrayOfNumbersOnly.push(number);
        }
    }
    return arrayOfNumbersOnly;
} 
