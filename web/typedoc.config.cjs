/** @type {import('typedoc').TypeDocOptions} */

module.exports = {
  name: 'Entain Web',
  navigationLinks: {
    Site: 'https://www.entaingroup.com/',
  },
  basePath: './src',
  out: 'docs/',
  entryPoints: ['src'],
  categoryOrder: [
    'Page',
    'Component',
    'Style',
    'Store',
    'Database',
    'Test',
    'Story',
    'Util',
    'Hook',
    'Type',
    'Translation',
    'Config',
    '*',
  ],
  // readme: 'none',
  entryPointStrategy: 'expand',
  includeVersion: true,
  hideGenerator: true,
  searchInComments: false,
  cleanOutputDir: true,
  excludeExternals: true,
  categorizeByGroup: false,
  navigation: {
    includeCategories: true,
    includeGroups: false,
  },
  searchCategoryBoosts: {
    Component: 1.5,
  },
  exclude: ['**/generated'],
};
