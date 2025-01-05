import path from 'path';
//#endregion

/**-------------------------------------------------------------------------------------------------------------------------
 *                                                 CONFIG
 *--------------------------------------------------------------------------------------------------------------------------
 *
 * Configurations for Storybook
*/

export default {
  stories: [
    './stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-color-picker',
    '@chromatic-com/storybook'
  ],

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  features: {
    emotionAlias: false,
  },

  webpackFinal: (config: any) => {
    // Resolve absolute imports
    config.resolve?.modules?.push(path.resolve(process.cwd()));

    return config;
  },

  docs: {}
};
