
function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

const num1 = 35;
const num2 = 81;
const num3 = 11;

const largestNumber = findLargestNumber(num1, num2, num3);
console.log(`The largest number is: ${largestNumber}`);
