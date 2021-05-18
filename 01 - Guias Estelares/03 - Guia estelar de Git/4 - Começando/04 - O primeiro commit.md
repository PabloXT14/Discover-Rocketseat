# O primeiro commit

* Antes de realizar seu commit é preciso que você tenha feito alguma alteração no seu projeto/repositório(pasta onde está o arquivo .git), uma dica só de teste é usar o comando `vim file.txt` no GitBash para criar uma arquivo de texto, para mais detalhes pesquise como criar arquivo de texto com o vim.

* Já com alguma alteração feita, execute o comando `git add .`, este comando indicará quais arquivos serão adicionados no commit, no caso, o ponto indica todos os arquivos na pasta do seu projeto/repositório, mas poderia ser apenas um arquivo específico(ex: 'banana.txt')
```
$ git add .
```

* Agora para criar o seu ponto na história(_commit_) basta executar o comando `git commit -m "mensagem do commit" `. O `-m` indica a mensagem do nosso commit, algo que é obrigatório todo commit ter.
```
$ git commit -m "initial commit"
```