const video = document.getElementById("youtube-video");
const placeholder = document.getElementById("yt-placeholder");

if (!navigator.onLine) {
  video.classList.toggle("hidden");
  placeholder.classList.toggle("hidden");
  placeholder.classList.toggle("flex");
}
