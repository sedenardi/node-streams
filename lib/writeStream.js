var Writable = require('stream').Writable,
    util = require('util');

var WriteStream = function() {
  Writable.call(this, {objectMode: true});
};

util.inherits(WriteStream, Writable);

WriteStream.prototype._write = function(chunk, encoding, callback) {
  console.log('write            : ' + JSON.stringify(chunk));
  callback();
};

module.exports = WriteStream;