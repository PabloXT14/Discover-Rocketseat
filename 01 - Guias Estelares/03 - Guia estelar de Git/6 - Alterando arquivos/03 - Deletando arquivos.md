# Deletando Arquivos

* Para deletarmos arquivos através do git, basta utilizar o comando `git rm `+<file>, mas atenção, ao realizar a remoção dessa forma o arquivo é _permanentemente deletado_

* Demonstração:
```
$ git rm index.html
```

* Após a remoção basta realizar o commit, sem precisar do `git add`, pois o `git rm` já adiciona a alteração/remoção ao Stage Area. Mas caso você tenha deletado o arquivo manualmente, utilizar o `git add`+<file deletado> e depois faça o commit