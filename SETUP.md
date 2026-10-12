# Colocar o site da Connectas no ar (Wix Headless)

Mesmo caminho do site da CMR. Feito uma única vez, no Mac do Marcello, com o login dele no Wix.

## 1. Ligar o projeto ao Wix

```bash
cd ~/Documents/connectas-website
npm install
npm create @wix/new@latest -- headless link --business-name "Connectas"
```

O comando abre o navegador para você entrar no Wix, cria o projeto headless na sua conta e adiciona a
integração do Wix ao `astro.config.mjs` (e grava o `wix.config.json`).

## 2. Formulário de contato no Wix Forms (opcional, recomendado)

Hoje o formulário abre o aplicativo de e-mail do visitante com a mensagem pronta para
info@connectasconsulting.com. Para receber os contatos direto no painel do Wix (como no site da CMR),
crie no Wix Forms um formulário chamado `Website · Contact` com os campos Name, Email e Details, e ative
a notificação por e-mail. Depois disso o Claude liga o formulário a ele.

## 3. Testar e publicar

```bash
npm run dev        # abre o site local em http://localhost:4330
npx wix build
npx wix release    # publica no Wix
```

## 4. Domínio

No painel do Wix: **Settings → Domains** → conecte **connectasconsulting.com** a este projeto headless.
(Hoje o domínio já aponta para o Wix, mas sem site — aparece uma página de erro do Wix.)

## Onde mudar as coisas

- Dados da empresa (endereço, e-mail, logo): `src/company.ts`
- Serviços: `src/lib/services.ts`
- Artigos do blog (Insights): `src/blog/posts.ts`
- Páginas legais: `src/legal/*.md` (inglês) e `*.pt.md` (português)
- Endereços das páginas em EN e PT: `src/lib/routes.ts`
