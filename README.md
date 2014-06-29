redirector-service
============

Redirect every ```http://www.<url>``` to ```http://<url>```.

```
IN="mainiak/redirector-service"
CN="redirector_service"
docker pull $IN
docker run --name="$CN" -p 9000:8000 -d $IN
# http://<docker_ip>:9000/
docker stop $CN
```

See https://registry.hub.docker.com/u/mainiak/redirector-service/
