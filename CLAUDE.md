# Site da Connectas — instruções para o Claude

Site da Connectas (connectasconsulting.com): ecossistemas digitais empresariais 100% personalizados para pequenas e médias empresas dos EUA (sistemas, CRM, integração e automação, sites e portais conectados, apps iOS/Android, IA, segurança). **Somente em inglês.** Slogan: "We connect your entire business."

## Como funciona
- Site estático em HTML. Estilos em `assets/site.css`, interações (hub, demonstração de fluxo, perspectivas, formulários, menu) em `assets/site.js`. Imagens reais em `img/` (Propel, Nova, CMRmobility, Swerve).
- Menu: Solutions, Industries, Our Work, Our Approach, About (Our Company, Creative Partnership — Swerve, Referral partners), Contact.
- Páginas: `index.html`, `solutions.html` + `solutions/*` (7 páginas SEO), `industries.html` + `industries/*` (5), `our-work.html` (Nova, Propel, CMRmobility), `our-approach.html`, `about.html`, `creative-partnership.html`, `partners.html`, `contact.html` (Business Systems Assessment), páginas legais, `404.html`, `sitemap.xml`.
- Páginas antigas (Brasil, Guiana, EUA, relocation, consultorias, português) são redirecionamentos. Não recriar.
- Publicado a partir do branch `main` (Vercel, `cleanUrls`).

## Como trabalhar
- Responda em português. O Marcello costuma estar no celular.
- Mostre uma prévia antes de publicar mudanças grandes; mudanças pequenas podem ir direto.
- Antes de editar, faça `git pull`.
- Sem preço fixo no site. Não prometer dados "100% corretos": prometer consistência, rastreabilidade e redução de erros.
- Swerve: ~10% do conteúdo. Nunca item principal do menu. Cada empresa contratada separadamente. Selo "Integrated project" só em projetos que realmente envolveram as duas.
- Logo da Connectas é o único no cabeçalho.
- Visual atual (branch site-v5-corporate, gerado com CORP=1): corporativo claro, azul-marinho e branco, fotos de prédio de vidro, telas reais dentro de fotos de MacBook (`img/corp/`), fonte Plus Jakarta Sans (título em negrito + linha fina). Estilos em `assets/corp.css`, animações em `assets/corp.js`. Setores devem ser amplos, com uma faixa de mercados variados. Sem números ou depoimentos inventados.
- Visual anterior: tema escuro com brilho azul/violeta (`assets/fx.css` + `assets/fx.js`): partículas que formam o símbolo, grade que pisca, fitas de luz, cursor próprio, holofote no mouse, prévia flutuante nos estudos de caso, relógio da Flórida no rodapé, transições entre páginas. Títulos grandes e pesados (Inter Tight). Respeitar quem desativa movimento.

## Decisões já tomadas (não desfazer sem pedido)
- Prévia do link: `og:image` = `/brand/connectas-og.png` (só o símbolo). Título com "Connectas".
- Ícone da aba: só o símbolo.
- Nada de Brasil ou Guiana no site.
- CMR*mobility*: "mobility" sempre em itálico.
- Sem seção ou item de menu "Leadership".
