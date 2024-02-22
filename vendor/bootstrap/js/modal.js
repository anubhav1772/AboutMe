/**
// Get stats modal
var statsModal = document.getElementById("statsModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var statsImg = document.getElementById("stats");
var statsModalImg = document.getElementById("img0");
var statsCaptionText = document.getElementById("caption0");
statsImg.onclick = function(){
	statsModal.style.display = "block";
	statsModalImg.src = this.src;
	statsCaptionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
var statsClose = document.getElementById("cls0");

// When the user clicks on <span> (x), close the modal
statsClose.onclick = function() { 
	statsModal.style.display = "none";
}
**/

// Get myImg modal
var myImgModal = document.getElementById("myImgModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg1 = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
	myImgModal.style.display = "block";
	modalImg1.src = this.src;
	captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
var span = document.getElementById("cls01");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	myImgModal.style.display = "none";
}

// Get controller modal
var controllerModal = document.getElementById("controllerModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var controllerImg = document.getElementById("controller");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
controllerImg.onclick = function(){
	controllerModal.style.display = "block";
	modalImg2.src = this.src;
	captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var spanController = document.getElementById("cls02");

// When the user clicks on <span> (x), close the modal
spanController.onclick = function() { 
	controllerModal.style.display = "none";
}

// Get seg modal
var segModal = document.getElementById("segModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var segImg = document.getElementById("seg");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
segImg.onclick = function(){
	segModal.style.display = "block";
	modalImg3.src = this.src;
	captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var segSpan = document.getElementById("cls03");

// When the user clicks on <span> (x), close the modal
segSpan.onclick = function() { 
	segModal.style.display = "none";
}