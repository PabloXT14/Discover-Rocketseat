# Renomeando arquivos

* Para renomear arquivos através do terminal com o git, basta utilizar o comando `git mv `+ <Filename> + <NewFilename>. Desta forma a alteração já vai como `renamed` para o Stage Area
* Ex:
```
$ git mv fele.txt file.txt
```

* Caso você renomeie um arquivo manuealmente, você precisará fazer os seguintes passos para adicionar essa alteração corretamente ao repositório pelo git
    - Remover o "antigo" arquivo nomeado: `git rm `+<filename>
    - Adicionar o novo arquivo nomeado: `git add`+<newfilename>
* Ex: 
```
$ git rm fele.txt
$ git add file.txt
```

* Por isso recomenda-se utilizar o `git mv`. OBS: o `git mv` também serve para outra função de mover arquivos.