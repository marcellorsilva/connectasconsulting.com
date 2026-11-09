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
- **Nunca** escrever "sample", "sample data", "illustrative" ou avisos de demonstração em sites ou sistemas.
- Sem seção Insights e sem relógio no rodapé. Rodapé enxuto (logo, 6 links, e-mail, 3 links legais).
- Aparelhos sempre realistas: iMac real (`img/dev/imac-*.webp`) e iPhone de titânio (`img/dev/ip-*.webp`). Nunca molduras pretas desenhadas.
- Prévia do link: `og:image` = `/brand/connectas-og.png` (só o símbolo). Título com "Connectas".
- Ícone da aba: só o símbolo.
- Nada de Brasil ou Guiana no site.
- CMR*mobility*: "mobility" sempre em itálico.
- Sem seção ou item de menu "Leadership".
- Home (v33): o fluxo "One system. Every step connected." é genérico (não fala dos 3 clientes): Request comes in → Proposal sent → Deal won → Work scheduled → Updated from the field → Invoiced and paid → Customer kept informed, usando as telas vivas genéricas. Os três exemplos aparecem só depois, como "Project demonstrations". Nunca misturar telas de negócios diferentes como se fossem um sistema.
- Nomes de clientes nunca aparecem: usar o ramo de atividade (Kitchen & Bath Company, Yacht Charter Company, Relocation & Property Company). Telas usam marcas inventadas (Halden, Seaward, Northway).
- CTA de contato padronizado: "Book a Discovery Call". Formulário: "Request a Discovery Call" (abre o e-mail com as respostas). Our Work usa "What this enables", não "The result".
- Processo: Discover → Define & Prototype → Build & Integrate → Validate & Launch → Support & Improve.
- Painéis vivos (v33): telas em `img/live/` (finance, ops, crm, overview) com o logo da Connectas, cada uma com 4 a 6 ações simuladas (cliques que mudam números, status, barras e notificações nos celulares). Posições e valores em `assets/live-scenes.json`, script `assets/live.js`. Sem iMac em excesso: preferir fotos do MacBook (`img/corp/mac-*.webp`).
- Sem página de Referral partners (redireciona para /about).
- Telas vivas em código (v35): `assets/app.js` (motor), `assets/apps.js` (conteúdo e roteiros), `assets/app.css`. Os 3 exemplos mostram iMac + tablet + iPhone animados com passos clicáveis embaixo; as abas por departamento e o painel "With Connectas" também são telas vivas. No computador aparece o mouse; em tablet e celular só o toque do dedo. Logo da Connectas nas telas genéricas.
- Topo da home (v36): "filme" do produto em código (`assets/film.js` + `assets/film.css`), no estilo dos reels de referência: painel da Connectas que se monta, câmera que dá zoom em cada área (briefing com número contando, órbita ligando os departamentos, aprovações, gráfico crescendo, formulário de ordem de serviço sendo preenchido) e volta ao todo. Texto do topo à esquerda e o filme à direita (como antes).
