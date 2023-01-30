

function isEven(number){
    const remainder = number % 2;
    
    if(remainder == 0){
        return true;
    }
    else {
        return false;
    }

}

const myNumber = isEven(34);
console.log("The Result Is = ",myNumber);