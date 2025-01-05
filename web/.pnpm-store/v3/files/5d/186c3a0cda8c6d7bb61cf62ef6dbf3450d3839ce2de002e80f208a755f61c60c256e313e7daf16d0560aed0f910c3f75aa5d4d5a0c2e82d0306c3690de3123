import './chunk-BYXBJQAS.js';
import { __toESM, require_picocolors } from './chunk-3VVDG2YT.js';
import { dedent } from 'ts-dedent';

var import_picocolors=__toESM(require_picocolors(),1);var blocker={id:"storyStoreV7removal",async check({mainConfig}){let features=mainConfig?.features;return features===void 0?!1:!!Object.hasOwn(features,"storyStoreV7")},log(){return dedent`
      StoryStoreV7 feature must be removed from your Storybook configuration.
      This feature was removed in Storybook 8.0.0.
      Please see the migration guide for more information:
      ${import_picocolors.default.yellow("https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#storystorev6-and-storiesof-is-deprecated")}
      
      In your Storybook configuration we found storyStoreV7 feature defined. For instance:

      export default = {
          features: {
              ${import_picocolors.default.cyan("storyStoreV7: false")}, <--- ${import_picocolors.default.bold("remove this line")}
          },
      };

      You need to remove the storyStoreV7 property.
    `}};

export { blocker };
