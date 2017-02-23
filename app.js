var fs = require('fs');

function main(data) {
  console.log(data);
}

fs.readFile( __dirname + '/input/example.in', function (err, data) {
  if (err) {
    throw err;
  }

  main(data.toString());
});

