

function LeapYear(Year){

    const remainder = Year % 4;
    if(remainder == 0){
        return true;
    }
    else {
        return false;

    }

}
 const IsLeapYear = LeapYear(2019);

 console.log(IsLeapYear);