const audio = document.querySelector('.audio')
const timer = document.querySelector('.time')


//Funções de controle do audio
window.onload = ()=> {
    
}

let actived = true;
function play(elem) {
    if(actived) {
        audio.play();
        actived = !actived;
    } else {
        audio.pause();
        actived = !actived;
    }
}




/*
 Veja mais propriedades de video/audio em: 
    https://www.w3schools.com/tags/ref_av_dom.asp
*/