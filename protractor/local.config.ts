
import { Config, browser } from 'protractor';
import { awesomeReporter } from './helpers/awesome-report';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000 ,

  SELENIUM_PROMISE_MANAGER : false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    awesomeReporter();
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000 ,
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=800,600'],
        prefs: { credentials_enable_service: false }
      }
    }
  }
};
