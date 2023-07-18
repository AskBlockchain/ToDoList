//jshint esversion:6


module.exports = getDate;

console.log(module);

function getDate() {
let date = new Date();
let options = { weekday: 'long', month: 'long', day: 'numeric' };
//let typeOfDay;
let day = date.toLocaleDateString("en-UK", options);
//const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//let today = weekday[date.getDay()];



// if(day === 6 || day === 0) {
//   typeOfDay = "Weekend";
// } else {
//   typeOfDay = "Weekday";
// }

console.log(date);


return day;
}
