let scrollButton = document.getElementById("scrollButton");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollButton.style.opacity = "1";
	} else {
		scrollButton.style.opacity = "0";
	}
}

scrollButton.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
