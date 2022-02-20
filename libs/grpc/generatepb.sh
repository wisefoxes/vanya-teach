#!/bin/bash

protoc --go_out=plugins=grpc:. --js_out=import_style=commonjs,binary:./js authorization.proto
