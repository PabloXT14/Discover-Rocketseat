window.onload = function() {
    let minutes = 00
    let seconds = 00
    let tens = 00
    const appendMinutes = document.querySelector("#minutes")
    const appendSeconds = document.querySelector("#seconds")
    const appendTens = document.querySelector("#tens")
    const btnStart = document.querySelector("#btn_start")
    const btnStop = document.querySelector("#btn_stop")
    const btnReset = document.querySelector("#btn_reset")
    let Interval
    
    btnStart.onclick = function() {
      clearInterval(Interval)
      Interval = setInterval(startTimer, 10)
    }
    
    btnStop.onclick = function() {
      clearInterval(Interval)
    }
    
    btnReset.onclick = function() {
      clearInterval(Interval)
      tens = "00"
      seconds = "00"
      minutes = "00"
      appendTens.innerHTML = tens
      appendSeconds.innerHTML = seconds
      appendMinutes.innerHTML = minutes
    }
    
    function startTimer() {
      tens++
      
      // Verificando as dezenas/milisegundos
      if(tens <= 9) {
        appendTens.innerHTML = "0" + tens
      }
      if(tens > 9) {
        appendTens.innerHTML = tens
      }
      
      //Verificando os seconds
      if(tens > 99) {
        console.log("seconds");
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        tens = 0
        appendTens.innerHTML = "0" + tens
      }
      
      if(seconds > 9) {
        appendSeconds.innerHTML = seconds
      }

      // Verificando minutos
      if(seconds > 59) {
        console.log("minutes")
        minutes++
        appendMinutes.innerHTML = "0" + minutes
        seconds = 0
        appendSeconds.innerHTML = "0" + seconds
        tens = 0
        appendTens.innerHTML = "0" + tens
      }
    
      if(minutes > 9) {
        appendMinutes.innerHTML = minutes
      }
    }

  }