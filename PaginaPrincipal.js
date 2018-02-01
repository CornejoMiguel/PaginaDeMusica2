var escogido = document.getElementById("item1");

escogido.addEventListener("click",function(){
    var video = document.getElementById("cambiaVideo");
    video.src = 'VideosMusicales/fender.mp4';
    video.load();
    video.play();
})