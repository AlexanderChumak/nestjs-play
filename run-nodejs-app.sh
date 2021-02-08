#!/bin/sh

docker network create nodejs_test

docker rm -f nestjs
docker run --rm --name=nestjs -p 49161:3000 -d --net=nodejs_test --network-alias=nodejs achumak/nestjs