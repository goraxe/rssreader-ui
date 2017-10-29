// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-coveralls'),
      require('karma-coverage'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      captureConsole: false
    },
    junitReporter: {
      outputDir: 'reports/junit/',
      outputFile: 'TESTS-xunit.xml',
      useBrowserName: false,
      suite: '' // Will become the package name attribute in xml testsuite element
    },
    coverageReporter: {
        dir: "reports",
        reporters: [
          { type: 'html', subdir: 'html' },
          { type: 'lcov', dir: 'coverage' },
          { type: 'text-summary' }
        ]
    },
    preprocessors: {
              'src/**/*.js': ['coverage']
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: [ 'progress', 'coverage', 'coveralls' ],
    port: 9876,
    // colors: true,
    // Level of logging, can be: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['chrome_no_sandbox'],
    customLaunchers: {
        chrome_no_sandbox: {
            base: 'ChromeHeadless',
            flags: ['--headless --no-sandbox']
        },
    },
    singleRun: true
  });
};
