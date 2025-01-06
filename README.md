# [Entain](https://www.entaingroup.com/)

This codebase is split into 2 main modules - [API](https://github.com/dev-juju/entain/tree/main/api) and [Web](https://github.com/dev-juju/entain/tree/main/web)

Each module can be developed and deployed in isolation, but both share the same repository.
This isn't exactly a [Monorepo](https://webo.digital/blog/monorepo-vs-polyrepo-architecture/) in the pure sense but it's a step in that direction.

**NB:** In this document you will find repository-level information. Each module contains its own `README.md` file with more detailed information specific to that module.


## Environments
Each module is configured to run in 3 modes/environments (development, test, production).
The operations and logic on all environments is the same but configs, hosts, tokens/secrets, RAM allocations and other environment specific parameters can be different.
Environment specific parameters for each module are specified in the respective `.env` files in the module's root directory.

  - `development` environment is generally the developer's local machine. It is less optimized for performance and more optimized for productivity (logging, hot module reload, etc)
  - `production` is the live version to be deployed to the production server(s). It is most optimized for performance and security. In a real app, this would be connected to live database(s) and other live services. In this case however, the same development tokens can/will be used.
  - `test` is the test version to be deployed to a test server(s). The idea is to keep this as close to production as possible (similar performance configurations) but with test data. This is mainly to serve as a target for automated tests including performance, load/stress, penetration tests etc. Ideally a CI/CD pipeline is configured to only deploy to production after all tests pass on the test environment.

All versions of all modules can be started in isolated docker containers on same server or local machine concurrently - just make sure the ports are different.

**NB:**

  - All `.env.*` files (except `.env.example`) are not version controlled for obvious security reasons. This should be created locally when you create a branch from (or clone) this repository. See the [Setup](#setup) section for details.
  - The `.env.example` file is version controlled and includes all required keys to include in `.env` files. The values in .en.example are enough to run a local development environment. The values for test and production should ideally be configured as CI/CD pipeline secrets or shared through a keystore like [Vault](https://www.vaultproject.io/) or [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)


## Setup
To run all modules locally you need to have either [Node](https://nodejs.org/) or [Docker](https://www.docker.com/) installed.

Run the following command to setup your local environment.

```shell
make setup
```

This calls the `setup.sh` script which does the following

  - Creates required environment files for each module
  - Installs packages needed to run each module

After successful setup, you should have the following environment files

  - `api/.env`
  - `web/.env`

## Run
If you cannot use [Docker](https://www.docker.com/), go to each module's readme to see alternative ways to run/start the module.

**NB:** make sure you have nothing running on the following ports.

  - `3002` - used by API
  - `3003` - used by Web

These ports can be changed in the `.env` files for each module. Look for entries ending in `_EXPOSED_PORT`. For example, in the `api/.env` file you can find this entry `API_EXPOSED_PORT=3002` - this means the API app runs on port 3002 and so this port should be free on your local machine before starting the containers. To use a different port, simply change the value of the `_EXPOSED_PORT` entry.

```shell
# Start all modules within a single Docker container.
# This allows modules to more easily share Docker networks and other resources.
make up

# Stop the combined container (all modules)
make down
```

### Tips
  - The `make` commands start all containers in detached mode. If you prefer interactive mode you can run raw compose commands instead
  - To run/start only one or some modules instead of all at once, navigate to the module's directory and run docker compose or follow the module's readme.md for instructions
  - Wait a couple of seconds (you will need to wait more than a couple of seconds for the initial run on your local environment) for all containers to initialize before trying to use services. You can use [Docker Desktop](https://www.docker.com/products/docker-desktop/) to easily monitor state of containers.
  - The `Web` module doesn't start until the `API` module is running. This is to ensure that the API is ready to accept requests before the Web module tries to connect to it.

### Access Points
Once all modules are up and running, you can access them locally via following endpoints

  - [http://localhost:3002/rest](http://localhost:3002/rest) - **API REST** - This opens a `Swagger UI` on browser. A postman collection is also included in the repository for more flexible testing.
  - [http://localhost:3003](http://localhost:3003) - **Web App**

You can access the live apps via following endpoints

  - [API](http://entain-api-alb-766487181.us-east-2.elb.amazonaws.com) - `Swagger UI` is NOT available. You can use Postman to fetch data from the API.
  - [http://localhost:3003](http://localhost:3003) - **Web App**

## Notes
See the `README.md` file of respective modules for module-specific information

### Makefile
The `Makefile` at the root of the repository contains a number of useful commands for managing the repository. Each module also contains addition module-specific commands in the script section of their `package.json` file.

### Husky
[Husky](https://typicode.github.io/husky/#/) uses git hooks to add a layer of checks that prevent bad commits and unwanted pushes to code repository.
This repo has been configured to run a pre-commit check and a pre-push check.
  - The pre-commit check runs lint and docs generation. If the checks fails, your commit also fails
  - The pre-push check runs unit tests. If the tests fail, your push also fails.

### Wait-for.sh
The `wait-for.sh` script is a simple utility script that is used to tell a docker container to wait for another container to be ready before starting. This is useful when you have a chain of containers that need to start in a specific order. `Disclaimer:` I did not write this script - it is publicly available on the internet.

### Folders structure
The repository contains the following root-level directories

  - `.husky` contains all [Husky](#Husky) config and git hooks.
  - `.vscode` contains shared [VSCode](https://code.visualstudio.com/) configuration for developers using this editor. This includes lint and format rules, spellcheck, and other settings that can improve productivity and developer satisfaction.
  - `api` contains the `API` module.
  - `web` contains the `Web` module.
