const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

module.exports = defineConfig({
  watchForFileChanges: false,
  projectId: '5o374q',
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      installLogsPrinter(on, {
        printLogsToConsole: 'always',
      });
      return config;
    },
    baseUrl: 'https://buger-eats-qa.vercel.app',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },

  reporter: 'cypress-multi-reporters',

  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  compilerOptions: {
    allowJs: true,

    baseUrl: './',

    types: ['@shelex/cypress-allure-plugin'],

    noEmit: true,
  },
});
