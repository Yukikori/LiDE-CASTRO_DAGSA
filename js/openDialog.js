var openButton = document.getElementById("open");
var dialog = document.getElementById("dialog");
var closeButton = document.getElementById("close");
var overlay = document.getElementById("overlay");
var bodyDoc = document.body;

// show the overlay and the dialog
openButton.addEventListener("click", function () {
  dialog.classList.toggle("invisible");
  overlay.classList.toggle("invisible");
  bodyDoc.style.top = `-${window.scrollY}px`;
  bodyDoc.classList.toggle("absolute");
  bodyDoc.classList.toggle("fixed");
  bodyDoc.classList.toggle("overflow-hidden");
});

// hide the overlay and the dialog
closeButton.addEventListener("click", function () {
  dialog.classList.toggle("invisible");
  overlay.classList.toggle("invisible");
  bodyDoc.classList.toggle("fixed");
  bodyDoc.classList.toggle("absolute");
  bodyDoc.classList.toggle("overflow-hidden");

  const scrollY = bodyDoc.style.top;
  bodyDoc.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
});
