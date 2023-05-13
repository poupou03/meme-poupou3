var mediaList = [
    { type: "image", url: "Image 1.jpg" },
    { type: "image", url: "Image 2.jpg" },
	{ type: "image", url: "Image 3.jpg" },
    { type: "image", url: "Image 4.jpg" },
	{ type: "image", url: "Image 5.jpg" },
    { type: "image", url: "Image 6.jpg" },
	{ type: "image", url: "Image 7.jpg" },
    { type: "image", url: "Image 8.jpg" },
	{ type: "image", url: "Image 9.jpg" },
    { type: "image", url: "Image 10.jpg" },
    { type: "image", url: "Image 11.jpg" },
	{ type: "image", url: "Image 12.jpg" },
    { type: "image", url: "Image 13.jpg" },
	{ type: "image", url: "Image 14.jpg" },
    { type: "image", url: "Image 15.jpg" },
    { type: "video", url: "Vidéo 1.mp4" },
    { type: "video", url: "Vidéo 2.mp4" },
    { type: "video", url: "Vidéo 3.mp4" },
    { type: "video", url: "Vidéo 4.mp4" },
    { type: "video", url: "Vidéo 5.mp4" },
    { type: "video", url: "Vidéo 6.mp4" },
    { type: "video", url: "Vidéo 7.mp4" },
    { type: "video", url: "Vidéo 8.mp4" },
    { type: "video", url: "Vidéo 9.mp4" },
    { type: "video", url: "Vidéo 10.mp4" },
    { type: "video", url: "Vidéo 11.mp4" },
	{ type: "video", url: "Vidéo 12.mp4" },
    { type: "video", url: "Vidéo 13.mp4" },
    { type: "video", url: "Vidéo 14.mp4" },
    { type: "video", url: "Vidéo 15.mp4" },
    { type: "video", url: "Vidéo 16.mp4" },
    { type: "video", url: "Vidéo 17.mp4" },
    { type: "video", url: "Vidéo 18.mp4" },
    { type: "video", url: "Vidéo 19.mp4" },
    { type: "video", url: "Vidéo 20.mp4" },
    { type: "video", url: "Vidéo 21.mp4" },
	{ type: "video", url: "Vidéo 22.mp4" },
    { type: "video", url: "Vidéo 23.mp4" },
    { type: "video", url: "Vidéo 24.mp4" },
    { type: "video", url: "Vidéo 25.mp4" },
    { type: "video", url: "Vidéo 26.mp4" },
    { type: "video", url: "Vidéo 27.mp4" },
    // Images et vidéos
];

function refreshPage() {
    var randomIndex = Math.floor(Math.random() * mediaList.length);
    var randomMedia = mediaList[randomIndex];

    var mediaElement;
    if (randomMedia.type === "image") {
        mediaElement = document.createElement("img");
        mediaElement.src = randomMedia.url;
        mediaElement.alt = "Image aléatoire";
    } else if (randomMedia.type === "video") {
        mediaElement = document.createElement("video");
        mediaElement.src = randomMedia.url;
        mediaElement.autoplay = true;
        mediaElement.controls = true;
    }

    var mediaContainer = document.getElementById("randomMedia");
    mediaContainer.innerHTML = "";
    mediaContainer.appendChild(mediaElement);
}
