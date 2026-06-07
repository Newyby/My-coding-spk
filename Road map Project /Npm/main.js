console.log('')
let myDate = new Date();
console.log(myDate.toString());
var moment = require("moment"); // require
var unique = require("uniq"); // require

var myCoolDate = moment(myDate).format("LL"); 
console.log(myCoolDate)