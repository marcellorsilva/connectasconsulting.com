// Full service pages (one per service, EN/PT). Written for all three markets: the United States, Brazil and Guyana.
// General information only — legal, tax and immigration work is coordinated with licensed professionals.
type T = { EN: string; PT: string };
type L2 = { EN: string[]; PT: string[] };
export interface Detail {
  key: string; img: string;
  h1: T; lead: T;
  stagesTitle: T; stages: { t: T; items: L2 }[];
  countries: { US: T; BR: T; GY: T };
  forWho: L2;
  outcomes: T[];
  faq: [T, T][];
}

export const DETAILS: Detail[] = [
  {
    key: "business-plans", img: "usa2",
    h1: { EN: "A business plan built on how each country really works.", PT: "Um plano de negócios feito com base em como cada país realmente funciona." },
    lead: { EN: "Before you spend on a new market, you need numbers you can trust. We build business plans with local costs, taxes, timelines and risks — ready for your board, your bank or your investors.", PT: "Antes de investir em um novo mercado, você precisa de números confiáveis. Construímos planos de negócios com custos, impostos, prazos e riscos locais — prontos para o seu conselho, o seu banco ou os seus investidores." },
    stagesTitle: { EN: "What the plan covers", PT: "O que o plano cobre" },
    stages: [
      { t: { EN: "Market", PT: "Mercado" }, items: { EN: ["Market size and demand", "Competitors and pricing", "Target clients and channels", "Regulation that affects the business"], PT: ["Tamanho do mercado e demanda", "Concorrentes e preços", "Clientes-alvo e canais", "Regulação que afeta o negócio"] } },
      { t: { EN: "Structure", PT: "Estrutura" }, items: { EN: ["Entry model: company, branch or partnership", "Licences and registrations", "Tax overview by country", "Local content and hiring rules"], PT: ["Modelo de entrada: empresa, filial ou parceria", "Licenças e registros", "Visão tributária por país", "Conteúdo local e regras de contratação"] } },
      { t: { EN: "Numbers", PT: "Números" }, items: { EN: ["Set-up and operating costs", "Salaries and real cost of hiring", "Revenue and cash-flow projections", "Break-even and return on investment"], PT: ["Custos de abertura e de operação", "Salários e custo real de contratação", "Projeções de receita e fluxo de caixa", "Ponto de equilíbrio e retorno do investimento"] } },
      { t: { EN: "Execution", PT: "Execução" }, items: { EN: ["Timeline and milestones", "Risks and how to reduce them", "Team and people plan", "Investor- and bank-ready presentation"], PT: ["Cronograma e marcos", "Riscos e como reduzi-los", "Plano de equipe e pessoas", "Apresentação pronta para investidores e bancos"] } },
    ],
    countries: {
      US: { EN: "State-by-state differences in company law, taxes and hiring, and plans formatted for U.S. investors and lenders.", PT: "Diferenças de estado para estado em lei societária, impostos e contratação, e planos no formato esperado por investidores e bancos americanos." },
      BR: { EN: "Brazilian tax regimes compared side by side, the 2026–2033 tax reform built into the projections, and the full cost of CLT employees.", PT: "Regimes tributários brasileiros comparados lado a lado, a reforma tributária de 2026–2033 incluída nas projeções e o custo completo de funcionários CLT." },
      GY: { EN: "Real costs of housing, offices and staff in Georgetown, corporation tax and VAT, and local content requirements when you serve the oil and gas sector.", PT: "Custos reais de moradia, escritório e equipe em Georgetown, imposto de renda das empresas e VAT, e as exigências de conteúdo local para quem atende o setor de óleo e gás." },
    },
    forWho: { EN: ["Companies deciding whether to enter a new country", "Founders raising capital or bank financing", "Investors evaluating an opportunity", "Boards that need a clear go / no-go"], PT: ["Empresas decidindo se entram em um novo país", "Empreendedores buscando investimento ou financiamento", "Investidores avaliando uma oportunidade", "Conselhos que precisam de uma decisão clara de seguir ou não"] },
    outcomes: [
      { EN: "A clear decision before you commit capital", PT: "Uma decisão clara antes de comprometer capital" },
      { EN: "A document investors and banks take seriously", PT: "Um documento que investidores e bancos levam a sério" },
      { EN: "A roadmap the whole team can follow", PT: "Um roteiro que toda a equipe consegue seguir" },
    ],
    faq: [
      [{ EN: "How long does a business plan take?", PT: "Quanto tempo leva um plano de negócios?" }, { EN: "Usually a few weeks, depending on how much information you already have and how many countries are involved. We agree the timeline in the proposal.", PT: "Normalmente algumas semanas, dependendo das informações que você já tem e de quantos países estão envolvidos. Combinamos o prazo na proposta." }],
      [{ EN: "Can it be in English and Portuguese?", PT: "Pode ser em inglês e português?" }, { EN: "Yes. Many clients need one version for headquarters and another for local partners or banks.", PT: "Sim. Muitos clientes precisam de uma versão para a matriz e outra para parceiros ou bancos locais." }],
      [{ EN: "Do you also execute the plan?", PT: "Vocês também executam o plano?" }, { EN: "Yes — that is the point. The same team can register the company, relocate your people, build your technology and launch your brand.", PT: "Sim — essa é a ideia. A mesma equipe pode abrir a empresa, realocar as pessoas, construir a tecnologia e lançar a marca." }],
    ],
  },
  {
    key: "registration", img: "guyana2",
    h1: { EN: "Your company, set up correctly from day one.", PT: "Sua empresa, aberta do jeito certo desde o primeiro dia." },
    lead: { EN: "Company formation, licences, tax registrations and bank accounts in the United States, Brazil and Guyana — coordinated with licensed local professionals, so nothing has to be redone later.", PT: "Abertura de empresa, licenças, inscrições fiscais e contas bancárias nos Estados Unidos, no Brasil e na Guiana — coordenadas com profissionais locais habilitados, para que nada precise ser refeito depois." },
    stagesTitle: { EN: "From decision to operating company", PT: "Da decisão à empresa operando" },
    stages: [
      { t: { EN: "Before filing", PT: "Antes do registro" }, items: { EN: ["Choice of entity and structure", "Name check and reservation", "Shareholders, directors and representatives", "Document list, apostilles and translations"], PT: ["Escolha do tipo de empresa e da estrutura", "Consulta e reserva do nome", "Sócios, administradores e representantes", "Lista de documentos, apostilas e traduções"] } },
      { t: { EN: "Registration", PT: "Registro" }, items: { EN: ["Incorporation or branch registration", "Registered office and agent", "Articles, bylaws or operating agreement", "Company tax ID"], PT: ["Constituição da empresa ou registro de filial", "Sede e agente registrado", "Contrato social, estatuto ou operating agreement", "Cadastro fiscal da empresa"] } },
      { t: { EN: "Ready to operate", PT: "Pronta para operar" }, items: { EN: ["Tax, VAT and social-security registrations", "Sector licences and permits", "Corporate bank account", "Accounting and payroll set-up"], PT: ["Inscrições fiscais, de IVA e de previdência", "Licenças e alvarás do setor", "Conta bancária empresarial", "Contabilidade e folha de pagamento"] } },
      { t: { EN: "After set-up", PT: "Depois da abertura" }, items: { EN: ["Annual filings calendar", "Changes to shareholders or directors", "Registrations in new states or cities", "Closing or restructuring when needed"], PT: ["Calendário de obrigações anuais", "Alterações de sócios ou administradores", "Registros em novos estados ou cidades", "Encerramento ou reestruturação quando necessário"] } },
    ],
    countries: {
      US: { EN: "LLC or corporation, the right state for your activity, EIN with the IRS — including for non-residents — and the yearly filings that foreign owners must not miss.", PT: "LLC ou corporation, o estado certo para a sua atividade, EIN na Receita americana — inclusive para não residentes — e as obrigações anuais que sócios estrangeiros não podem esquecer." },
      BR: { EN: "Sociedade Limitada with a resident administrator, CPF or CNPJ for foreign partners, Junta Comercial, state and municipal registrations, and foreign-capital registration with the Central Bank.", PT: "Sociedade Limitada com administrador residente, CPF ou CNPJ para sócios estrangeiros, Junta Comercial, inscrições estadual e municipal e registro do capital estrangeiro no Banco Central." },
      GY: { EN: "Local company or external-company registration, GRA tax number, NIS employer registration and, for oil and gas suppliers, the Local Content Register.", PT: "Empresa local ou registro como external company, número fiscal na GRA, registro de empregador no NIS e, para fornecedores de óleo e gás, o Local Content Register." },
    },
    forWho: { EN: ["Foreign companies opening a subsidiary or branch", "Entrepreneurs starting a company abroad", "Groups adding a new country to their structure", "Companies that need to regularise an existing entity"], PT: ["Empresas estrangeiras abrindo subsidiária ou filial", "Empreendedores abrindo uma empresa no exterior", "Grupos incluindo um novo país na estrutura", "Empresas que precisam regularizar uma empresa existente"] },
    outcomes: [
      { EN: "A company that can invoice, hire and bank", PT: "Uma empresa que pode faturar, contratar e movimentar banco" },
      { EN: "No surprises with tax or compliance later", PT: "Sem surpresas fiscais ou de compliance depois" },
      { EN: "One point of contact across three countries", PT: "Um só ponto de contato nos três países" },
    ],
    faq: [
      [{ EN: "Do I need to travel to open the company?", PT: "Preciso viajar para abrir a empresa?" }, { EN: "Often not. Most steps can be done with powers of attorney and certified documents, although some banks ask for a visit in person.", PT: "Muitas vezes não. A maior parte das etapas pode ser feita com procuração e documentos certificados, embora alguns bancos peçam uma visita presencial." }],
      [{ EN: "Do you replace a lawyer or accountant?", PT: "Vocês substituem advogado ou contador?" }, { EN: "No. We coordinate independent licensed professionals in each country and keep the whole process moving, so you deal with one team.", PT: "Não. Coordenamos profissionais independentes e habilitados em cada país e mantemos o processo andando, para você lidar com uma só equipe." }],
      [{ EN: "How long does it take?", PT: "Quanto tempo leva?" }, { EN: "It depends on the country, the entity and the licences involved. You receive a realistic timeline before you commit.", PT: "Depende do país, do tipo de empresa e das licenças envolvidas. Você recebe um prazo realista antes de se comprometer." }],
    ],
  },
  {
    key: "market-entry", img: "brazil",
    h1: { EN: "Enter a new market with clarity — and the right introductions.", PT: "Entre em um novo mercado com clareza — e com as apresentações certas." },
    lead: { EN: "Registration makes you legal; it does not bring clients. We define how your company should position itself, who it should talk to first, and we open the doors to partners, suppliers and clients.", PT: "O registro deixa a empresa regular; não traz clientes. Definimos como a sua empresa deve se posicionar, com quem conversar primeiro e abrimos as portas para parceiros, fornecedores e clientes." },
    stagesTitle: { EN: "How we take you into the market", PT: "Como levamos você ao mercado" },
    stages: [
      { t: { EN: "Understand", PT: "Entender" }, items: { EN: ["Market and competitor study", "Customer interviews", "Pricing and margins", "Regulatory and cultural factors"], PT: ["Estudo de mercado e concorrentes", "Entrevistas com clientes", "Preços e margens", "Fatores regulatórios e culturais"] } },
      { t: { EN: "Decide", PT: "Decidir" }, items: { EN: ["Entry model and first city", "Positioning and value proposition", "Sales channels", "Partner versus own operation"], PT: ["Modelo de entrada e primeira cidade", "Posicionamento e proposta de valor", "Canais de venda", "Parceiro ou operação própria"] } },
      { t: { EN: "Connect", PT: "Conectar" }, items: { EN: ["Partner and distributor search", "Supplier shortlists", "Meetings with potential clients", "Trade events and associations"], PT: ["Busca de parceiros e distribuidores", "Lista de fornecedores", "Reuniões com potenciais clientes", "Eventos e associações do setor"] } },
      { t: { EN: "Launch", PT: "Lançar" }, items: { EN: ["Launch plan and first 90 days", "Local team and representatives", "Marketing and sales material", "Follow-up and adjustments"], PT: ["Plano de lançamento e primeiros 90 dias", "Equipe e representantes locais", "Materiais de marketing e vendas", "Acompanhamento e ajustes"] } },
    ],
    countries: {
      US: { EN: "A large, competitive market where positioning and the choice of first state or city decide how fast you grow.", PT: "Um mercado grande e competitivo, em que o posicionamento e a escolha do primeiro estado ou cidade decidem a velocidade do crescimento." },
      BR: { EN: "Business runs on relationships and local language — the right introductions and Portuguese-ready material save months.", PT: "Os negócios andam por relacionamento e no idioma local — as apresentações certas e materiais em português economizam meses." },
      GY: { EN: "A fast-growing market where partnerships with Guyanese companies matter, especially to serve the oil and gas supply chain.", PT: "Um mercado em rápido crescimento em que parcerias com empresas guianenses fazem diferença, principalmente para atender a cadeia de óleo e gás." },
    },
    forWho: { EN: ["Companies testing a new country", "Suppliers wanting to serve large local clients", "Brands looking for distributors", "Investors looking for local partners"], PT: ["Empresas testando um novo país", "Fornecedores que querem atender grandes clientes locais", "Marcas buscando distribuidores", "Investidores buscando parceiros locais"] },
    outcomes: [
      { EN: "A clear position in the new market", PT: "Um posicionamento claro no novo mercado" },
      { EN: "Real meetings with the right people", PT: "Reuniões reais com as pessoas certas" },
      { EN: "A launch plan for the first 90 days", PT: "Um plano de lançamento para os primeiros 90 dias" },
    ],
    faq: [
      [{ EN: "Can you find a local partner for us?", PT: "Vocês encontram um parceiro local para nós?" }, { EN: "Yes. We shortlist and meet potential partners with you, and help structure the relationship with licensed professionals.", PT: "Sim. Selecionamos e encontramos possíveis parceiros com você, e ajudamos a estruturar a relação com profissionais habilitados." }],
      [{ EN: "Do we need to open a company first?", PT: "Precisamos abrir a empresa antes?" }, { EN: "Not always. Testing the market through a partner or distributor can come first — the study tells you which path makes sense.", PT: "Nem sempre. Testar o mercado por meio de um parceiro ou distribuidor pode vir antes — o estudo mostra qual caminho faz sentido." }],
    ],
  },
  {
    key: "relocation", img: "guyana",
    h1: { EN: "Relocation that feels like arriving home.", PT: "Uma realocação com sensação de chegar em casa." },
    lead: { EN: "One partner for the whole move, in the United States, Brazil and Guyana. Every service is organised around the person's journey — before arrival, settling in, during the assignment and departure — following international mobility practice and your company's policy.", PT: "Um só parceiro para toda a mudança, nos Estados Unidos, no Brasil e na Guiana. Cada serviço é organizado em torno da jornada da pessoa — antes da chegada, na chegada, durante a estadia e na partida — seguindo as boas práticas internacionais de mobilidade e a política da sua empresa." },
    stagesTitle: { EN: "The whole journey, step by step", PT: "A jornada completa, passo a passo" },
    stages: [
      { t: { EN: "Before arrival", PT: "Antes da chegada" }, items: { EN: ["Needs assessment and move plan", "Immigration coordinated with licensed partners", "Temporary accommodation", "Translation of documents", "Pet transportation"], PT: ["Levantamento de necessidades e plano da mudança", "Imigração coordenada com parceiros habilitados", "Hospedagem temporária", "Tradução de documentos", "Transporte de animais de estimação"] } },
      { t: { EN: "Arrival & settling in", PT: "Chegada e adaptação" }, items: { EN: ["Airport pickup", "Orientation tour of the city", "Home search and lease negotiation", "School search and enrolment", "Bank account, tax ID, phone and utilities", "Driver's licence"], PT: ["Recepção no aeroporto", "Tour de orientação pela cidade", "Busca de imóvel e negociação do contrato", "Busca e matrícula escolar", "Conta bancária, cadastro fiscal, celular e serviços da casa", "Carteira de motorista"] } },
      { t: { EN: "During the assignment", PT: "Durante a estadia" }, items: { EN: ["24-hour assistance", "Ongoing support for the family", "Rent and bill payments", "Maintenance and repairs", "Lease renewal"], PT: ["Atendimento 24 horas", "Suporte contínuo à família", "Pagamento de aluguel e contas", "Manutenção e reparos", "Renovação do contrato de locação"] } },
      { t: { EN: "Departure", PT: "Partida" }, items: { EN: ["Move-out inventory and inspection", "Packing, logistics and storage", "Lease closure and deposit return", "Closing accounts and paperwork", "Farewell support"], PT: ["Inventário e vistoria de saída", "Embalagem, logística e armazenagem", "Encerramento do contrato e devolução da caução", "Encerramento de contas e documentação", "Apoio na despedida"] } },
    ],
    countries: {
      US: { EN: "Credit history, school districts and car-dependent cities shape every move. We help with leases for newcomers without a U.S. credit record, choose homes and schools together, and get the first practical steps done fast.", PT: "Histórico de crédito, distritos escolares e cidades dependentes de carro moldam cada mudança. Ajudamos com contratos para quem chega sem histórico de crédito americano, escolhemos casa e escola juntos e resolvemos rápido os primeiros passos práticos." },
      BR: { EN: "Almost everything starts with a CPF, leases ask for a guarantee and Portuguese is part of daily life. We get the essentials done in the first week and support the family in their own language.", PT: "Quase tudo começa com o CPF, os aluguéis pedem garantia e o português faz parte do dia a dia. Resolvemos o essencial na primeira semana e apoiamos a família no idioma dela." },
      GY: { EN: "Demand for good housing is high, power and water back-up matter, and schools fill early. We inspect every home before move-in, document its condition and stay as the family's single point of contact.", PT: "A procura por boa moradia é alta, gerador e reservatório de água fazem diferença e as escolas lotam cedo. Vistoriamos cada casa antes da mudança, registramos o estado do imóvel e seguimos como o ponto de contato único da família." },
    },
    forWho: { EN: ["Companies moving executives and key staff", "Oil, gas and energy rotations", "Families relocating with children", "Diplomatic and government programmes", "Entrepreneurs moving with their business", "Individuals starting a new life abroad"], PT: ["Empresas transferindo executivos e profissionais-chave", "Rodízios de óleo, gás e energia", "Famílias se mudando com filhos", "Programas diplomáticos e governamentais", "Empreendedores que se mudam com o negócio", "Pessoas começando uma nova vida no exterior"] },
    outcomes: [
      { EN: "People productive from the first week", PT: "Pessoas produtivas desde a primeira semana" },
      { EN: "Families that feel looked after", PT: "Famílias que se sentem cuidadas" },
      { EN: "HR with full visibility and control of the budget", PT: "RH com visibilidade total e controle do orçamento" },
    ],
    faq: [
      [{ EN: "Do you work with company policies and budgets?", PT: "Vocês trabalham com política e orçamento da empresa?" }, { EN: "Yes. We follow each company's mobility policy and budget, and HR follows every step and approval online.", PT: "Sim. Seguimos a política de mobilidade e o orçamento de cada empresa, e o RH acompanha cada etapa e aprovação online." }],
      [{ EN: "Can individuals hire you, not only companies?", PT: "Pessoas físicas podem contratar, não só empresas?" }, { EN: "Yes. Families and entrepreneurs moving on their own can choose the services they need.", PT: "Sim. Famílias e empreendedores que se mudam por conta própria podem escolher os serviços de que precisam." }],
      [{ EN: "What about visas and work permits?", PT: "E vistos e autorizações de trabalho?" }, { EN: "Immigration is handled with licensed immigration professionals in each country; we coordinate it with the rest of the move.", PT: "A parte imigratória é feita com profissionais de imigração habilitados em cada país; nós a coordenamos com o restante da mudança." }],
    ],
  },
  {
    key: "technology", img: "tech",
    h1: { EN: "Websites, systems and apps that run your business.", PT: "Sites, sistemas e apps que fazem o seu negócio funcionar." },
    lead: { EN: "From your first website to the system your whole team runs on — and apps for iPhone and Android under your brand. Built for how your company works, live on your domain, in English and Portuguese.", PT: "Do seu primeiro site ao sistema que toda a equipe usa — e apps para iPhone e Android com a sua marca. Feitos para o jeito que sua empresa trabalha, no seu domínio, em inglês e português." },
    stagesTitle: { EN: "What we build", PT: "O que construímos" },
    stages: [
      { t: { EN: "Websites", PT: "Sites" }, items: { EN: ["Corporate and product websites", "Bilingual content", "Search-engine ready", "Forms connected to your CRM"], PT: ["Sites institucionais e de produto", "Conteúdo bilíngue", "Pronto para buscadores", "Formulários ligados ao seu CRM"] } },
      { t: { EN: "Systems", PT: "Sistemas" }, items: { EN: ["Management systems and CRM", "Client and partner portals", "Bookings and operations", "Finance, billing and reports"], PT: ["Sistemas de gestão e CRM", "Portais de clientes e parceiros", "Agendamentos e operações", "Financeiro, cobrança e relatórios"] } },
      { t: { EN: "Apps", PT: "Apps" }, items: { EN: ["iPhone and Android apps", "Face ID and notifications", "Photos, documents and chat", "Published under your company"], PT: ["Apps para iPhone e Android", "Face ID e notificações", "Fotos, documentos e chat", "Publicados em nome da sua empresa"] } },
      { t: { EN: "White label", PT: "White label" }, items: { EN: ["Our platform under your brand", "Your domain and colours", "Monthly subscription by module", "Support and updates included"], PT: ["Nossa plataforma com a sua marca", "Seu domínio e suas cores", "Assinatura mensal por módulo", "Suporte e atualizações incluídos"] } },
    ],
    countries: {
      US: { EN: "Payments, privacy rules and English-first experiences for U.S. customers.", PT: "Pagamentos, regras de privacidade e experiência em inglês para clientes americanos." },
      BR: { EN: "Portuguese interfaces, Brazilian payment methods through your provider and LGPD-ready data handling.", PT: "Interfaces em português, meios de pagamento brasileiros pelo seu provedor e tratamento de dados adequado à LGPD." },
      GY: { EN: "Systems that work with local realities — connectivity, currency and Guyana's Data Protection Act.", PT: "Sistemas que funcionam com a realidade local — conectividade, moeda e a Lei de Proteção de Dados da Guiana." },
    },
    forWho: { EN: ["Companies replacing spreadsheets", "Service businesses with field teams", "Firms that want a client portal", "Companies that want their own app"], PT: ["Empresas que querem sair das planilhas", "Empresas de serviços com equipes de campo", "Empresas que querem um portal do cliente", "Empresas que querem o próprio app"] },
    outcomes: [
      { EN: "One place for the whole operation", PT: "Um só lugar para toda a operação" },
      { EN: "A professional presence online", PT: "Uma presença online profissional" },
      { EN: "Technology that grows with you", PT: "Tecnologia que cresce com você" },
    ],
    faq: [
      [{ EN: "Do we own what you build?", PT: "Ficamos donos do que vocês constroem?" }, { EN: "Custom websites and systems are transferred to you as agreed in the proposal. The white-label platform is licensed by subscription.", PT: "Sites e sistemas sob medida são transferidos a você conforme a proposta. A plataforma white label é licenciada por assinatura." }],
      [{ EN: "Can you work with our current system?", PT: "Vocês trabalham com o nosso sistema atual?" }, { EN: "Yes. We can integrate with what you already use, or migrate your data when it is time to change.", PT: "Sim. Podemos integrar com o que você já usa ou migrar seus dados quando for hora de trocar." }],
    ],
  },
  {
    key: "marketing", img: "usa",
    h1: { EN: "A brand that speaks for you, from the first contact.", PT: "Uma marca que fala por você desde o primeiro contato." },
    lead: { EN: "A new market doesn't know you yet. We shape how your company presents itself — name, identity, website, social media, proposals and campaigns — so every touchpoint tells the same story.", PT: "Um novo mercado ainda não conhece você. Definimos como sua empresa se apresenta — nome, identidade, site, redes sociais, propostas e campanhas — para que cada ponto de contato conte a mesma história." },
    stagesTitle: { EN: "From positioning to campaigns", PT: "Do posicionamento às campanhas" },
    stages: [
      { t: { EN: "Positioning", PT: "Posicionamento" }, items: { EN: ["Audience and competitors", "Message and tone of voice", "Name and tagline review", "Adaptation for each country"], PT: ["Público e concorrentes", "Mensagem e tom de voz", "Revisão de nome e slogan", "Adaptação para cada país"] } },
      { t: { EN: "Identity", PT: "Identidade" }, items: { EN: ["Logo and visual identity", "Colours and typography", "E-mail signatures and templates", "Presentations and proposals"], PT: ["Logo e identidade visual", "Cores e tipografia", "Assinaturas e modelos de e-mail", "Apresentações e propostas"] } },
      { t: { EN: "Presence", PT: "Presença" }, items: { EN: ["Website and landing pages", "Social media profiles", "Content calendar", "Photography and video direction"], PT: ["Site e páginas de campanha", "Perfis nas redes sociais", "Calendário de conteúdo", "Direção de fotos e vídeos"] } },
      { t: { EN: "Campaigns", PT: "Campanhas" }, items: { EN: ["Launch campaign", "Paid media and search", "Events and local press", "Results and reports"], PT: ["Campanha de lançamento", "Mídia paga e buscadores", "Eventos e imprensa local", "Resultados e relatórios"] } },
    ],
    countries: {
      US: { EN: "Clear, direct messages in English for a competitive market with high expectations for brand quality.", PT: "Mensagens claras e diretas em inglês para um mercado competitivo e exigente com a qualidade da marca." },
      BR: { EN: "Portuguese that sounds native, strong social media presence and relationship-driven campaigns.", PT: "Português com cara de nativo, presença forte nas redes sociais e campanhas baseadas em relacionamento." },
      GY: { EN: "A small, connected business community where reputation, events and local press carry real weight.", PT: "Uma comunidade de negócios pequena e conectada, em que reputação, eventos e imprensa local têm muito peso." },
    },
    forWho: { EN: ["Companies launching in a new country", "Brands that need a refresh", "Businesses with an inconsistent image", "Teams that need proposals that win"], PT: ["Empresas lançando em um novo país", "Marcas que precisam de renovação", "Negócios com imagem desalinhada", "Equipes que precisam de propostas que vencem"] },
    outcomes: [
      { EN: "Recognised and trusted faster", PT: "Reconhecido e confiável mais rápido" },
      { EN: "Every touchpoint telling the same story", PT: "Cada ponto de contato contando a mesma história" },
      { EN: "Campaigns measured by results", PT: "Campanhas medidas por resultado" },
    ],
    faq: [
      [{ EN: "Can you work with our existing brand?", PT: "Vocês trabalham com a marca que já temos?" }, { EN: "Yes. Often the brand only needs adapting for a new country and language, not replacing.", PT: "Sim. Muitas vezes a marca só precisa ser adaptada a um novo país e idioma, não substituída." }],
      [{ EN: "Do you manage social media every month?", PT: "Vocês cuidam das redes sociais todo mês?" }, { EN: "We can run it month by month or train your team to do it with the plan and templates we create.", PT: "Podemos conduzir mês a mês ou treinar sua equipe para fazer com o plano e os modelos que criamos." }],
    ],
  },
  {
    key: "support", img: "stat",
    h1: { EN: "On the ground with you, after the launch.", PT: "Ao seu lado no dia a dia, depois do lançamento." },
    lead: { EN: "Opening is only the beginning. We coordinate suppliers, people, offices and day-to-day issues in the United States, Brazil and Guyana while your operation finds its rhythm — with one point of contact for everything.", PT: "Abrir é só o começo. Coordenamos fornecedores, pessoas, escritórios e as questões do dia a dia nos Estados Unidos, no Brasil e na Guiana enquanto sua operação ganha ritmo — com um só ponto de contato para tudo." },
    stagesTitle: { EN: "What we take care of", PT: "Do que cuidamos" },
    stages: [
      { t: { EN: "Places", PT: "Espaços" }, items: { EN: ["Office and warehouse search", "Corporate housing", "Maintenance and repairs", "Utilities and services"], PT: ["Busca de escritório e depósito", "Moradia corporativa", "Manutenção e reparos", "Serviços de água, energia e internet"] } },
      { t: { EN: "People", PT: "Pessoas" }, items: { EN: ["Local hiring support", "Onboarding of new staff", "Rotations and travel", "Support for families"], PT: ["Apoio às contratações locais", "Integração de novos funcionários", "Rodízios e viagens", "Apoio às famílias"] } },
      { t: { EN: "Suppliers", PT: "Fornecedores" }, items: { EN: ["Supplier search and quotes", "Contracts and follow-up", "Quality and deadlines", "Payments and approvals"], PT: ["Busca e cotação de fornecedores", "Contratos e acompanhamento", "Qualidade e prazos", "Pagamentos e aprovações"] } },
      { t: { EN: "Compliance", PT: "Compliance" }, items: { EN: ["Licences and renewals", "Annual filings calendar", "Local content reporting", "Reports for headquarters"], PT: ["Licenças e renovações", "Calendário de obrigações anuais", "Relatórios de conteúdo local", "Relatórios para a matriz"] } },
    ],
    countries: {
      US: { EN: "Vendors, offices and filings across states, coordinated from one place.", PT: "Fornecedores, escritórios e obrigações em vários estados, coordenados em um só lugar." },
      BR: { EN: "Bureaucracy, suppliers and employees handled with Brazilian know-how and in Portuguese.", PT: "Burocracia, fornecedores e funcionários resolvidos com experiência brasileira e em português." },
      GY: { EN: "Reliable local partners for maintenance, housing, transport and services — and local content reporting when it applies.", PT: "Parceiros locais confiáveis para manutenção, moradia, transporte e serviços — e relatórios de conteúdo local quando aplicável." },
    },
    forWho: { EN: ["Companies in their first year abroad", "Headquarters managing a remote team", "Projects with rotational staff", "Companies without a local office yet"], PT: ["Empresas no primeiro ano no exterior", "Matrizes gerenciando uma equipe à distância", "Projetos com equipes em rodízio", "Empresas que ainda não têm escritório local"] },
    outcomes: [
      { EN: "Problems solved before they reach you", PT: "Problemas resolvidos antes de chegarem até você" },
      { EN: "A team focused on the business, not the logistics", PT: "Uma equipe focada no negócio, não na logística" },
      { EN: "Clear monthly reporting", PT: "Relatórios mensais claros" },
    ],
    faq: [
      [{ EN: "Is this a monthly service?", PT: "É um serviço mensal?" }, { EN: "Usually yes, with a scope agreed in the proposal. It can also cover a specific project or period.", PT: "Normalmente sim, com escopo definido na proposta. Também pode cobrir um projeto ou período específico." }],
      [{ EN: "Can it start before we have a local office?", PT: "Pode começar antes de termos escritório local?" }, { EN: "Yes. Many clients use us as their local presence while they set up.", PT: "Sim. Muitos clientes usam a Connectas como presença local enquanto se instalam." }],
    ],
  },
];
