// miles to kilometer Counting


function Convert(miles){
    const killo = miles / 1.60934;
    return killo;
}

const miles =123;
const kiloMeter = Convert(miles);
const kiloMeters = kiloMeter.toFixed(3);
console.log("The Kilometer is = " ,kiloMeters);