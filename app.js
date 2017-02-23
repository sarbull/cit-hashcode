var fs = require('fs');
var dataCenterFactory = require('./src/dataCenter');
var createVideo = require('./src/video');
var createEndpoint = require('./src/endpoint');
var createCacheServer = require('./src/createCacheServer');

function main(data) {
  // Create data center
  var dataCenter = dataCenterFactory('data center 1');
  var endpoints = [];
  var cacheServers = [];

  var fileContents = data.split('\n');

  var firstLine = fileContents[0].split(' '); // array of first line strings
  var secondLine = fileContents[1].split(' '); // array of second line strings
  var thirdLine = fileContents[2].split(' '); // array of second line strings

  // Push videos to data center
  for(var i = 0; i < firstLine[0]; i++){
    dataCenter.addVideo(createVideo(i, secondLine[i]));
  }

  // Generate endpoints
  for(var j = 0; j < firstLine[1]; j++) {
    endpoints.push(createEndpoint(j));
  }

  // Generate Cache Server
  for(var k = 0; k < firstLine[3]; k++) {
    cacheServers.push(createCacheServer(k, firstLine[4]));
  }

  console.log('Datacenter');
  console.log(dataCenter.videos);

  console.log('Endpoints');
  console.log(endpoints);

  console.log('Cache Servers');
  console.log(cacheServers);

}





fs.readFile( __dirname + '/input/example.in', function (err, data) {
  if (err) {
    throw err;
  }

  main(data.toString());
});

/*


var dataCenter = [
  {
    index: 0,
    size: 10
  },
  {
    index: 1,
    size: 20
  },
  {
    index: 2,
    size: 15
  }
];

var cacheServers = [
  {
    index: 0,
    size: 1000
  },
  {
    index: 1,
    size: 2000
  }
];

var videoCacheServers = [
  {
    videoIndex: 0,
    cacheServerIndex: 0
  }
];

var endpoints = [
  {
    index:0,
    latencyDataCenter: 700
  },
  {
    index:1,
    latencyDataCenter: 900
  }
];

var endpointCacheServers = [
  {
    endpointIndex: 0,
    cacheServer: 1,
    cacheServerLatency: 500
  },
  {
    endpointIndex: 1,
    cacheServer: 1,
    cacheServerLatency: 1000
  }
];

var requests = [
  {
    endpointIndex: 0,
    videoIndex: 0
  }
];














function createRequests(number) {
  return {
    from
  };
}

function createVideo() {
  return {
    size: null
  }
}

function createEndpoint(id, dataCenterLatency, cacheServers) {
  return {
    id: id,
    dataCenterLatency: dataCenterLatency,
    cacheServerConnections: cacheServers
  }
}


*/