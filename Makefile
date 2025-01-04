# GENERAL:
# These are commands which apply to all modules (API, Web)
setup: # Setup environment with necessary configs to run all modules
	./setup.sh

up: # start all modules (API, and Web) in a single parent Docker container
	docker compose up -d
down: # stop all modules started with `up` command
	docker compose down
restart: # restart all
	make down && make up

# API:
# These are commands specific to the API module
api_install: # install packages
	cd api && pnpm install
api_resource: # create a new resource
	cd api && pnpm create:resource resources/$(name)
api_controller: # create a new controller
	cd api && pnpm create:controller resources/$(name)
api_service: # create a new service
	cd api && pnpm create:service resources/$(name)

# WEB:
# These are commands specific to the Web module
web_install: # install packages
	cd web && pnpm install
