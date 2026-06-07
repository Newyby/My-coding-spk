console.log('')
let myDate = new Date();
console.log(myDate.toString());
var moment = require("moment"); // require
var myCoolDate = moment(myDate).format("LL"); 
console.log(myCoolDate)