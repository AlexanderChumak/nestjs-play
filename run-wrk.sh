#!/bin/sh

docker run --rm --net=nodejs_test --network-alias=nodejs williamyeh/wrk -t12 -c4000 -d60s --timeout 2s http://nodejs:3000/delay?ms=500
