# Revertendo um commit

* Para você reverter um commit, ou seja, desfazer um commit e suas aletrações, siga os passos:
    - Verifique com `git status` que você não tenha nenhuma alteração presente (se o Working Directory/Tree está clean).
    - Conte o apartir do ultimo commit realizado até o commit que deseja reverter, em order crescente começando do 1, para saber o seu nº do commit desejado, ex:
        * HEAD -> current commit
        * 1a2a3a2 "new file5" -> _1_ 
        * 4a6a3b4 "delete file3" -> _2_
        * 1e2a5a2 "new file3" -> _3_
        * 9a2f9a4 "new file2" -> _4_
        * 7a2c3a5 "new file1" -> _5_
    - Agora execute o comando `git revert HEAD~`+<Numero_do_Commit> (OBS: não é o número da hash)
    - No lugar do comando acima você pode executar o seguinte (que é mais fácil), `git revert `+<hash>, na hash é o valor abreviado(com 7 caracteres, use `git log --oneline` para saber) do commit desejado

* Veja o ex:
```
$ git log --oneline
3b2d4a2 (HEAD -> master) current commit
1a2a3a4 new file5      -> _1_ 
4a6a3b2 delete file3   -> _2_
1e2a5a4 new file3      -> _3_
9a2f9a5 new file2      -> _4_
7a2c3a2 new file1      -> _5_
$ git revert HEAD~4 -> reverte/desfaz o commit delete file3
```

* Ao realizar um `git revert` o git irá realizar um novo commit para salvar essa reversão, por isso ele te pergunta até mesmo a mensagem que terá esse commit.