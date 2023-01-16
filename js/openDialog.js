var openButton = document.getElementById("open");
var dialog = document.getElementById("dialog");
var closeButton = document.getElementById("close");
var overlay = document.getElementById("overlay");

// show the overlay and the dialog
openButton.addEventListener("click", function () {
  dialog.classList.remove("invisible");
  overlay.classList.remove("invisible");
});

// hide the overlay and the dialog
closeButton.addEventListener("click", function () {
  dialog.classList.add("invisible");
  overlay.classList.add("invisible");
});
