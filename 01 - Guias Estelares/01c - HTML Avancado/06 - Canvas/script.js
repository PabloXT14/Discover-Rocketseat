let screenCanvas = document.querySelector("#screenCanvas");

/*
    - getContext(): 
        * pega o contexto daquele elemento - a coisa sobre a qual o desenho será renderizado.
        * especificando qual contexto da nossa tela canvas queremos editar (poderia ser 3d, mais ai é outra maneira de editar, que é mais utilizada em jogos)
        * É através deste contexto que editamos/criamos elementos no <canvas>
*/
let context = screenCanvas.getContext("2d");// 

context.moveTo(0, 0);//moveTo(x, y): setando a posição inicial do <canvas>
context.lineTo(250, 250);//lineTo(x, y): desenha uma linha até um determinado ponto
context.lineTo(500, 0);
context.lineWidth = 5;//lineWidth: seta a largura da linha
context.strokeStyle = "green";//strokeStyle: seta a cor da linha

context.stroke();//stroke(): determina a espussura de uma linha

