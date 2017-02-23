'use strict'

const fs = require('fs-extra');
const Calculate = require('./src/calculate');
const _ = require('lodash');
const InputReader = require('./src/input-reader');

const reader = new InputReader('./input/example.in', onEndCallback);
reader.read(parseReaderData);

const inputProps = ['totalVideos', 'totalEndpoints', 'totalRequests', 'totalCacheServers', 'eachCacheServerSize'];
const videoProps = ['videoIndex', 'videoSize'];
const endpointProps = ['endpointIndex', 'dcLatency', 'cacheServersNumber'];
const cacheServerProps = ['serverIndex'];
const requestProps = ['videoIndex', 'endpointIndex', 'requestNumber'];

const dataSet = {
    stats: {},
    videos: [],
    endpoints: [],
    cacheServers: [],
    requests: []
};

const ecsFlag = {
    lastEndpointIndex: 0,
    cacheServersToParse: 0
};

function parseReaderData(data, line) {

  if (line === 0) {
      const columns = _.zipObject(inputProps, data);
      dataSet.stats = columns;
  }

  if (line === 1) {
      _.forEach(data, (videoSize, videoIndex) => {
          dataSet.videos.push(_.zipObject(videoProps, [videoIndex, videoSize]));
      });
  }

  if (line > 1 && data.length === 2) {
      if (!ecsFlag.cacheServersToParse) {
        const endpointData = _.zipObject(endpointProps, [ecsFlag.lastEndpointIndex++, ...data]);
        endpointData.associatedCacheServers = [];
        dataSet.endpoints.push(endpointData);

        ecsFlag.cacheServersToParse = endpointData.cacheServersNumber;
      }
      else {
          ecsFlag.cacheServersToParse--;

          const cacheServerData = _.zipObject(cacheServerProps, data);
          dataSet.cacheServers.push(cacheServerData);

          const cacheServerDataForEndpoint = _.zipObject([...cacheServerProps, 'csLatency'], data);
          dataSet.endpoints[dataSet.endpoints.length-1].associatedCacheServers.push(cacheServerDataForEndpoint);
      }
  }

   if (line > 1 && data.length === 3) {
      dataSet.requests.push(_.zipObject(requestProps, data));
   }

  reader.continue();
}

function onEndCallback() {
    console.log('========= INPUT STATS =========');
    console.log(dataSet.stats);

    console.log('========= INPUT VIDEOS =========');
    console.log(dataSet.videos);

    console.log('========= INPUT ENDPOINTS =========');
    console.log(dataSet.endpoints);

    console.log('========= INPUT CACHESERVERS =========');
    console.log(dataSet.cacheServers);

    console.log('========= INPUT REQUESTS =========');
    console.log(dataSet.requests);

    new Calculate(dataSet);
}
