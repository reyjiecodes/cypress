import { defineConfig } from 'cypress';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

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

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  requestTimeout: 5000,
  responseTimeout: 5000,
  defaultCommandTimeout: 5000,
  video: false,
  viewportWidth: 1872,
  viewportHeight: 981,
  chromeWebSecurity: false,
  e2e: {
    specPattern: '**/*.feature',
    // supportFile: true,
    setupNodeEvents,
    baseUrl: 'https://uitest.test.medirecords.com/',
    experimentalSessionAndOrigin: true,
  },
  env: {
  },
});
