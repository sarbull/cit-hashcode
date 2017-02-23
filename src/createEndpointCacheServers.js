function createEndpointCacheServers(endpointIndex, cacheServerIndex, cacheServerLatency) {
  return {
    endpointIndex: endpointIndex,
    cacheServerIndex: cacheServerIndex,
    cacheServerLatency: cacheServerLatency
  };
}

module.exports = createEndpointCacheServers;