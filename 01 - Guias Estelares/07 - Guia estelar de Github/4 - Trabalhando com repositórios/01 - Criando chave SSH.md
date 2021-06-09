# Criando Chave SSH

* A chave SSH é um código encriptado que serve para criar uma melhor conexão entre a sua maquina e o servidor do GitHub.

## Gerar uma nova chave SSH

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

## Adicionar sua chave SSH ao ssh-agent

* Agora acesse o [link](https://docs.github.com/pt/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key) para ver qual sera os passos seguites para o seu tipo de máquina, no caso do Windows siga os seguintes passos(no terminal do Git):
    - `$ eval `ssh-agent -s``: start the ssh-agent in the background (inicia o ssh-agent em segundo plano), após isso, irá aparecer resultado como;
        - `Agent pid 59566`
    - Em seguida, se você criou sua chave com um nome diferente ou se você estiver adicionando uma chave existente com um nome diferente, substitua id_ed25519 no comando pelo nome do seu arquivo de chave privada.
        - `$ ssh-add ~/.ssh/id_ed25519`(ex: id_rsa)
