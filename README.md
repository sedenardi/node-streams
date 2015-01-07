# node-streams
Read, write and transform stream examples for node.

### Streams

#### lib/readStream.js
Readable stream of objects. Source data is found in the `data-sources` folder (created by `create-source.js`).

#### lib/writeStream.js
Writable stream that outputs incoming objects to the console.

#### lib/transformStream.js
Transform stream that changes an object's `name` field and adds a random integer to a new `newValue` field.

### Examples

#### read.js
Demonstrates aforementioned `ReadStream` in [flowing and non-flowing modes](http://nodejs.org/api/stream.html#stream_class_stream_readable).

#### write.js
Pipes `ReadStream` to `WriteStream`.

#### transform.js
Pipes `ReadStream` into `TransformStream` and then into `WriteStream`.