var phptime = require('./../lib/PhpTime')

console.log(phptime.time());

var datestr = phptime.date( 'Y-m-d H:i:s',phptime.time() );

console.log( datestr );

var time = phptime.strtotime( datestr   );
console.log(time);

var datestr = phptime.date( 'Y-m-d H:i:s',time);

console.log( datestr );