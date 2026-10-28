# Site da Connectas — instruções para o Claude

Site institucional da Connectas (connectasconsulting.com), em inglês e português.

## Como funciona
- Este repositório guarda o site **já pronto** (HTML estático gerado pelo Astro). Não há código-fonte do Astro aqui: as alterações são feitas direto nos arquivos `.html` e no `site.css`.
- Inglês fica na raiz (`index.html`, `solutions/…`, `about.html`…). Português fica em `pt.html` e na pasta `pt/` (`pt/solucoes/…`, `pt/tecnologia.html`…).
- O site é publicado a partir do branch `main` (há `CNAME` e `vercel.json` com `cleanUrls`). Um push no `main` coloca a alteração no ar em 1–2 minutos.
- Estilos e cores ficam em `site.css` (variáveis em `:root`: `--ink`, `--accent`, `--serif` Fraunces, `--sans` Manrope…).

## Como trabalhar
- Responda em português.
- O Marcello costuma estar no celular: publique as alterações direto (commit + push no `main`), sem pedir que ele faça algo no computador.
- Faça cada alteração nas duas versões (EN e PT), a menos que ele diga o contrário.
- Antes de editar, faça `git pull` — ele também publica por outros caminhos.
- Se algo for gerado de novo a partir de outra cópia do projeto, as alterações feitas aqui podem ser sobrescritas; avise quando isso parecer estar acontecendo.

## Decisões já tomadas (não desfazer sem pedido)
- **Prévia do link** (WhatsApp, redes): `og:image` = `/brand/connectas-og.png` (só o símbolo, 600×600). O título da prévia continua com "Connectas".
- **Ícone da aba do navegador**: só o símbolo — `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`.
- **Abertura em PT**: o título alterna "os Estados Unidos", "Brasil", "Guiana" (sem artigo em Brasil e Guiana).
- **Página Relocation** (EN e PT): foto do Brasil (ponte Octávio Frias de Oliveira, São Paulo) na entrada, não a da Guiana.
- **Formulários de contato**: sem a opção "Relocation & property platform (white label)" / "Plataforma de realocação e imóveis (white label)".
- **Banner "Integrated websites, systems & apps"** depois da abertura: foi testado e removido a pedido. Não recolocar nesse formato.
