# Git Clone e Fork

* Para você "clonar"/ ter na sua máquina a cópia de um repositório de outro usuário do GitHub que você gostou basta você executar no terminal do Git:
    - `git clone` + <código SSH ou HTTP do repositório desejado>
    - Dica: para achar o código SSH ou HTTP do repositório de outros usuários basta ir no botão `Code` desse repositório no GitHub e copiar.
    - ex: 
    ```
    $ git clone git@github.com:ARTHURPC03/NewGoBarber-FullStack.git
    ```

* Fork é semelhante ao git clone, no entanto, só serve para criar uma copia do repositório de outro usuário apenas no seu GitHub (e não na máquina como o git clone faz). E para realizar um fork de um repositório basta clicar no botão _fork_ que aparece quando você entra em algum repositório de outra pessoa.

* OBS: com o fork você pode depois fazer um `pull request`, que á basicamente fazer uma alteração no projeto/repositório de alguem através de um fork e depois que mandar para o usuário/criador daquele repositório original(fazer um `pull request`) para ver se ele quer ou não manter aquela alteração que você realizou.