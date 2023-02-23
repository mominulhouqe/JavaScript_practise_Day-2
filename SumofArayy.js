// Task : 21-5 == Calculate Sum of all numbers of an array

function SumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length ; i++){
        let indexOfArray = i;
        let elementOfArray = numbers[indexOfArray];
        sum = sum + elementOfArray;
        console.log(indexOfArray, "`", elementOfArray , sum);
    }
    return sum;
}
const myNumber = [23,234,434,23];
SumOfArray(myNumber);
