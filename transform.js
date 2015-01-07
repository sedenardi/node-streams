var ReadStream = require('./lib/readStream.js'),
    WriteStream = require('./lib/writeStream.js'),
    TransformStream = require('./lib/transformStream.js');

var rs = new ReadStream();
var ws = new WriteStream();
var ts = new TransformStream();

rs.pipe(ts).pipe(ws);