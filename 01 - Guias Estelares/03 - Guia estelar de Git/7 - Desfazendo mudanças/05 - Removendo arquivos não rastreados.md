# Removendo arquivos não rastreados

* Para remover arquivos _não rastreados_(que estão no Stage Area e nem foram commitados nenhuma vez) use o comando:
    - `git clean -f`, mas atenção, **irá excluir todos os arquivos permanentemente**. (você pode especificar o arquivo que serão excluido se quiser)
    - `git clean -n`: mostra os arquivos não rastreados que serão excluidos permanentemente. 
* Veja o ex:
```
$ touch trash1.txt
$ git clean -f trash1.txt
```