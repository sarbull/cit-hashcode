var fs = require('fs');
var dataCenterFactory = require('./src/dataCenter');
var videoFactory = require('./src/video');
// var endpointFactory = require('./src/endpoint');

function main(data) {
  var dataCenter = dataCenterFactory('data center 1');
  var video = videoFactory();
  // var endpoint = endpointFactory();

  var firstLine = data.split('\n')[0].split(' '); // array of first line strings
  var secondLine = data.split('\n')[1].split(' '); // array of second line strings

  for(var i = 0; i < firstLine[0]; i++){
    dataCenter.addVideo(video.create(i, secondLine[i]));
  }

  console.log(dataCenter.videos);
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