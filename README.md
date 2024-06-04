# Strapi Boilerplate

A Strapi application

## Table of Contents

- [Introduction](#introduction)
- [Get Started](#get-started)
- [Scripts](#scripts)

## Introduction

This is a boilerplate for a Strapi application. It includes a variety of configurations and scripts to facilitate development and production environments using Docker.

## Get Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>=18.0.0 <=20.x.x)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/havascxistanbul/strapi-boilerplate.git
   cd strapi-boilerplate

   ```

2. **Install dependencies:**

   ```sh
   yarn install

   ```

3. **For development:**

   ```sh
   yarn develop
   ```

4. **Commitlint permission:**

   ```sh
   chmod ug+x .husky/*
   ```

## Scripts

The following scripts are available in this project:

- `develop`: Starts the Strapi application in development mode.
- `start`: Starts the Strapi application.
- `build`: Builds the Strapi application.
- `strapi`: Runs the Strapi CLI.
- `lint`: Runs ESLint.
- `format`: Formats the code using Prettier.
- `docker-up:prod`: Builds and starts the Docker containers in production mode.
- `docker-up:dev`: Builds and starts the Docker containers in development mode.
- `docker-down:prod`: Stops the Docker containers in production mode.
- `docker-down:dev`: Stops the Docker containers in development mode.
- `prepare`: Sets up Husky for Git hooks.
