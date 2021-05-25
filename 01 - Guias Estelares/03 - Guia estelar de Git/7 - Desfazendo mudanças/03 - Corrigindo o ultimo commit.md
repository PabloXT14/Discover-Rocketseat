# Corrigindo o último commit

* Para que você possa alterar o dados e/ou a mensagem colocadas no _último commit realizado_ use o comando `git commit --amend -m "message"`, caso queira deixar a mesma mensagem basta não utilizar o `-m "message"` e digitar `:wq`(obs: a hash irá mudar), veja o ex:
```
$ git commit -m "remove README.md"
$ git commit --amend -m "delete README.md"
```