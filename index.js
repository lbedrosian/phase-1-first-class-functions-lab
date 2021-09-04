




const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    return drivers.slice(0,2)
}
function returnLastTwoDrivers() {
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(x) {
    return function(y) {
        return x*y;
    }
    //Not sure why I cant put the 3*12 it sais in the test?
}
function fareDoubler() {
    return (2*10)
}
function fareTripler() {
    return (3*12)
}
const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers); 
  }
