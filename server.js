var url = require('url');
var hapi = require('hapi');
var server = new hapi.Server('0.0.0.0', Number(process.env.PORT || process.argv[2] || 8000));

server.route({
	path: '/',
	method: 'GET',
	handler: function(request, reply) {
		var
			uri,
			regex = /^www\./,
			host = request.info.host;

		uri = {
			protocol: 'http',
			host: host,
			pathname: request.path
		}

		if (host.match(regex)) {
			uri.host = host.replace(regex, '');
			console.log(request.headers);
			reply.redirect(url.format(uri)).code(301);
		} else {
			reply('This is not what you are probably looking for.');
		}
	}
});

server.start(function() {
	console.log("Hapi server started @", server.info.uri);
});
