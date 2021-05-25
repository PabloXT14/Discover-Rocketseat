# Trazer de volta do staged

* Para trazer/desfazer uma alteração que adicionamos no Stage Area, basta utilizar o comando `git restore --staged`+<file>, no lugar do <file> você também pode usar o `.` para tirar/remover todos os arquivos do Stage Area,
veja o ex:
```
$ git add file1.txt
$ git restore --staged file1.txt
```

* Outra maneira mais antiga de fazer essa mesma função é utilizar o comando `git reset HEAD`+<file>, no lugar do <file> você também pode usar o `.` para tirar/remover todos os arquivos do Stage Area,
veja o ex:
```
$ git add file1.txt
$ git reset HEAD file1.txt
```