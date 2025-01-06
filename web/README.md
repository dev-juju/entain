# [Entain - Web](https://github.com/dev-juju/entain/tree/main/web)

Sports betting and gaming platform

## Development
### Run
The app can be started either directly with Node or in a Docker container.
Make sure you have created the necessary environment files before proceeding.
See the repository-level [README.md](https://github.com/dev-juju/entain/blob/main/README.md) file for setup details

#### Using Node
```shell
# install dependencies
pnpm i

# run app in dev mode with HMR
pnpm dev
```

#### Using Docker
```shell
# NB: initial run might take some time to pull required docker images
docker compose up
```

### Test
#### Unit tests
```shell
# run unit tests
pnpm test:unit
```


## Deployment
We can build and deploy the service as a Docker image

```shell
# build image
docker build -t <image_name_and_tag> .

# push image to registry (docker hub)
docker push <image_name_and_tag>

# NB: replace <image_name_and_tag> with actual name and tag. For example, to build and deploy to my docker hub registry, this would be bomdi2/entain_web:latest
```


## Documentation
Code documentation is generated with [TypeDoc](https://typedoc.org/).
See [here](https://typedoc.org/example/modules.html) for examples and conventions.

Generated docs are stored in the `docs` directory at the root.
In this directory is included an `index.html` file - open this file in a browser to access the generated documentation locally.
The generated docs are static assets that can be hosted on any platform for remote access.
Ideally a CD pipeline should include a document generation step that builds and deploys these assets, and potentially fails the deployment if there are documentation errors.

```shell
# generate/update docs
pnpm gen:docs
```


## Tools
### NEXT.js
[Next.js](https://nextjs.org/) is a stable, feature-rich React framework for the web. It has great developer community and is always pushing the boundaries in build times, deployments, performance (with powerful Rust-based JavaScript tooling) etc.
It is currently unmatched in the frontend when it comes to developer experience - see this [Jamstack survey](https://jamstack.org/survey/2022/#frameworks-by-usage-and-satisfaction).
See [this page](https://nextjs.org/) for more on what Next.js has to offer.

Next.js is build on React. What this means is that every React developer can work seamlessly in a Next.js codebase - it's not new/unfamiliar syntax, it's just additional and almost silent features that improve productivity, satisfaction and quality.
That said, here are a few things to keep in mind

#### Routing
Next.js uses file-based routing. There is no need for a third-party library to handle routing.
Visit [this page](https://nextjs.org/docs/app/getting-started/layouts-and-pages) to learn more.

#### Styling
Next.js supports different ways of styling, including `Global CSS`, `CSS Modules`, `Tailwind CSS`, `Sass`, `CSS-in-JS`.
Other styling options like `Material UI` can also be easily configured and we can combine multiple styling options without need for special webpack configuration.
`Global CSS`, `CSS Modules`, and `CSS-in-JS` work out of the box, and this codebase has been configured to also support `Material UI`.
Visit [this page](https://nextjs.org/docs/app/building-your-application/styling) to learn more.

#### Configuration
Netxjs configurations live in a `next.config.js` file at the project root.
Here you can configure headers, redirects/rewrites, internationalization, security, linting, etc.
Visit [this page](https://nextjs.org/docs/app/api-reference/config) to learn more.

#### Development & Build
See the [development](#Development) and [build](#Build) sections above

### Storybook
[Storybook](https://storybook.js.org/) is a frontend workshop for testing and building UI components and pages in isolation.
With Storybook developers can work closely with product and UI/UX teams to make better UI decisions. Storybook also enforces component isolation, which generally makes them more testable.
See this [article](https://storybook.js.org/docs/react/why-storybook) for more information on the problems Storybook aims to solve, how they propose to do it, and the benefits of doing so.
**NB** Storybook assets can be built and hosted separately as a static site.

```shell
# launch storybook
pnpm storybook

# generate static assets for hosting
pnpm build:storybook
```

### Cypress
[Cypress](https://www.cypress.io/) is an open-source frontend testing tool for web applications, that excels at both component and end-to-end testing. It is easy to configure and use, feature-rich and has a solid community.
With Cypress we allow developers to take responsibility of testing the components they create/modify while allowing QAs to focus on the bigger picture (regression, stress/load, end-to-end, integrations etc).
This significantly improves test coverage over time and guarantees an overall more stable application. See the [Test]{#Test} section above for more information.

### XState
[XState](https://stately.ai/docs/xstate-introduction) is a state management library for React that allows to manage state in a declarative way.
It is a powerful tool that allows to create complex `state machines` and to test them in isolation. While it might be overkill for simple state management, I find the safety and structure it provides to be invaluable. The state diagrams are also a great way to visualize the state transitions throughout the application lifecycle.
See [this page](https://stately.ai/docs/xstate-introduction) for more information on XState.

### MUI
Every company needs a component library. Generally, we can either build this from scratch (which can be quite tedious and challenging) or use a third-party library as a starting point.
[Material UI](https://mui.com/) is a good starting point. It allows to create complex designs quicker and build UI components that conform to Google's [material design](https://www.youtube.com/watch?v=rrT6v5sOwJg).
[This video](https://www.youtube.com/watch?v=CQuTF-bkOgc) does a good job of explaining different styling options/tools and where material design sits in the big picture.
**NB**: I would say MUI's latest version has placed it at the center of [Theo's diagram](https://www.youtube.com/watch?v=CQuTF-bkOgc)

## Notes
### Folders structure
We want to have isolated, loosely-coupled, re-useable and testable components that can be moved around and/or replaced without any (or minimal) side-effects.
We also want a codebase with high discoverability.
Some of the structures and recommendations below are based on this goal.

  - `.next` contains the [Next.js](#NEXT.js) build artifacts. This directory is not version controlled, and should not be manually created or modified. It is generated during dev and build. The directory is hidden by default in VSCode.
  - `.storybook` contains the [Storybook](#Storybook) configurations. **Actual stories should not be written in this directory, but should be co-located with the corresponding component.**
  - `.vscode` contains shared [VSCode](https://code.visualstudio.com/) configuration for developers using this editor. This includes lint and format rules, spellcheck, and other settings that can boost productivity. I'd generally recommend VSCode especially for frontend development.
  - `cypress` contains [Cypress](#Cypress) configurations and test artifacts (screenshots, downloads, etc).
    **NB**: All tests should generally be co-located with the component under test. This should be a hard rule for component tests, but exceptions can be made for end to end tests if multiple components are tested at same time (e.g when testing a page). In such exceptions scripts should either be placed in the first common parent directory or in the `e2e` subdirectory in the `cypress` root directory.
  - `docs` contains the Typedoc generated [documentation](#Documentation). This directory should not be manually created or modified.
  - `node_modules` contains all third-party NPM packages. This directory is not version controlled and should not be manually created or modified.
  - `public` contains all static assets (images, fonts, PWA manifest, static styles/scripts etc) that should be made available to the browser. This is the place where Next.js looks for static assets when requested by a client.
  - `src` contains all source code in the following sub-directories
    - `@types` contains all global types. **Types that are only used by one component should generally not be placed here, but should be defined in the component**. All types should be exported to make them available to [TypeDoc](#Documentation).
    - `app` contains all routes (pages). See [NEXT.js](#NEXT.js) section for more on page routing.
    - `components` contains all re-usable components.
    - `database` contains all data fetching related code. The methods here should ideally only be used by state machines. Components should be as dumb as possible and rely strictly on the state machines for data.
    - `theme` contains theming configurations, variants, theme provider, UI theme picker etc. Themes are defined using [Material UI](#MUI).
    - `translations` contains translation configurations, supported languages, UI language picker etc. **Actual translation files should be co-located with the corresponding component.**
    - `util` contains shared utility functions, hooks and global constants. Functions and hooks are defined in separate files (when possible) and as close to the consuming component(s) as possible. Only those that a truly global (or do not belong to any specific component/page) are placed here.
