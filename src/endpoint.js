function Endpoint() {
  var self = this;

  self.create = function(index) {
    return {
      index: index,
      latencyDataCenter: 2
    };
  };

  return self;
}

module.exports = Endpoint;