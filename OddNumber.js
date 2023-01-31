
//  Get Odd Numbers of an array and get odd Sum of an array

function OddNumber( Number){
    let oddStore = [];
    let sum = 0;
    for(let i = 0; i < Number.length; i++){
        const indexNumber = i;
 
        const element = Number[i];

        sum = sum + element;

        if(element % 2 !== 0){
            // console.log(indexNumber , element, sum);
            oddStore.push(element );
        }      
        console.log(indexNumber, oddStore);
    }
    return sum;
}
const myNumber = [23,43,24,45,56,35,22,40];

const addNumber = OddNumber(myNumber);
console.log("Total Odd Number is = ",addNumber);

// const SumofOddNumber = OddNumber(addNumber);
// console.log(SumofOddNumber);


