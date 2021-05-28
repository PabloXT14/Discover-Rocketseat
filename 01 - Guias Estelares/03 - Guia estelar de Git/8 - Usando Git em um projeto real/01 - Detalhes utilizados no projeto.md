# Detalhes utilizados no projeto

* Para saber qual projeto foi utilizado, reveja a Etapa 8 do Módulo de Git no site da Rocketseat

* Alguns comandos adicionais/novos que foram apresentados durante o projeto foram:
    - `git diff --color-words`: exerce a mesma função do `git diff`, só que com cor destaque apenas nas palavras que foram adicionada(verde) e nas que forma apagadas/substituidas(vermelho)
    - `git commit -am "message"`: este comando serve como um atalho, pulando a etapa do `git add`, realizando diretamente o commit. Mas este atalho só funciona quando os arquivos já estão rastreados(já foram commitados alguma vez/estão no repositório do git).
    - `git show`+<hash>: comando que serve para mostrar em detalhes as alterações/modificações de qualquer commit que tenhamos realizado, basta saber a hash desse determinado commit. Outras variações desse comando são:
        * `git show `+<hash>+` --color-words `: mostrar com cores destacadas alterações que o commit teve.
        * `git show`+<hash>+` -- src/index.html`: mostra as alterações que um arquivo específico teve em um determinado commit.

* Como ignorar arquivos e diretórios indesejados:
    - Crie um arquivo `.gitignore`, e escreva dentro dele os arquivos e diretórios que você deseja que não sejam mais commitados. ex:
    ```
    node_modules/ (diretório)
    .DS_Store     (tipo de arquivo)
    banana.html   (arquivo)
    ```
    - Depois execute o comando `git rm -r --cached .` para limpar o cache do git para não salvar o arquivos que serão ignorados.
    - Em seguida execute um `git add .` e um `git commit -m "message"` para salvar suas alterações.