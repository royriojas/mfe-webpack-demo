# Getting Started

## Changes in this Fork:

- Dynamic loading remotes without hardcoding them in the webpack config of the main app loading the external modules

## Pre-requisites

### docker

Install docker from: https://www.docker.com/get-started

### Makecert (to create a local authority for self signed certificates)

```bash
brew install mkcert

mkcert -install

cd local-proxy/certificates

# generate certificates
mkcert '*.local.dev.com'

# verify _wildcard.local.dev.com-key.pem and _wildcard.local.dev.com.pem were created
```

### start the local proxy

```bash
# start nginx using
./proxy-start

# When you want to stop it just run
./proxy-stop
```

### Add

Add to your `/etc/hosts` file

```
127.0.0.1 app1.local.dev.com app2.local.dev.com app3.local.dev.com
```

## Install

```sh
# in the root of the project
./build
```

##

## Run it

```bash
yarn start
```

Open [https://app1.local.dev.com](https://app1.local.dev.com).

The demo is annotated so navigate through the demos and apps available.

Included apps:

- App #1: [https://app1.local.dev.com](https://app1.local.dev.com)
- App #2: [https://app2.local.dev.com](https://app2.local.dev.com)
- App #3: [https://app3.local.dev.com](https://app3.local.dev.com)
