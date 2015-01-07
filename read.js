var ReadStream = require('./lib/readStream.js');

var startNonFlowing = function(cb) {
  console.log('starting read stream in non-flowing mode.');
  var rs = new ReadStream();
  var count = 0;
  rs.on('end', function() {
    console.log('done with read stream in non-flowing mode. ' + count + ' records.\n');
    cb();
  });
  /**** non-flowing mode ****/
  rs.on('readable', function() {
    while (null !== (record = rs.read())) {
      console.log('received         : ' + JSON.stringify(record));
      count++;
    }
  });
};

var startFlowing = function() {
  console.log('starting read stream in flowing mode.');
  var rs = new ReadStream();
  var count = 0;
  rs.on('end', function() {
    console.log('done with read stream in flowing mode. ' + count + ' records.\n');
  });
  /**** flowing mode ****/
  rs.on('data', function(record) {
    console.log('received         : ' + JSON.stringify(record));
    count++;
  });
};

startNonFlowing(startFlowing);