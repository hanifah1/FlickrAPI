//Load flickr gallery
var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=66b821bf75ec005c7140b0f3358f0427&gallery_id=66911286-72157692049980335&per_page=10&format=json&nojsoncallback=1', true);

httpRequest.onload = function() {
	//check status of API request
	if (httpRequest.status >= 200 && httpRequest.status < 400) {

		//loads/stores retrieved data from API
		var resp = JSON.parse(httpRequest.responseText);
		console.log(resp);
		var output = '';

		//loop through JSON data
		for(var i in resp.photos.photo){

			//assigned variables to data pulled from arrays
			var farm = resp.photos.photo[i].farm;
			var server = resp.photos.photo[i].server;
			var id = resp.photos.photo[i].id;
			var secret = resp.photos.photo[i].secret;

			//Output formatting: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
			//height/width adjusted for thumbnails
			//creation of modal for each image in gallery where <a> tag displays thumbnail & full image is displayed in the body of the modal
			output += '<a href="#openModal"><img src="https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg"\
			 height="150" width="200"/></a>\
			<div id="openModal" class="modalDialog">\
			<div>\
			<a href="#close" title="Close" class="close">X</a>\
			<img id="displayImg" src="">\
			</div>\
			</div>'

		}//ends for loop

		//update html file
		document.getElementById('display').innerHTML = output;

		//This part needs to be converted to vanilla JS
		//add event listener to assign src attribute from thumbnail to display in modal
		$('img').on('click',function()
            {
                var imgSrc =$(this).attr('src');
                $('#displayImg').attr('src', imgSrc);
                $('#openModal').modal('show');
            });
	}
};

httpRequest.send();
