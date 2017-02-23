class Calculate {
  constructor(dataSet) {
    this.dataSet = dataSet;

    this.run();
  }

  run() {
    console.log('DataSet:');
    console.log(this.dataSet);

  }

}

module.exports = Calculate;