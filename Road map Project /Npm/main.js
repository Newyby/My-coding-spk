console.log('')
let myDate = new Date();
console.log(myDate.toString());
var moment = require("moment"); // require
var unique = require("uniq"); // require
var myList = [1,1,3,3,3,4,5,6,6,6,8,9]
var myCoolDate = moment(myDate).format("LL"); 
var myUniquelist = unique(myList)
console.log(myUniquelist)
//console.log(myCoolDate)