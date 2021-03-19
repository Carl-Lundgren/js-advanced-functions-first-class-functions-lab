// Code your solution in this file!
const returnFirstTwoDrivers = (driver) => driver.slice(0,2);

const returnLastTwoDrivers = (driver) => driver.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare) {
       return fare*multiplier;
    }
} 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}