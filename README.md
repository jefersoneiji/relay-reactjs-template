<h1 align="center">
  Relay ReactJS Template
</h1>

<p align="center">
    This template is meant to be used in front-end development. 
</p>

## Prerequisites

- [x] [Watchmen](https://facebook.github.io/watchman/docs/install)
- [x] [Docker](https://docs.docker.com/get-docker/)
- [x] [NodeJS](https://nodejs.org/en/download/current)
- [x] [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [x] A GraphQL [end-point](./src/relay/relay-environment.ts) for relay

## Installation

1. Clone this repository
```cmd
git clone git@github.com:jefersoneiji/relay-reactjs-template.git
```
2. Install dependencies 
```cmd
yarn install 
```
3. To run relay execute 
```cmd
yarn relay
```
4. To run react execute 
```cmd
yarn start
```

## Docker

1. To build the image type
```cmd
docker build -t relay-reactjs-template .
```
2. Create and run containers from image
```cmd
docker run -dp 127.0.0.1:3000:3000 relay-reactjs-template
```