// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      // require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage/gallery'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    reporters: ['dots', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    usePolling: true,
    browsers: [
      'TouchyFirefox',
      'Chrome',
      'ChromeHeadless',
      'ChromeHeadlessLocal',
    ],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      TouchyFirefox: {
        base: 'Firefox',
        prefs: {
          'dom.w3c_touch_events.enabled': 1,
        },
      },
      ChromeHeadlessLocal: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
  });
};
