var ReadStream = require('./lib/readStream.js');

var rs = new ReadStream();

var count = 0;
rs.on('end', function() {
  console.log('done with read stream. ' + count + ' records.');
});
/**** non-flowing mode ****/
rs.on('readable', function() {
  while (null !== (record = rs.read())) {
    console.log('received: ' + JSON.stringify(record));
    count++;
  }
});

/**** flowing mode ****/
/*rs.on('data', function(record) {
  console.log('received: ' + JSON.stringify(record));
  count++;
});*/