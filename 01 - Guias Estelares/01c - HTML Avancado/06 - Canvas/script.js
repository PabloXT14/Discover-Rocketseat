let screenCanvas = document.querySelector("#screenCanvas");

/*
    - getContext(): 
        * pega o contexto daquele elemento - a coisa sobre a qual o desenho será renderizado.
        * especificando qual contexto da nossa tela canvas queremos editar (poderia ser 3d, mais ai é outra maneira de editar, que é mais utilizada em jogos)
        * É através deste contexto que editamos/criamos elementos no <canvas>
*/
let context = screenCanvas.getContext("2d");// 

/* CONCEITOS INICIAIS */
// context.moveTo(0, 0);//moveTo(x, y): setando a posição inicial do <canvas>
// context.lineTo(250, 250);//lineTo(x, y): desenha uma linha até um determinado ponto
// context.lineTo(500, 0);
// context.lineWidth = 5;//lineWidth: seta a largura da linha
// context.strokeStyle = "green";//strokeStyle: seta a cor da linha

// context.stroke();//stroke(): determina a espussura de uma linha


/* DRAW RETANGULO */
//Retangulo sem preenchimento
context.strokeStyle = "red";//setando cor da linha/borda do retangulo
context.lineWidth = 3;//seta a largura da linha
context.strokeRect(10, 10, 70, 170);//strokeRect(x, y, width, height): seta a posição (inicial) e dimensões do retangulo (sem preenchimento)

//Retangulo apenas com preenchimento
context.fillStyle = "blue";//seta a cor do preenchimento do retangulo
context.fillRect(90, 10, 70, 170);//fillRect(x, y, width, height): seta a posição (inicial) e dimensões do retangulo (apenas com preenchimento)

//Retangulo com borda e preenchimento
context.rect(170, 10, 70, 170);//rect(x, y, width, height): seta a posição (inicial) e dimensões do retangulo (com borda e preenchimento)
context.fillStyle = "green";
context.strokeStyle = "yellow";
context.lineWidth = 3;
context.fill();// renderiza o preenchimento
context.stroke();// renderiza a borda

//Retangulo invisível/png
context.clearRect(190, 85, 30, 30);//seta a posição (inicial) e dimensões do retangulo invisível