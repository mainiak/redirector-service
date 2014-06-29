#!/bin/sh
set -ex
URL='http://nodejs.org/dist/v0.10.29/node-v0.10.29-linux-x64.tar.gz'
F=$(basename $URL)

if [ ! -f $F ]; then
	wget $URL
fi

DIR=$(echo $F | sed 's|\.tar\.gz||')
if [ ! -d node-bin ]; then
	tar xf $F
	mv $DIR node-bin
fi

#OPT="--no-cache"
docker build $OPT -t mainiak/redirector-service .
