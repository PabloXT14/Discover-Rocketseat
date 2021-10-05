const audio = document.querySelector('#audio')
const timer = document.querySelector('.time')
const playBtn = document.querySelector('.play')

//Funções de controle do audio
window.onload = ()=> {
    timer.innerHTML = timeFormat(audio.duration);//converte a duration do audio/video em formato de timer
}



function play(elem) {
    if(audio.paused) {
        audio.play();
        elem.classList.toggle("show")
    } else {
        audio.pause();
        elem.classList.toggle("show")
    }
}

function stop() {
    audio.pause();
    playBtn.classList.remove("show")
    audio.currentTime = 0; // tempo atual do video
    audio.playbackRate = 1; //taxa de velocidade do audio/video
}

function retroceder() {
    audio.currentTime -= 10;
}

function avancar() {
    audio.currentTime += 10;
}

function aumentar_vel() {
    audio.playbackRate += 0.1;//aumenta em 10% a velocidade do video
}

function diminuir_vel() {
    audio.playbackRate -= 0.1;//diminuir em 10% a velocidade do video
}

function mutar(elem) {
    if(audio.muted) {
        audio.muted = false
        elem.classList.toggle("show")
    } else {
        audio.muted = true;
        elem.classList.toggle("show")
    }
}


/*
 Veja mais propriedades de video/audio em: 
    https://www.w3schools.com/tags/ref_av_dom.asp
*/