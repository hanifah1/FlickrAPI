var obJson2 = [];

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
			obJson2.push(output);

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

console.log(obJson2);

//pagination
var current_page = 1;
var records_per_page = 10;

//array was redefined here because line 38 'obJson2.push(output);' was returning array elements as undefined on page
//these were obtained by checking obJson2 in console.log and copying each array item into the new array 'obJson' where they loaded correctly onto the page
var obJson = [
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4435/37050756926_b52b34b287.jpg"          height="150" width="200"/></a>         <div id="openModal" class="modalDialog">            <div>           <a href="#close" title="Close" class="close">X</a>	        <img id="displayImg" src="">            </div>          </div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4646/38291146105_6cbc9dc89b.jpg"			 height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4692/25496838848_0ff4cd7cce.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4300/35873272420_5867de3138.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4595/27633336539_066764c90b.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm3.staticflickr.com/2661/32779142831_69668366a2.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4732/39464543601_c72d11a9bc.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm1.staticflickr.com/564/32183576712_15d93fd9e3.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4252/34992970740_9d51495315.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4334/36858995362_1bb7efdee3.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4340/36634092250_97af60f836.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4514/26278930499_fcdd915437.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4528/26878295339_2c248b35dc.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4088/35663667616_b9f0479a09.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4431/35612873604_0103362c40.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4691/38383245595_3dd60f7b76.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm3.staticflickr.com/2893/34117690366_c7be0b8863.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4299/36087888196_3bea5b8bd2.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm1.staticflickr.com/311/31561240794_0d6a93cf05.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm4.staticflickr.com/3862/32665212204_5c3f25bcff.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4731/27737654279_37e6c91a2f.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4527/37691019455_8ab7075533.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4589/38666275334_65cb27c819.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4232/35544373660_df83e9b653.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4191/34025478470_6a5fb4abe8.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4684/38773916944_e9ab414293.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4238/35502210635_70c20af0ff.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4475/36787497004_641eebc636.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4301/35750633190_d0556e02be.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm1.staticflickr.com/696/32490508266_21ab919d8c.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4167/34126991521_689a2751c6.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4601/39514584171_22648b3361.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4342/36404874312_736ed749bd.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4691/25444778958_e995136132.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm3.staticflickr.com/2842/33365892041_fac466b84b.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm3.staticflickr.com/2413/32843759725_4d57f92c01.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4587/27186854399_0edd3669f2.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4430/36579490155_98042d2cc7.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4640/39348255212_693fc02459.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4640/39373391861_bcde0bb3f4.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4319/35799893470_0774f07f3a.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4477/37608806690_01c61dfb9d.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4546/38605501792_0546f59f28.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4291/36130445855_2705c3b216.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4510/37547883161_4596a6e28e.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4456/38191407341_ec4cdebc5c.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4417/37232349955_1dda4ee8eb.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4204/34427576933_ae9e065dd3.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4275/35281854601_bb9e30cde1.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>',
    '<a href="#openModal"><img src="https://farm5.staticflickr.com/4551/24627958378_e195cc7d51.jpg"			height="150" width="200"/></a>			<div id="openModal" class="modalDialog">			<div>			<a href="#close" title="Close" class="close">X</a>			<img id="displayImg" src="">			</div>			</div>'

];


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
        listing_table.innerHTML += obJson[i];
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
