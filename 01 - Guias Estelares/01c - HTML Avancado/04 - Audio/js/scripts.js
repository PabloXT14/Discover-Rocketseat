const audio = document.querySelector('#audio')
const barTimer = document.querySelector('.time')
const progressBarTimer = barTimer.querySelector('.currentTime')
const playBtn = document.querySelector('.play')

//Funções de controle do audio
console.log(audio)

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

// Configuração barra de tempo
function updateProgress(event) {
    // pegando duração e tempo atual do audio que estiver tocando
    const { duration, currentTime } = event.srcElement;
    // porcentagem de tempo que já foi tocado do audio
    const progressPersent = (currentTime / duration) * 100;
    // setando barra de currentTime
    progressBarTimer.style.width = `${progressPersent}%`;


    // Checando se video acabou
    if(audio.currentTime == audio.duration) {
        document.querySelector('.play').classList.toggle('show');
    }

}

//poder avançar na musica ao clicar na barra de tempo
function setProgress(event) {
    const width = this.clientWidth;//pegando largura da barra de tempo
    const clickX = event.offsetX;//pegando em qual intervalo de largura da barra foi clicado;
    const duration = audio.duration;

    //(clickX / width): retorna porcentagem da barra onde foi clicado
    audio.currentTime = (clickX / width) * duration;// setando no tempo no audio 

}

audio.addEventListener('timeupdate', updateProgress);
barTimer.addEventListener('click', setProgress);




/*
 Veja mais propriedades de video/audio em: 
    https://www.w3schools.com/tags/ref_av_dom.asp
*/