function Video() {
  var self = this;

  self.create = function(index, size) {
    return {
      index: index,
      size: size
    };
  };

  return self;
}

module.exports = Video;