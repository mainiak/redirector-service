#!/bin/sh
set -ex

if [ "x$DOCKERUSER" = "x" ]; then
	echo "Use: export DOCKERUSER='<username>'"
	exit 1
fi

#OPT="--no-cache"
docker build $OPT -t $DOCKERUSER/redirector-service .
