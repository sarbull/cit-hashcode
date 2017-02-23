'use strict'

const fs = require('fs-extra'),
    util = require('util'),
    stream = require('stream'),
    es = require('event-stream'),
    parse = require("csv-parse"),
    iconv = require('iconv-lite'),
    _ = require('lodash');

class InputReader {
  constructor(filePath, onEndCallback) {
    this.reader = fs.createReadStream(filePath).pipe(iconv.decodeStream('utf8'));
    this.parseOptions = {delimiter: '\n'};
    this.lineNumber = 0;
    this.onEndCallback = onEndCallback;
  }

  read(callback) {
    this.reader
      .pipe(es.split())
      .pipe(es.mapSync(line => {

        parse(line, this.parseOptions, (err, [[line]]) => {
          callback(line.split(' '), this.lineNumber);
        });

      })
      .on('error', (error) => {
          console.log('Error while reading file.', error);
      })
      .on('end', this.onEndCallback));
  }

  continue () {
    this.lineNumber++;
    this.reader.resume();
  }
}

module.exports = InputReader;