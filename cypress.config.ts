import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';

const configuration = {
  supportFile: 'cypress/support/e2e.ts',
  specPattern: 'cypress/e2e/{features/**/*.feature,spec/**/*.ts}',
  experimentalSessionAndOrigin: true,
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
};

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript'),
    }),
  );

  on('task', {
    logToTerminal(message) {
      console.log(`@@@ ${message}`);
      return null;
    },
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    ...configuration,
  },
});
