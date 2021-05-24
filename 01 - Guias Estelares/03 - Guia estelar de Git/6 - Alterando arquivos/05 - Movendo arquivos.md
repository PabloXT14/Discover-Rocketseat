# Movendo Arquivos

* Para mover arquivos também utlizamos o comando `git mv`, mas agora com pequenas mudanças, `git mv `+<File_location> + <New_File_location>
* Ex:
```
$ git mv file.txt sub/file.txt
```

* Caso você mova um arquivo manuealmente, você precisará fazer os seguintes passos para adicionar essa alteração corretamente ao repositório pelo git
    - Remover a "antiga localização" do arquivo: `git rm `+<File_location>
    - Adicionar a "nova localização" do arquivo: `git add`+<New_File_location>
* Ex: 
```
$ git rm file.txt
$ git add sub/file.txt
```

**OBS**
```
Como curiosidade: ao mover um arquivo também podemos dizer que o renomeamos, pois trocamos/renomeamos a sua localização.
```