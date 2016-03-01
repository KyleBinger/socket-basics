var moment = require('moment');
var now = moment();

/*console.log(now.format());
console.log(now.format('X')); //Unix timestamp seconds
console.log(now.format('x')); //Unix JavaScript timestamp milliseconds

console.log(now.valueOf('x')); //Makes this an integer not a string
*/

var timestamp = 1456814288503;
var timeStampMoment = moment.utc(timestamp);

console.log(timeStampMoment.local().format('h:mma'));

/*now.subtract(1, 'year');



console.log(now.format());
console.log(now.format('h:mma')); // 6:45 pm
console.log(now.format('MMM Do YYYY, h:mma')); // Oct 5th 2016, 6:45 pm
*/