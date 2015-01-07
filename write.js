var ReadStream = require('./lib/readStream.js'),
    WriteStream = require('./lib/writeStream.js');

var rs = new ReadStream();
var ws = new WriteStream();

rs.pipe(ws);