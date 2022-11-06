import { defineConfig } from 'cypress';

const configuration = {
  experimentalSessionAndOrigin: true,
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
};

async function setupNodeEvents(on, config) {
  // implement node event listeners here

  on('task', {
    logToTerminal(message) {
      console.log(`@@@ ${message}`);
      return null;
    },
  });

  return config;
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    ...configuration,
  },
});
