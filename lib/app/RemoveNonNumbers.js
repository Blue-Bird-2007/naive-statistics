"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RemoveNonNumbers = /** @class */ (function () {
    function RemoveNonNumbers() {
    }
    RemoveNonNumbers.prototype.removeNonNumbers = function (arrayOfNumbers) {
        var arrayOfNumbersOnly = [];
        if (!arrayOfNumbers) {
            return arrayOfNumbersOnly;
        }
        for (var _i = 0, arrayOfNumbers_1 = arrayOfNumbers; _i < arrayOfNumbers_1.length; _i++) {
            var number = arrayOfNumbers_1[_i];
            if (typeof number === "number") {
                arrayOfNumbersOnly.push(number);
            }
        }
        return arrayOfNumbersOnly;
    };
    return RemoveNonNumbers;
}());
exports.RemoveNonNumbers = RemoveNonNumbers;
