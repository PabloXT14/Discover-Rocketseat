# Revisão

## Revisando Conceitos

### Working directory
- Onde estão todos os nossos arquivos, também conhecido como `Working tree`, onde realizaremos as alterações.

### Stage area
- Preparação dos nossos arquivos para serem commitados (após as alterações)
- Também conhecido como `Index` ou `Stage tree`

### Repository (local)
- Banco de dados dos nossos arquivos
- Onde ficarão os pontos da história (commits) ou o histórico do nosso projeto


## Revisando Comandos

* `git init` (inicia/torna um diretório/pasta em um repositório local)
    - dicas de comandos:
      - mkdir: cria um diretório
      - touch: cria um arquivo
      - vim: cria um arquivo e abre um editor para o arquivo pelo terminal
* `git status` (mostra o status do seu repositório, se você alterou ou não algo)
* `git add` <file> (adiciona um determinado arquivo/alteração de arquivo ao Stage Area para podermos commitar em seguida)
* `git rm --cached` <file> (remove um determinado arquivo do Stage Area para não ter suas alterações no commit)
* `git commit -m "message"` (comando para realizar o commit com um certa mensagem)
* `git log` (para filtrasmos/rastrearmos um determinado ponto na história(_commit_) que criamos)

