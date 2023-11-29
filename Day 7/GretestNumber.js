
function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

const num1 = 15;
const num2 = 8;
const num3 = 21;

const largestNumber = findLargestNumber(num1, num2, num3);
console.log(`The largest number is: ${largestNumber}`);
