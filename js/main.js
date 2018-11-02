//initialized array to hold HTML output of manipulated JSON data
var obJson = [];

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
			output = '<a href="#openModal"><img src="https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg"\
			 height="150" width="200"/></a>\
			<div id="openModal" class="modalDialog">\
			<div>\
			<a href="#close" title="Close" class="close">X</a>\
			<img id="displayImg" src="">\
			</div>\
			</div>'

			//not sure if this is pushing correctly, console log displays 'obJson' elements without commas
			obJson.push(output);

		}//ends for loop

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


//pagination
var current_page = 1;
var records_per_page = 10;

//links to previous page from current
function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

//links to next page from current
function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    //updates HTML based on page number
    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < obJson.length; i++) {
        listing_table.innerHTML += obJson[i] + "<br>";
    }
    page_span.innerHTML = page;

    //hides 'prev' button if currntly on first page
    if (page == 1) {
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
    }

    //hides 'next' button if currntly on last page
    if (page == numPages()) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "visible";
    }
}

//calculates the number of pages based on array length
function numPages()
{
    return Math.ceil(obJson.length / records_per_page);
}

//sets the initial page load
window.onload = function() {
    changePage(1);
};
