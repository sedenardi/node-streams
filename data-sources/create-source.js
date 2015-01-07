var fs = require('fs');

var createSourceData = function(numObjects) {
  var data = [];
  for (var i = 0; i < numObjects; i++) {
    var obj = {
      id: i,
      name: 'object ' + i,
      value: Math.floor(Math.random() * numObjects)
    };
    data.push(obj);
  }
  return data;
};

var d = createSourceData(5);
var strData = JSON.stringify(d);
fs.writeFile('sourceData.json',strData);