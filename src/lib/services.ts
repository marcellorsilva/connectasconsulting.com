import type { ICON } from "./icons";
type T = { EN: string; PT: string };
export interface Service { key: string; icon: keyof typeof ICON; title: T; short: T; long: T; more: T; tags: { EN: string[]; PT: string[] } }

export const SERVICES: Service[] = [
  {
    key: "business-plans", icon: "plan",
    title: { EN: "Business Plans", PT: "Planos de Negócios" },
    short: { EN: "Investor-ready business plans for the United States, Brazil and Guyana, built on how each country really works.", PT: "Planos de negócios prontos para investidores nos Estados Unidos, no Brasil e na Guiana, feitos com base em como cada país realmente funciona." },
    long: { EN: "Successful expansion is built on structure. We write business plans that combine market data, financial projections, risk analysis, regulatory evaluation and operational planning — with the real costs, taxes and timelines of each country.", PT: "Uma expansão bem-sucedida começa pela estrutura. Escrevemos planos de negócios que reúnem dados de mercado, projeções financeiras, análise de riscos, avaliação regulatória e planejamento operacional — com os custos, impostos e prazos reais de cada país." },
    more: { EN: "We define capital requirements, hiring strategy and implementation phases, so the plan works for investors, banks and your own team.", PT: "Definimos a necessidade de capital, a estratégia de contratação e as fases de implantação, para que o plano sirva a investidores, bancos e à sua própria equipe." },
    tags: { EN: ["Financial projections", "Market sizing", "Risk analysis", "Investor-ready"], PT: ["Projeções financeiras", "Tamanho de mercado", "Análise de riscos", "Pronto para investidores"] },
  },
  {
    key: "registration", icon: "register",
    title: { EN: "Business Registration & Structuring", PT: "Abertura e Estruturação de Empresas" },
    short: { EN: "Company formation, licences and local registrations — done right the first time.", PT: "Abertura de empresa, licenças e registros locais — feitos do jeito certo desde a primeira vez." },
    long: { EN: "International growth demands technical precision. We coordinate the legal, corporate and tax structure for companies operating across borders: company formation, subsidiaries and holding structures, licences, tax registrations and banking arrangements.", PT: "Crescer internacionalmente exige precisão técnica. Coordenamos a estrutura societária, legal e tributária de empresas que atuam entre países: abertura de empresa, subsidiárias e holdings, licenças, inscrições fiscais e abertura de contas bancárias." },
    more: { EN: "We work with licensed local professionals in each country and keep you compliant from day one.", PT: "Trabalhamos com profissionais locais habilitados em cada país e mantemos sua empresa em conformidade desde o primeiro dia." },
    tags: { EN: ["Company formation", "Licences", "Tax registration", "Banking"], PT: ["Abertura de empresa", "Licenças", "Inscrição fiscal", "Bancos"] },
  },
  {
    key: "market-entry", icon: "market",
    title: { EN: "Market Entry Strategy", PT: "Estratégia de Entrada no Mercado" },
    short: { EN: "Market studies, positioning and introductions to the right partners, suppliers and clients.", PT: "Estudos de mercado, posicionamento e apresentações aos parceiros, fornecedores e clientes certos." },
    long: { EN: "Entering a new market requires more than registration — it requires clarity. We analyse market conditions, competition, regulation and local dynamics, define the right entry model and adapt your pricing and positioning.", PT: "Entrar em um novo mercado exige mais do que um registro — exige clareza. Analisamos o mercado, a concorrência, a regulação e a dinâmica local, definimos o modelo de entrada certo e adaptamos seus preços e seu posicionamento." },
    more: { EN: "Then we open doors: introductions to partners, suppliers, distributors and the first clients.", PT: "Depois, abrimos portas: apresentações a parceiros, fornecedores, distribuidores e aos primeiros clientes." },
    tags: { EN: ["Market studies", "Positioning", "Partner search", "Local content"], PT: ["Estudos de mercado", "Posicionamento", "Busca de parceiros", "Conteúdo local"] },
  },
  {
    key: "relocation", icon: "relocation",
    title: { EN: "Relocation Services", PT: "Serviços de Realocação" },
    short: { EN: "Housing, schools, documents and settling-in for executives and families, so your people arrive ready to work.", PT: "Moradia, escolas, documentação e adaptação para executivos e famílias, para que sua equipe chegue pronta para trabalhar." },
    long: { EN: "Expansion often means moving people. We relocate executives, key staff and their families with a structured approach: home search, school search, documents, area orientation and settling-in.", PT: "Expandir muitas vezes significa mudar pessoas. Realocamos executivos, profissionais-chave e suas famílias de forma estruturada: busca de imóvel, busca de escola, documentação, orientação na cidade e adaptação." },
    more: { EN: "We also set up offices and corporate housing, and stay with your people after they arrive.", PT: "Também montamos escritórios e moradias corporativas, e seguimos ao lado da sua equipe depois da chegada." },
    tags: { EN: ["Home search", "School search", "Settling-in", "Corporate housing"], PT: ["Busca de imóvel", "Busca de escola", "Adaptação", "Moradia corporativa"] },
  },
  {
    key: "technology", icon: "tech",
    title: { EN: "Websites, Systems & Apps", PT: "Sites, Sistemas e Apps" },
    short: { EN: "Websites, management systems and iPhone/Android apps — including white-label systems and apps under your own brand.", PT: "Sites, sistemas de gestão e apps para iPhone e Android — incluindo sistemas e apps white label com a sua marca." },
    long: { EN: "Your operation in the new market needs to work from day one. We design and build websites, management systems, client portals and mobile apps — and offer white-label systems and apps that carry your brand.", PT: "Sua operação no novo mercado precisa funcionar desde o primeiro dia. Criamos sites, sistemas de gestão, portais para clientes e aplicativos — e oferecemos sistemas e apps white label com a sua marca." },
    more: { EN: "Including our own white-label platform, offered as a monthly subscription for companies in any sector.", PT: "Incluindo a nossa própria plataforma white label, oferecida por assinatura mensal para empresas de qualquer setor." },
    tags: { EN: ["Websites", "Systems", "iPhone & Android", "White label"], PT: ["Sites", "Sistemas", "iPhone e Android", "White label"] },
  },
  {
    key: "marketing", icon: "marketing",
    title: { EN: "Marketing & Branding", PT: "Marketing e Branding" },
    short: { EN: "Brand identity, digital marketing, social media and campaigns that bring in clients from day one.", PT: "Identidade de marca, marketing digital, redes sociais e campanhas que trazem clientes desde o primeiro dia." },
    long: { EN: "A new market doesn't know you yet. We adapt or create your brand identity, build your presence online and run the campaigns that introduce your company to the right audience.", PT: "Um novo mercado ainda não conhece você. Adaptamos ou criamos a identidade da sua marca, construímos sua presença digital e conduzimos as campanhas que apresentam sua empresa ao público certo." },
    more: { EN: "Content, social media, launch events and local press — in English and Portuguese.", PT: "Conteúdo, redes sociais, eventos de lançamento e imprensa local — em inglês e português." },
    tags: { EN: ["Brand identity", "Digital marketing", "Social media", "Launch campaigns"], PT: ["Identidade de marca", "Marketing digital", "Redes sociais", "Campanhas de lançamento"] },
  },
  {
    key: "support", icon: "support",
    title: { EN: "Operational Support", PT: "Suporte Operacional" },
    short: { EN: "On-the-ground coordination after launch, so the plan becomes a running business.", PT: "Coordenação local depois do lançamento, para que o plano vire um negócio em operação." },
    long: { EN: "The work doesn't end at launch. We coordinate suppliers, hiring, permits and day-to-day operations on the ground while your team settles in.", PT: "O trabalho não termina no lançamento. Coordenamos fornecedores, contratações, autorizações e a operação do dia a dia enquanto sua equipe se adapta." },
    more: { EN: "One point of contact, for as long as you need us.", PT: "Um só ponto de contato, pelo tempo que você precisar." },
    tags: { EN: ["Supplier coordination", "Hiring support", "Day-to-day operations"], PT: ["Coordenação de fornecedores", "Apoio a contratações", "Operação do dia a dia"] },
  },
];
