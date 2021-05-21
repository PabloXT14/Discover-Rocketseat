# Modificações com git diff

* O `git diff` é um comando que serve para verificarmos com mais detalhes as modificações que realizamos em nosso projeto, de _arquivos que já foram commitados/estão no repositório local_.

* A diferença em relação ao `git status`, é que o `git status` mostra qualquer tipo de alteração que ocorra no projeto(working directory) sem muitos detalhes.

* Demonstração: 
```
$ git diff
```

* `git diff --staged`, este comando funciona semelhante ao `git diff`, no entanto, irá mostrar apenas as modificações que realizamos em nosso projeto de _arquivos que já foram adicionados ao Stage Area_, funcionalidade está que só o `git diff` não é capas de fazer.