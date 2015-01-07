var Transform = require('stream').Transform,
    util = require('util');

var TransformStream = function() {
  Transform.call(this, {objectMode: true});
};

util.inherits(TransformStream, Transform);

Transform.prototype._transform = function(chunk, encoding, callback) {
  console.log('transform before : ' + JSON.stringify(chunk));

  chunk.name = 'transformed object ' + chunk.id;
  chunk.newValue = Math.floor(Math.random()*100);

  console.log('transform after  : ' + JSON.stringify(chunk));
  this.push(chunk);
  callback();
};

module.exports = TransformStream;