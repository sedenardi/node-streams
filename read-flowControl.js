var ReadStream = require('./lib/readStream.js');

var rs = new ReadStream();
rs.on('data', function(record) {
  console.log('received         : ' + JSON.stringify(record));
  console.log('pausing stream for 2 seconds');
  rs.pause();
  setTimeout(function() {
    console.log('resuming stream');
    rs.resume();
  },2000);
});
rs.on('end', function() {
  console.log('done with read stream in flowing mode.\n');
});