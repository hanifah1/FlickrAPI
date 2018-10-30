//Load flickr gallery
var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f45b96e80316446649d82d3d211ce5a8&gallery_id=66911286-72157692049980335&per_page=10&format=json&nojsoncallback=1', true);

httpRequest.onload = function() {
	//check status of API request
	if (httpRequest.status >= 200 && httpRequest.status < 400) {

		//loads/stores retrieved data from API
		var resp = JSON.parse(httpRequest.responseText);

		var output = '';

		//loop through JSON data
		for(var i in resp.photos.photo){	

			//assigned variables to data pulled from arrays
			var farm = resp.photos.photo[i].farm;
			var server = resp.photos.photo[i].server;
			var id = resp.photos.photo[i].id;
			var secret = resp.photos.photo[i].secret;

			//Output formatting: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
			output += '<img src="https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg"/>'
		}

		//update html file
		document.getElementById('display').innerHTML = output;
	} 
};

httpRequest.send();


