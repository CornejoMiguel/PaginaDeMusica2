var videocontainer = document.getElementById('videoclip');
var videosource = document.getElementById('videosource');
var newmp4 = 'VideosMusicales/fender.mp4';

var videobutton = document.getElementById("item1");
 
videobutton.addEventListener("click", function() {
    videocontainer.pause();
    videosource.setAttribute('src', newmp4);
    videocontainer.load();
});