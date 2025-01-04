/** @type {import('typedoc').TypeDocOptions} */

module.exports = {
  name: 'Entain API',
  navigationLinks: {
    Site: 'https://www.entaingroup.com/',
  },
  basePath: './src',
  out: 'docs/',
  entryPoints: ['src'],
  categoryOrder: [
    'Module',
    'Service',
    'Entity',
    'Controller',
    'Provider',
    'Interface',
    'Guard',
    'DTO',
    'Decorator',
    'Pipe',
    'Type',
    'Test',
    'Stub',
    'Mock',
    'Filter',
    '*',
  ],
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
    Module: 1.5,
  },
};
