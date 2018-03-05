var videocontainer = document.getElementById('videoclip');
var videosource = document.getElementById('videosource');

function MostrarVideo(boton) {
    videocontainer.pause();
    videosource.setAttribute('src', "VideosMusicales/" + boton.id + ".mp4");
    videocontainer.load();
};

