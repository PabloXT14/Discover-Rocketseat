# Configuração Inicial

Essa configuaração você fará apenas uma vez por computador e o efeito se manterá após atualizações no Git.

Você também pode mudá-las em qualquer momento rodando esses comandos novamente.

## Sua identidade

Assim que instalar o git, abra o terminal e digite
```
$ git config --global user.name "Seu Nome Completo Aqui Entre Aspas"
$ git config --global user.email seuemailaqui@dominio.com.br
```

💡Isto é importante porque cada commit usa esta informação, e ela é carimbada de forma imutável nos __commits__ que você começa a criar

Se você quiser substituir essa informação com nome diferente para um **projeto específico**, você pode rodar o comando sem a opção `--global` dentro daquele projeto.

## Editor

Você poderá trocar o editor padrão, que é o `vim`, por outro
```
git config --global core.editor "code -w"
```

## Ver configurações

Você poderá verificar suas configurações com o comando abaixo
```
git config --list
```

## `git config`

* Permite ver e atribuir variáveis de configuração como nome e email
* Estas variáveis podem ser armazenadas em três lugares diferentes:
    1. `/etc/gitconfig`: válido para todos os usuários no sistema(S.O.) e todos os seus repositórios. Se você passar a opção `--system` para `git config`, ele lê e escreve neste arquivo.   
    2. `~/.gitconfig` ou `~/.config/git/config`: Somente para o seu usuário. Você pode fazer o Git ler e escrever neste arquivo passando a opção `--global`.
    3. `config` no diretório Git (ou seja, `.git/config`) de qualquer repositório que você esteja usando: especifico para este repositório.

Cada nível sobrescreve os valores no nível anterior, ou seja, valores em `.git/config` prevalecem sobre `/etc/gitconfig`

No Windows, o arquivo .gitconfig estará no diretório $HOME que é _C:|Users|$USER_