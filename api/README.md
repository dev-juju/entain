# [Entain - API](https://github.com/dev-juju/entain/tree/main/api)

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
pnpm start:dev
```

#### Using Docker
```shell
# NB: initial run might take some time to pull required docker images
docker compose up
```

### Test
#### Manual tests
REST endpoints can be tested either via `Postman` or `Swagger UI` served locally at http://localhost:3002/rest. Postman collections are included in the `postman` directory and can be imported into the desktop app.

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

# build image to registry
docker push <image_name_and_tag>

# NB: replace <image_name_and_tag> with actual name and tag. For example, to build and deploy to my docker hub registry, this would be bomdi2/entain_api:latest
```

## Documentation
Code documentation is generated with [TypeDoc](https://typedoc.org/).
See [here](https://typedoc.org/example/modules.html) for examples and conventions.

Generated docs are stored in the `docs` directory at the root.
In this directory is included an `index.html` file - open this file in a browser to access the generated documentation locally.
The generated docs are static assets that can be hosted on any platform for remote access.
Ideally our deployment pipeline should include a document generation step that builds and deploys these assets, and potentially fails the deployment if there are documentation errors.

```shell
# generate/update docs
pnpm gen:docs
```

## Notes
### Folders structure
We want to have isolated, loosely-coupled, re-useable and testable components that can be moved around and/or replaced without any (or minimal) side-effects.
We also want a codebase with high discoverability.
Some of the structures and recommendations below are based on this goal.

  - `dist` contains the build artifacts. This directory is not version controlled and should not be manually created or modified.
  - `docs` contains the Typedoc generated [documentation](#Documentation). This directory should not be manually created or modified.
  - `node_modules` contains all third-party NPM packages. This directory is not version controlled and should not be manually created or modified.
  - `test` contains end to end tests. Note that unit tests are co-located with code being tested - test files end in `.spec.ts`
  - `src` contains all source code. Think of every subdirectory as a resource. Each resource can contain a module, controller (for REST), resolver (for GraphQL), service, entities, data transfer objects (dto), tests etc.
    - `common` contains shared utilities, types, constants, hooks, etc.
    - `config` contains configuration files for CORS, error handling, etc.
    - `resources` contains all resources. Each resource can contain a module, controller (for REST), resolver (for GraphQL), service, entities, data transfer objects (dto), tests etc.
