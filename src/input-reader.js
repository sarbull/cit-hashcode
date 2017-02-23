'use strict'

const fs = require('fs-extra'),
    util = require('util'),
    stream = require('stream'),
    es = require('event-stream'),
    parse = require("csv-parse"),
    iconv = require('iconv-lite');

class InputReader {
  constructor(filePath) {
    this.reader = fs.createReadStream(filePath).pipe(iconv.decodeStream('utf8'));
    this.parseOptions = {delimiter: '\n'};
    this.lineNumber = 0;
    this.data = [];
  }

  read(callback) {
    this.reader
      .pipe(es.split())
      .pipe(es.mapSync(line => {
        ++this.lineNumber;

        parse(line, this.parseOptions, (err, [[line]]) => {
          callback(line.split(' '));
        });

      })
      .on('error', (error) => {
          console.log('Error while reading file.', error);
      })
      .on('end', () => {
        console.log('Read entirefile.')
      }));
  }

  continue () {
    this.data = [];
    this.reader.resume();
  }
}

module.exports = InputReader;

// USAGE in app.js
// reader.read(parseReaderData);

// function parseReaderData(line) {
//   console.log(line);

//   reader.continue();
// }