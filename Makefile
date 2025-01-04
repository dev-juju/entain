# GENERAL:
# These are commands which apply to all modules (API, Web)
setup: # Setup environment with necessary configs to run all modules
	./setup.sh

# API:
# These are commands specific to the API module
api_install: # install packages
	cd api && pnpm install

# WEB:
# These are commands specific to the Web module
web_install: # install packages
	cd web && pnpm install
