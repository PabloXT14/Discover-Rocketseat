# Linkando um Repositório remoto com local

* primeiro crie um repositório no seu GitHub e depois outro no sua máquina (OBS: ambos com o mesmo nome)
    - Para criar um repositório no GitHub veja o [vídeo](https://app.rocketseat.com.br/node/o-guia-estelar-de-git-hub/group/criando-repositorios/lesson/criando-repositorio-online)
    - Relembrando comandos basicos para criar um repositório local:
    ```
    $ mkdir MyProject
    $ cd MyProject
    $ ~/MyProject git init
    ```

* Agora no terminal do Git crie algum arquivo e faça o primeiro commit
    - Ex (criando o README.md):
    ```
    $ vim README.md
    $ git add .
    $ git commit -m ":tada: first commit"
    ```

* Agora siga os seguintes passos para linkar/ligar o repositório remoto com o local
    - `git remote add origin`+<git@github.com:PabloXT14/demo.git> or <https://github.com/PabloXT14/demo.git>
        - git@github.com:PabloXT14/demo.git: link com a chave SSH para o seu repositório remoto(_é mais seguro_).
        - https://github.com/PabloXT14/demo.git: link https para o seu repositório remoto.
        - OBS: esses links alteram de acordo com usuário e repositório, então é preciso que você os pegue/verifique no seu GitHub.
    - `git remote -v`: só é para ver seus repositórios na nuvem (não é um comando obrigatório)
    - `git branch -M main`: para transformar a _branch master_ local em _branch main_ para o repositório remoto
    - `git push -u origin main`: para enviar as alterações do repositório local como branch main no repositório remoto (obs: caso fizer uma pergunta responda yes)

    - Continuando do exemplo anterior:
    ```
    $ git remote add origin git@github.com:PabloXT14/demo.git
    $ git branch -M main
    $ git push -u origin main
    ```

**OBS**: todo esse processo é realizado apenas uma vez para linkar/ligar um repositório remoto com um local, para salvar as alterações seguintes é feito de outra forma mais fácil.