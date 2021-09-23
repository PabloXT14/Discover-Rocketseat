const video = document.querySelector(".video")

//Video Controls
function retroceder() {
    //currentTime: tempo em segundos do video
    video.currentTime -= 10
}

function avancar() {
    video.currentTime += 10
}

function diminuir_vel() {
    video.playbackRate -= 0.1;//diminui em 10% a velocidade do video
}

function aumentar_vel() {
    video.playbackRate += 0.1;//aumenta em 10% a velocidade do video
}

function play() {
    video.play();
}

function stop() {
    video.pause();
    video.currentTime = 0;
    video.playbackRate = 1;
}

/*
 Veja mais propriedades de video em: 
    https://www.w3schools.com/tags/ref_av_dom.asp
*/