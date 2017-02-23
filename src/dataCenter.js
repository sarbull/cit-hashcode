function DataCenter(name) {
  var self = this;
  self.name = name;

  self.videos = [];

  self.addVideo = function(video) {
    self.videos.push(video);
  };

  return self;
}

module.exports = DataCenter;