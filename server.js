var url = require('url');
var hapi = require('hapi');
var server = new hapi.Server('0.0.0.0', Number(process.env.PORT || process.argv[2] || 8000));

server.route({
	path: '/{p*}',
	method: 'GET',
	handler: function(request, reply) {
		var
			uri,
			link,
			regex = /^www\./,
			host = request.info.host;

		uri = {
			protocol: 'http',
			host: host,
			pathname: request.path
		}

		if (host.match(regex)) {
			uri.host = host.replace(regex, '');
			link = url.format(uri);
			console.log(link, request.headers);
			reply.redirect(link).code(301);
		} else {
			reply('This is not what you are probably looking for.');
		}
	}
});

server.start(function() {
	console.log("Hapi server started @", server.info.uri);
});
