var data = require('../data-sources/sourceData.json'),
    Readable = require('stream').Readable,
    util = require('util');

var ReadStream = function() {
  Readable.call(this, {objectMode: true});

  this.data = data;
  this.curIndex = 0;
};

util.inherits(ReadStream, Readable);

ReadStream.prototype._read = function() {
  if (this.curIndex === this.data.length) {
    return this.push(null);
  }

  var data = this.data[this.curIndex++];
  console.log('read             : ' + JSON.stringify(data));
  this.push(data);
};

module.exports = ReadStream;