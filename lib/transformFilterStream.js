var Transform = require('stream').Transform,
    util = require('util');

var TransformFilterStream = function() {
  Transform.call(this, {objectMode: true});
};

util.inherits(TransformFilterStream, Transform);

TransformFilterStream.prototype._transform = function(chunk, encoding, callback) {
  if (chunk.value !== 0) this.push(chunk);
  callback();
};

module.exports = TransformFilterStream;