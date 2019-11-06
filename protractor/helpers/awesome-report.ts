const { AwesomeReport } = require('jasmine-awesome-report');

const config = {
  fullPath: 'reports',
  fileName: 'awesome',
  merge: true
};

export let awesomeReporter = () => {
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};
