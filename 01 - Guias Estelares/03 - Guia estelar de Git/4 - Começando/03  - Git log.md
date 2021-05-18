# Git log

* o comando `git log`, é uma maneira que se tem para nós filtrasmos/rastrearmos um determinado ponto na história(_commit_) que criamos. Executando ele desta forma você receberá informações de todos os commits que você realizou em um projeto. Ex:
```
$ git log
```

* `git log --oneline` é outro comado do log do git para apresentar informações dos nossos commits, só que de uma forma enxuta/curta, em uma única linha. Ex:
```
$ git log --oneline
```

* `git log -n 5` outro comando do git que serve para trazer o log(registro/informação) dos nossos commits, neste caso o `-n 5` indica para trazer os ultimo 5 commits realizados, mas você pode alterar o número para outro qualquer. Ex:
```
$ git log -n 5
```

* `git log --since=2020-10-01` outro comando que serve para trazer o log dos commits realizados _desde(since)_ uma determinada data. Ex:
```
$ git log --since=2020-10-01
```

* `git log --until=2020-10-01` outro comando que serve para trazer o log dos commits realizados _anterior(until)_ á uma determinada data. Ex:
```
$ git log --until=2020-10-01
```

* `git log --author=Mayk` outro comando que serve para trazer o log dos commits realizados por um determinado autor. Ex:
```
$ git log --author=Pablo
```

* `git log --grep="expressão regular"` outro comando que serve para trazer o log dos commits, só que este faz uma busca através de uma expressão regular(_grep_) que terá na mensagem inserida no commit, o valor entre aspas pode ser alterado para a exepressão regular desejada. Ex:
```
$ git log --grep="init"
```

