var ReadStream = require('./lib/readStream.js'),
    WriteStream = require('./lib/writeStream.js'),
    TransformFilterStream = require('./lib/transformFilterStream.js');

var rs = new ReadStream();
var ws = new WriteStream();
var tfs = new TransformFilterStream();

rs.pipe(tfs).pipe(ws);