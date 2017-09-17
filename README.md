# docker-test

> Sample docker image to test various scenarios with Docker.

[![CircleCI](https://img.shields.io/circleci/project/github/stefanwalther/docker-test.svg)](https://circleci.com/gh/stefanwalther/docker-test/tree/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/stefanwalther/docker-test.svg)](https://greenkeeper.io/)
[![XO code style](https://img.shields.io/badge/code_style-XO--space-5ed9c7.svg)](https://github.com/sindresorhus/eslint-config-xo-space)

---

## Motivation

Just another "Hello World" docker image to be used in various experiments ...

## Usage

```sh
$ docker pull stefanwalther/hello-world
```

```sh
$ docker run -it stefanwalther/hello-world
```

### With docker-compose

```sh
version: '3.3`
services:
  hello-world:
    image: stefanwalther/hello-world
    ports:
      - 3004:3004
    environment:
      - PORT=3004
        
```

## Configuration

- `PORT` - Port of the web service, defaults to 3000.

## Endpoints

`/`
Just returns a "Hello World"

`/health-check`
Returns a typical health-check, useful to test health-checks in a microservice environment.

`cmd`
Execute any command on the machine and get the result.

Parameters:
- `def` - The command to execute.

Usage:
```sh
# Execute an ls -la
$ curl http://localhost:3004/cmd/?def=ls%20-la
```

Examples:
  - `ls -la` - list the directory
  - `curl -o -I -L -s -w "%{http_code}\n" http://localhost:3004/health-check` - Get the Http status code of the health-check

`cmd-cron`
Create a cron job, executing a command.

Parameters:

- `def` - The command to execute.
- `cron` - The cron definition (see [https://crontab-generator.org/](https://crontab-generator.org/))

Usage:

```sh
# Execute and "echo foo" with the following cron def: "* * * * *" (every minute)
$ curl http://localhost:3004/cmd-cron?def=echo%20foo&cron=*%20*%20*%20*%20*
```

## Experiments

### Multistage Builds

**References:**
- https://capgemini.github.io/development/multi-stage-builds-in-docker/
- https://codefresh.io/blog/node_docker_multistage/
- https://blog.alexellis.io/mutli-stage-docker-builds/
- https://github.com/yamalight/node-docker-pkg-demo

