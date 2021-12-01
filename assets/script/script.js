/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	document.getElementById(lightboxID).classList.remove("hidden");

}


/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
	unhideLightbox("friends");
}

document.getElementById("s1").onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox("food");
}

document.getElementById("s2").onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("views");
}

document.getElementById("s3").onclick = unhideLightbox3;





// 
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
// 
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id
	document.getElementById(lightboxID).classList.add("hidden");
}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;


/* Width of each carousel image, in pixels */
let carouselWidth = 666.66; 
let foodCarouselWidth = 375;
let viewsCarouselWidth = 666.66;

/* Part 2.1: Get the elements */
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

let prevButton2 = document.getElementById("food-button-previous");
let nextButton2 = document.getElementById("food-button-next");
let imageRow2 = document.getElementById("food-carousel-image-row");

let prevButton3 = document.getElementById("views-button-previous");
let nextButton3 = document.getElementById("views-button-next");
let imageRow3 = document.getElementById("views-carousel-image-row");

/* Part 2.2: Create variable to keep track of which image we're on */
let imageNum = 1;
let imageNum2 = 1;
let imageNum3 = 1;

/* Part 2.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
	// change imageNum
	imageNum = imageNum + 1;
	checkControls();
	// how many pixels from the left should imageRow now be?
	let offset = -(imageNum - 1) * carouselWidth;
	// change css for imageRow
	imageRow.style.left = offset + "px";
}

function showNextFoodImage() {
	imageNum2 += 1;
	checkControlsFood();
	let offset = -(imageNum2 - 1) * foodCarouselWidth;
	imageRow2.style.left = offset + "px";
}

function showNextViewsImage() {
	imageNum3 += 1;
	checkControlsViews();
	let offset = -(imageNum3 - 1) * viewsCarouselWidth;
	imageRow3.style.left = offset + "px";
}

/* Part 2.4: Change the onclick property for the next button */
nextButton.onclick = showNextImage;
nextButton2.onclick = showNextFoodImage;
nextButton3.onclick = showNextViewsImage;

/* Part 2.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	// change imageNum
	imageNum = imageNum - 1;
	checkControls();
	// how many pixels from the left should imageRow now be?
	let offset = -(imageNum - 1) * carouselWidth;
	// change css for imageRow
	imageRow.style.left = offset + "px";
}

function showPrevFoodImage() {
	imageNum2 -=1;
	checkControlsFood();
	let offset = -(imageNum2 - 1) * foodCarouselWidth;
	imageRow2.style.left = offset + "px";
}

function showPrevViewsImage() {
	imageNum3 -=1;
	checkControlsViews();
	let offset = -(imageNum3 - 1) * viewsCarouselWidth;
	imageRow3.style.left = offset + "px";
}

/* Part 2.6: Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;
prevButton2.onclick = showPrevFoodImage;
prevButton3.onclick = showPrevViewsImage;

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;
let totalFoodImages = document.getElementsByClassName("food-carousel-image").length;
let totalViewsImages = document.getElementsByClassName("views-carousel-image").length;
/* Part 2.7 */

function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == 1) {
		// What should happen if it's the first image?
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == totalImages) {
		// What should happen it's the last image?
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton.classList.remove("hidden");
	}
}

function checkControlsFood() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum2 == 1) {
		// What should happen if it's the first image?
		prevButton2.classList.add("hidden");
	}
	else if (prevButton2.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton2.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum2 == totalImages) {
		// What should happen it's the last image?
		nextButton2.classList.add("hidden");
	}
	else if (nextButton2.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton2.classList.remove("hidden");
	}
}

function checkControlsViews() {
	if (imageNum3 == 1) {
		prevButton3.classList.add("hidden");
	}
	else if (prevButton3.classList.contains("hidden")) {
		prevButton3.classList.remove("hidden");
	}

	if (imageNum3 == totalImages) {
		nextButton3.classList.add("hidden");
	}
	else if (nextButton3.classList.contains("hidden")) {
		nextButton3.classList.remove("hidden");
	}
}



function toggleTheme() {
	let body = document.querySelector("body");
	body.classList.toggle("dark-mode");
}

let button = document.querySelector("#oski");
button.onclick = toggleTheme;





;