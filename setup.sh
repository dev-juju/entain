#! /bin/bash

# -------------------------------------------------------------------------------------------------------------------------
#                                                  SETUP SCRIPT
# -------------------------------------------------------------------------------------------------------------------------
#
#  Setup environment with necessary configs to run all modules. This script does the following
#
#?   1) Creates required environment files for each module.
#       All existing files are deleted and new files are created with default values. Defaults for sensitive fields
#       are blank/empty and must be manually filled. In future we might be able to populate these from a keystore.
#?   2) Installs packages needed to run each module.
#       installs dependencies outside docker to improve container initialization speeds
#       (See https://bitbucket.org/entainsoftware/entain-next/src/master/ for more details)
#
#  Author: Adombang Munang Mbomndih <bomdi@bomdisoft.com>
# --------------------------------------------------------------------------------------------------------------------------

# VARIABLES
API_EXAMPLE_ENV_FILE="api/.env.example"
WEB_EXAMPLE_ENV_FILE="web/.env.example"

# --------------------------------------------------------------------------------------------------------------------------

# START
echo "### STARTING SETUP ###"

# CLEANUP
echo "Cleaning directories..."
rm -rf "api/node_modules"
rm -rf "web/node_modules"
rm -rf "web/.next"

# CREATE ENV FILES
echo "Creating env files..."
cp $API_EXAMPLE_ENV_FILE "api/.env.development"
cp $WEB_EXAMPLE_ENV_FILE "web/.env.development"

# SETUP PACKAGE MANAGERS
echo "Setting up package managers..."
corepack enable
corepack prepare pnpm@9.15.2 --activate

# INSTALL PACKAGES
echo "Installing packages..."
pnpm add -g @nestjs/cli
cd "api" && pnpm i
cd "../web" && pnpm i

# DONE
echo "### SETUP COMPLETED SUCCESSFULLY 🚀 ###"
