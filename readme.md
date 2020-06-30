# [flexum.io](https://flexum.io) website sources

## Prerequisites

You need to have [nodejs](https://nodejs.org/) and [yarn](https://yarnpkg.com/) installed.

## Build

First install the dependencies:

```shell
$ yarn
```

Than make a build:

```shell
$ yarn build
```

Now the `/dist` folder will contain the built version of a website.

## Develop

Development server is not configured for this project. You need to rebuild manually.

To see the built version of a website you can use any static webserver, for example
[http-server](https://www.npmjs.com/package/http-server):

```shell
$ cd dist/
$ http-server
```
