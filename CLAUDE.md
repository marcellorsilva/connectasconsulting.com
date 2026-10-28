# Site da Connectas — instruções para o Claude

Site da Connectas (connectasconsulting.com): software house nos EUA que cria CRM, sistemas, apps e sites 100% personalizados e integrados (marca, redes sociais, leads e relatórios para a gestão). **Somente em inglês.**

## Como funciona
- Site estático em HTML puro. Estilos em `assets/connectas.css`, animações e formulário em `assets/connectas.js`. Imagens e vídeo da página inicial em `media/`.
- Páginas: `index.html` (página inicial), `about.html`, páginas legais (`privacy-policy.html` etc.) e `404.html`. Todas usam o mesmo cabeçalho e rodapé; ao mudar um, mude em todas.
- As páginas antigas (Brasil, Guiana, Estados Unidos, Relocation, consultorias, versão em português) viraram redirecionamentos para a página inicial. Não recriar.
- O site é publicado a partir do branch `main` (há `CNAME` e `vercel.json` com `cleanUrls`). Um push no `main` coloca a alteração no ar em 1–2 minutos.
- Identidade: preto, branco, cinza-névoa, areia e azul Atlântico (`--accent`); Fraunces nos títulos e Manrope no texto (variáveis em `:root` de `assets/connectas.css`).

## Como trabalhar
- Responda em português.
- O Marcello costuma estar no celular: publique as alterações direto (commit + push no `main`), sem pedir que ele faça algo no computador.
- O site é só em inglês; não criar versão em português.
- Ele prefere imagens e animação a muito texto: textos curtos.
- Mostre uma prévia antes de publicar mudanças grandes.
- Antes de editar, faça `git pull` — ele também publica por outros caminhos.
- Se algo for gerado de novo a partir de outra cópia do projeto, as alterações feitas aqui podem ser sobrescritas; avise quando isso parecer estar acontecendo.

## Decisões já tomadas (não desfazer sem pedido)
- **Prévia do link** (WhatsApp, redes): `og:image` = `/brand/connectas-og.png` (só o símbolo, 600×600). O título da prévia continua com "Connectas".
- **Ícone da aba do navegador**: só o símbolo — `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`.
- **Nada de Brasil, Guiana ou relocation** em nenhuma página.
- **Banner "Integrated websites, systems & apps"** como cartão logo depois da abertura: foi testado e removido a pedido. Não recolocar nesse formato.
