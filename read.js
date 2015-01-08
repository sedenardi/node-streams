var ReadStream = require('./lib/readStream.js');

/**** non-flowing mode ****/
var startNonFlowing = function(cb) {
  console.log('starting read stream in non-flowing mode.');
  var rs = new ReadStream();
  rs.on('readable', function() {
    while (null !== (record = rs.read())) {
      console.log('received         : ' + JSON.stringify(record));
    }
  });
  rs.on('end', function() {
    console.log('done with read stream in non-flowing mode.\n');
    cb();
  });
};

/**** flowing mode ****/
var startFlowing = function() {
  console.log('starting read stream in flowing mode.');
  var rs = new ReadStream();
  rs.on('data', function(record) {
    console.log('received         : ' + JSON.stringify(record));
  });
  rs.on('end', function() {
    console.log('done with read stream in flowing mode.\n');
  });
};

startNonFlowing(startFlowing);