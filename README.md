# node-streams
Read, write and transform stream examples for node.

#### lib/readStream.js
Readable stream of objects. Source data is found in the `data-sources` folder (created by `create-source`).

#### lib/writeStream.js
Writable stream that outputs incoming objects to the console.

#### lib/transformStream.js
Transform stream that changes an object's `name` field and adds a random integer to a new `newValue` field.