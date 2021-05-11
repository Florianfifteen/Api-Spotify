const qs = require("querystring");
const http = require("https");

const options = {
	"method": "POST",
	"hostname": "spotifystefan-skliarovv1.p.rapidapi.com",
	"port": null,
	"path": "/updatePlaylist",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "f2fc5816c1mshc62a479d6d00627p191eefjsnf8484db25ac1",
		"x-rapidapi-host": "Spotifystefan-skliarovV1.p.rapidapi.com",
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