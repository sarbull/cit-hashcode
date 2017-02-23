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

function calculate() {



  console.log('Done.');
}


calculate();