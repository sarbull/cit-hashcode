'use strict'

const fs = require('fs-extra');
const _ = require('lodash');
const InputReader = require('./src/input-reader');

const reader = new InputReader('./input/example.in');
reader.read(parseReaderData);

function parseReaderData(data, line) {

  if (line === 0) {
      console.log('------------------ COLUMNS! ------------------ ');
      const columns = _.zipObject(['Videos', 'Endpoints', 'Requests', 'CacheServers', 'CacheServerSize'], data);
      console.log(columns);
  }

  if (line === 1) {
      console.log('------------------ VIDEOS! ------------------ ');
      const videos = data;
      console.log(videos);
  }

  if (line > 1 && data.length === 2) {
      console.log('------------------ ENDPOINT!! ------------------ ');
      const endpoint = _.zipObject(['latencyDataServer', 'connectedCacheServers'], data);
      console.log(endpoint);
  }

  if (line > 1 && data.length === 2) {
      console.log('------------------ ENDPOINT!! ------------------ ');
      const endpoint = _.zipObject(['latencyDataServer', 'connectedCacheServers'], data);
      console.log(endpoint);
  }

   if (line > 1 && data.length === 3) {
      console.log('------------------ REQUESTS!! ------------------ ');
      const requests = _.zipObject(['videoIndex', 'endpointIndex', 'noOfRequests'], data);
      console.log(requests);
  }

  //etc...

  reader.continue();
}
