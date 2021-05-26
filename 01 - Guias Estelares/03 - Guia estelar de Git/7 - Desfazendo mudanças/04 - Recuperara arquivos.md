# Recuperar Arquivos

* Para recuperarmos arquivos de um determinado ponto da história(_commit_) no git, temos que utilizar o comando `git checkout `+<hash>+`--`+<file>, no caso da <hash> pode ser só o começo da hash, veja o ex:
```
$ git commit -m "alteration 1 in file.txt"
$ git commit -m "alteration 2 in file.txt"
$ git commit -m "alteration 3 in file.txt"

$ git checkout 1a3d4a2 -- file.txt --> voltando p/ a alteration 1
```