# Criando Chave SSH

* A chave SSH é um código encriptado que serve para criar uma melhor conexão entre a sua maquina e o servidor do GitHub.

* Para criá-la veja o [vídeo](https://app.rocketseat.com.br/node/o-guia-estelar-de-git-hub) e siga os seguintes passos(no terminal do Git):
    - `ssh-keygen -t rsa -b 4096 -C "seu_email@gmail.com"`(gera a chave SSH)
        - `ssh-keygen`: gerador de chaves
        - `-t`: o tipo da encriptação
        - `-b`: força da encriptação
        - `-C`: seu email do GitHub
        - depois de exutar o comando basta dar enter em tudo.
    - `cd ~/.ssh/`: para saber se o arquivo desejado esta dentro dessa pasta. 
    - `cat ~/.ssh/id_rsa.pub`: pega o arquivo com o código ssh gerado.
        - depois você copia esse código e cola na aba `SSH and GPG keys> SSH key` do GitHub.
        - OBS: coloque como titulo do SSH key no GitHub o nome da máquino que gerou o código. 