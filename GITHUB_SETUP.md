# Como fazer push para o GitHub

## Passo 1: Criar repositório no GitHub
1. Acesse https://github.com
2. Clique no "+" no canto superior direito → "New repository"
3. Nome: `Artable` (ou outro nome de sua escolha)
4. Escolha público ou privado
5. **NÃO** marque "Initialize with README" (já temos arquivos)
6. Clique em "Create repository"

## Passo 2: Conectar e fazer push

Após criar o repositório, o GitHub mostrará comandos. Use estes comandos (substitua `SEU_USUARIO` pelo seu nome de usuário):

```bash
git remote add origin https://github.com/SEU_USUARIO/Artable.git
git push -u origin main
```

Ou se você preferir usar SSH (se tiver configurado):

```bash
git remote add origin git@github.com:SEU_USUARIO/Artable.git
git push -u origin main
```

## Pronto! 🎉

Seu projeto estará no GitHub. Para futuras atualizações, use:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```



