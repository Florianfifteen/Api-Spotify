const qs = require("querystring");
const http = require("https");

const options = {
	"method": "POST",
	"hostname": "https://api-spotifyplaylists.000webhostapp.com/",
	"port": null,
	"path": "/updatePlaylist",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"api-key": "f2fc5816c1mshc62a479d6d00627p191eefjsnf8484db25ac1",
		"host": "https://api-spotifyplaylists.000webhostapp.com/",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(qs.stringify({accessToken: '<REQUIRED>', playlistId: '<REQUIRED>', userId: '<REQUIRED>'}));
req.end();