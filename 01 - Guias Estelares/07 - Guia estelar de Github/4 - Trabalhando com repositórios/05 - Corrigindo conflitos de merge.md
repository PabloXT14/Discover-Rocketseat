# Corrigindo conflitos de merge

* Primeiro execute o comando a seguir para deixar o seu `git pull`(merge) para deixar com o padrão de merge. Comando: 
```
git config --global pull.rebase false
```

* Agora caso você tenha um erro de merge, ex: você faz a alteração de um arquivo no repositório remoto e no mesmo arquivo só que de forma local sem executar o `git pull`(merge) antes. 
    - Quando você for realizar o `git pull` desse projeto você verá que dara um conflito, para solucionar esse conflito de acordo com sua escolha, utilize o _VS Code_ e abra o arquivo que está dando conflito.
    - Dentro do VS Code você terá opções de qual alteração você irá querer manter, ou seja, as do repositório remoto ou local.