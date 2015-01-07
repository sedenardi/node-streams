var ReadStream = require('./lib/readStream.js'),
    WriteStream = require('./lib/writeStream.js'),
    TransformStream = require('./lib/transformStream.js');

var rs = new ReadStream();
var ws = new WriteStream();
var ts1 = new TransformStream();
var ts2 = new TransformStream();

rs.pipe(ts1).pipe(ts2).pipe(ws);