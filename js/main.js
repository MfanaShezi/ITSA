// Back to top button
var btn = document.getElementById("back-to-top");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		btn.classList.add("show");
	} else {
		btn.classList.remove("show");
	}
}

btn.onclick = function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
