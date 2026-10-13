// Country pages: practical, sourced content. General information only — not legal or tax advice.
// Figures checked in October 2026 against the sources listed for each country.
type T = { EN: string; PT: string };
export interface CountryData {
  name: T; h1: T; lead: T;
  facts: [T, T, string][];
  overview: T[];
  sectors: { EN: string[]; PT: string[] };
  setupIntro: T;
  setup: [T, T][];
  rules: [T, T][];
  living: T; livingList: T[];
  how: T;
  faq: [T, T][];
  sources: [string, string][];
}

export const COUNTRIES: Record<"guyana" | "brazil" | "usa", CountryData> = {
  guyana: {
    name: { EN: "Guyana", PT: "Guiana" },
    h1: { EN: "Doing business in Guyana.", PT: "Fazer negócios na Guiana." },
    lead: { EN: "One of the fastest-growing economies in the world, the only English-speaking country in South America — and Brazil's neighbour by road.", PT: "Uma das economias que mais crescem no mundo, o único país de língua inglesa da América do Sul — e vizinho do Brasil por estrada." },
    facts: [
      [{ EN: "19%+", PT: "19%+" }, { EN: "Real GDP growth in 2025", PT: "Crescimento real do PIB em 2025" }, "IMF, 2026"],
      [{ EN: "~14%", PT: "~14%" }, { EN: "Growth of the non-oil economy in 2025", PT: "Crescimento da economia não petrolífera em 2025" }, "IMF, 2026"],
      [{ EN: "900k+", PT: "900 mil+" }, { EN: "Barrels of oil per day by the end of 2025", PT: "Barris de petróleo por dia no fim de 2025" }, "IMF, 2026"],
      [{ EN: "English", PT: "Inglês" }, { EN: "Official language, common-law legal system", PT: "Idioma oficial, sistema jurídico de common law" }, ""],
    ],
    overview: [
      { EN: "Since oil production began at the end of 2019, Guyana has grown faster than almost any economy in the world. What matters for new companies is that growth has spread well beyond oil: the IMF reports that the non-oil economy grew about 14% in 2025, led by construction, with agriculture, mining and manufacturing also contributing.", PT: "Desde o início da produção de petróleo, no fim de 2019, a Guiana cresceu mais do que quase qualquer economia do mundo. O que importa para novas empresas é que esse crescimento foi além do petróleo: segundo o FMI, a economia não petrolífera cresceu cerca de 14% em 2025, puxada pela construção, com contribuição da agricultura, da mineração e da indústria." },
      { EN: "The government is investing heavily in infrastructure — a new four-lane bridge over the Demerara River, a paved road towards the Brazilian border, housing and hospitals — and international hotel groups are arriving in Georgetown. Demand for reliable suppliers, housing, services and skilled people is greater than local supply in many sectors.", PT: "O governo investe pesado em infraestrutura — uma nova ponte de quatro faixas sobre o rio Demerara, uma estrada asfaltada rumo à fronteira com o Brasil, moradias e hospitais — e grandes redes hoteleiras estão chegando a Georgetown. Em muitos setores, a demanda por fornecedores confiáveis, moradia, serviços e mão de obra qualificada é maior do que a oferta local." },
    ],
    sectors: {
      EN: ["Construction & engineering", "Oil & gas supply chain", "Hospitality & tourism", "Agriculture & agro-processing", "Logistics & transport", "Real estate & housing", "Healthcare & education services", "Technology & business services"],
      PT: ["Construção e engenharia", "Cadeia de óleo e gás", "Hotelaria e turismo", "Agricultura e agroindústria", "Logística e transporte", "Imóveis e moradia", "Serviços de saúde e educação", "Tecnologia e serviços empresariais"],
    },
    setupIntro: { EN: "A foreign company can operate in Guyana either through a new company incorporated locally or by registering its existing company as an external company. The usual path looks like this:", PT: "Uma empresa estrangeira pode atuar na Guiana abrindo uma empresa local ou registrando a empresa que já tem como empresa externa (external company). O caminho mais comum é este:" },
    setup: [
      [{ EN: "Choose the structure", PT: "Escolher a estrutura" }, { EN: "A local company under the Companies Act, a branch registered as an external company, or a joint venture with Guyanese partners — the choice affects tax, liability and local content.", PT: "Empresa local pela Companies Act, filial registrada como external company ou joint venture com sócios guianenses — a escolha afeta impostos, responsabilidade e conteúdo local." }],
      [{ EN: "Register the company", PT: "Registrar a empresa" }, { EN: "Name approval and incorporation (or external-company registration) with the Deeds and Commercial Registries Authority, with a registered office in Guyana.", PT: "Aprovação do nome e constituição (ou registro como external company) na Deeds and Commercial Registries Authority, com sede registrada na Guiana." }],
      [{ EN: "Tax and social security", PT: "Impostos e previdência" }, { EN: "Taxpayer Identification Number (TIN) with the Guyana Revenue Authority, VAT registration where it applies, and employer registration with the National Insurance Scheme (NIS).", PT: "Número de contribuinte (TIN) na Guyana Revenue Authority, inscrição no VAT quando aplicável e registro como empregador no National Insurance Scheme (NIS)." }],
      [{ EN: "Licences and local content", PT: "Licenças e conteúdo local" }, { EN: "Sector licences, and — for suppliers to the oil and gas sector — registration with the Local Content Secretariat.", PT: "Licenças do setor e — para fornecedores do setor de óleo e gás — registro na Local Content Secretariat." }],
      [{ EN: "Bank, office and people", PT: "Banco, escritório e pessoas" }, { EN: "Corporate bank account, office or warehouse, local hiring, and housing and relocation for the people you bring in.", PT: "Conta bancária, escritório ou depósito, contratações locais e moradia e realocação das pessoas que você trouxer." }],
    ],
    rules: [
      [{ EN: "Corporation tax", PT: "Imposto de renda das empresas" }, { EN: "25% for most companies and 40% for commercial companies (mainly trading goods they don't manufacture, telecoms, banking and insurance), with a 2% minimum on turnover for commercial companies. From 2026, income from agriculture and agro-processing is exempt.", PT: "25% para a maioria das empresas e 40% para empresas comerciais (principalmente revenda de mercadorias que não fabricam, telecomunicações, bancos e seguros), com mínimo de 2% sobre o faturamento para as comerciais. Desde 2026, a renda de agricultura e agroindústria é isenta." }],
      [{ EN: "VAT", PT: "VAT (IVA)" }, { EN: "Standard rate of 14%, with 0% on exports and exemptions for items such as residential rent, education and financial services.", PT: "Alíquota padrão de 14%, com 0% nas exportações e isenção para itens como aluguel residencial, educação e serviços financeiros." }],
      [{ EN: "Local Content Act 2021", PT: "Lei de Conteúdo Local de 2021" }, { EN: "To count as a \"Guyanese company\", a business must be at least 51% owned by Guyanese nationals, with Guyanese nationals in at least 75% of senior roles and 90% of other roles. Only registered companies count towards local content targets, and fines for non-compliance reach GY$50 million — which is why many foreign firms enter through structured partnerships.", PT: "Para ser considerada \"empresa guianense\", a empresa precisa ter pelo menos 51% de capital de guianenses, com guianenses em pelo menos 75% dos cargos de liderança e 90% dos demais. Só empresas registradas contam para as metas de conteúdo local, e as multas chegam a GY$ 50 milhões — por isso muitas empresas estrangeiras entram por meio de parcerias bem estruturadas." }],
      [{ EN: "People and permits", PT: "Pessoas e autorizações" }, { EN: "Foreign staff need the right immigration status to work. We coordinate permits with licensed local professionals and plan local hiring from the start.", PT: "Profissionais estrangeiros precisam da situação migratória correta para trabalhar. Coordenamos as autorizações com profissionais locais habilitados e planejamos as contratações locais desde o início." }],
    ],
    living: { EN: "Georgetown is the business centre, and most foreign professionals live in and around the capital. Life runs in English, with a Caribbean rhythm and a mix of cultures. Demand for good housing is high, so homes, leases and schools need to be planned before people arrive.", PT: "Georgetown é o centro dos negócios, e a maioria dos profissionais estrangeiros mora na capital e arredores. A vida acontece em inglês, com ritmo caribenho e mistura de culturas. A procura por boa moradia é alta, por isso casas, contratos e escolas precisam ser planejados antes da chegada." },
    livingList: [
      { EN: "Housing: furnished homes and apartments are in demand — inspect before signing and agree on maintenance in the lease.", PT: "Moradia: casas e apartamentos mobiliados são disputados — vistorie antes de assinar e defina a manutenção no contrato." },
      { EN: "Schools: international options in Georgetown fill up early; apply as soon as the move is confirmed.", PT: "Escolas: as opções internacionais em Georgetown lotam cedo; inscreva-se assim que a mudança for confirmada." },
      { EN: "Daily life: tropical climate all year, driving on the left, and a growing choice of restaurants, gyms and services.", PT: "Dia a dia: clima tropical o ano todo, mão inglesa no trânsito e cada vez mais opções de restaurantes, academias e serviços." },
    ],
    how: { EN: "We write your plan with Guyanese costs and taxes, register the company, structure local partnerships where local content applies, house and relocate your team, and build your website, systems and launch marketing — with people on the ground in Georgetown.", PT: "Escrevemos seu plano com custos e impostos guianenses, registramos a empresa, estruturamos parcerias locais quando há conteúdo local, cuidamos da moradia e da realocação da equipe e criamos site, sistemas e marketing de lançamento — com gente presente em Georgetown." },
    faq: [
      [{ EN: "Can a foreigner own 100% of a company in Guyana?", PT: "Um estrangeiro pode ter 100% de uma empresa na Guiana?" }, { EN: "Foreign ownership is generally allowed under the Companies Act. To be treated as a Guyanese company under the Local Content Act, however, at least 51% must be owned by Guyanese nationals — which matters if you want to supply the oil and gas sector.", PT: "Em geral, a Companies Act permite capital estrangeiro. Mas, para ser tratada como empresa guianense pela Lei de Conteúdo Local, pelo menos 51% precisa pertencer a guianenses — o que importa se você quer fornecer para o setor de óleo e gás." }],
      [{ EN: "Do I need to be in Guyana to open the company?", PT: "Preciso estar na Guiana para abrir a empresa?" }, { EN: "Much of the work can be done with powers of attorney and certified documents. A visit is usually worth it for banking, office and partner meetings, and we organise it so the trip is productive.", PT: "Boa parte do trabalho pode ser feita com procuração e documentos certificados. Uma visita costuma valer a pena para banco, escritório e reuniões com parceiros, e nós a organizamos para a viagem render." }],
      [{ EN: "Are contracts and documents in English?", PT: "Contratos e documentos são em inglês?" }, { EN: "Yes. English is the official language and the legal system follows common law, which makes contracts familiar to U.S. and Caribbean companies. Brazilian companies usually need translations — we provide them.", PT: "Sim. O inglês é o idioma oficial e o sistema jurídico segue o common law, o que torna os contratos familiares para empresas americanas e caribenhas. Empresas brasileiras normalmente precisam de tradução — nós providenciamos." }],
    ],
    sources: [
      ["IMF Article IV mission, reported by Guyana Chronicle (Aug 2026)", "https://guyanachronicle.com/2026/08/02/imf-projects-five-more-years-of-strong-growth-for-guyana/"],
      ["PwC Worldwide Tax Summaries — Guyana", "https://taxsummaries.pwc.com/guyana/corporate/taxes-on-corporate-income"],
      ["EY — Doing business in Guyana (May 2026)", "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-gy/documents/ey-gy-doing-business-guide-05142026.pdf"],
      ["KPMG — Guyana 2026 budget tax measures", "https://kpmg.com/us/en/taxnewsflash/news/2026/01/guyana-tax-measures-2026-budget.html"],
      ["Local Content Act 2021 — \"Guyanese company\" definition (OilNOW)", "https://oilnow.gy/featured/local-content-bill-closes-door-to-imposters-schemers-with-clear-definition-for-guyanese-company/"],
    ],
  },

  brazil: {
    name: { EN: "Brazil", PT: "Brasil" },
    h1: { EN: "Doing business in Brazil.", PT: "Fazer negócios no Brasil." },
    lead: { EN: "Latin America's largest market — with its own rules, taxes and culture. We help U.S. and Guyanese companies get it right from the start.", PT: "O maior mercado da América Latina — com regras, impostos e cultura próprios. Ajudamos empresas americanas e guianenses a acertar desde o início." },
    facts: [
      [{ EN: "#1", PT: "Nº 1" }, { EN: "Largest economy in Latin America", PT: "Maior economia da América Latina" }, ""],
      [{ EN: "213M+", PT: "213 mi+" }, { EN: "People — a deep consumer market", PT: "Habitantes — um mercado consumidor profundo" }, "IBGE, 2025"],
      [{ EN: "2026–2033", PT: "2026–2033" }, { EN: "Transition to the new consumption taxes (CBS and IBS)", PT: "Transição para os novos tributos sobre consumo (CBS e IBS)" }, "LC 214/2025"],
      [{ EN: "Portuguese", PT: "Português" }, { EN: "Official language — local partners make the difference", PT: "Idioma oficial — parceiros locais fazem a diferença" }, ""],
    ],
    overview: [
      { EN: "Brazil combines a large domestic market with world-class agribusiness, energy and a fast-moving technology scene in São Paulo. For foreign companies, the opportunity is scale; the challenge is a complex legal and tax environment where details decide whether a business is profitable.", PT: "O Brasil reúne um grande mercado interno, um agronegócio de nível mundial, energia e um ambiente de tecnologia dinâmico em São Paulo. Para empresas estrangeiras, a oportunidade é a escala; o desafio é um ambiente jurídico e tributário complexo, em que os detalhes decidem se o negócio dá lucro." },
      { EN: "In the North, the state of Roraima borders Guyana: the BR-401 highway reaches Bonfim, where a bridge over the Takutu River connects to Lethem. As Guyana paves its road to the border, trade between Manaus, Boa Vista and Georgetown is gaining a practical land route.", PT: "No Norte, Roraima faz fronteira com a Guiana: a BR-401 chega a Bonfim, onde uma ponte sobre o rio Tacutu liga o Brasil a Lethem. Com a Guiana asfaltando a estrada até a fronteira, o comércio entre Manaus, Boa Vista e Georgetown ganha uma rota terrestre viável." },
    ],
    sectors: {
      EN: ["Agribusiness & food", "Energy, oil & gas", "Infrastructure", "Technology & fintech", "Consumer & retail", "Healthcare", "Logistics in the North", "Professional services"],
      PT: ["Agronegócio e alimentos", "Energia, óleo e gás", "Infraestrutura", "Tecnologia e fintech", "Consumo e varejo", "Saúde", "Logística no Norte", "Serviços profissionais"],
    },
    setupIntro: { EN: "Most foreign investors open a limited liability company (Sociedade Limitada, or Ltda.). The usual path looks like this:", PT: "A maioria dos investidores estrangeiros abre uma sociedade limitada (Ltda.). O caminho mais comum é este:" },
    setup: [
      [{ EN: "Taxpayer IDs for the partners", PT: "Cadastros dos sócios" }, { EN: "Foreign individuals need a CPF; foreign companies need a CNPJ and a non-resident registration with the Central Bank before sending money.", PT: "Pessoas físicas estrangeiras precisam de CPF; empresas estrangeiras precisam de CNPJ e de um cadastro de não residente no Banco Central antes de enviar recursos." }],
      [{ EN: "A resident administrator", PT: "Um administrador residente" }, { EN: "The company needs an administrator living in Brazil, and non-resident partners appoint a Brazil-resident legal representative.", PT: "A empresa precisa de um administrador residente no Brasil, e os sócios não residentes nomeiam um representante legal residente." }],
      [{ EN: "Documents", PT: "Documentos" }, { EN: "Foreign documents need an apostille and a sworn translation into Portuguese.", PT: "Documentos estrangeiros precisam de apostila e tradução juramentada para o português." }],
      [{ EN: "Registration", PT: "Registro" }, { EN: "Articles of association filed with the state commercial registry (Junta Comercial), then the company CNPJ and state and municipal registrations.", PT: "Contrato social registrado na Junta Comercial do estado, depois o CNPJ da empresa e as inscrições estadual e municipal." }],
      [{ EN: "Foreign capital and bank", PT: "Capital estrangeiro e banco" }, { EN: "Foreign capital must be registered with the Central Bank (RDE-IED) within 30 days of entering Brazil — it is what allows profits to be sent abroad later. Opening the bank account can take several weeks.", PT: "O capital estrangeiro precisa ser registrado no Banco Central (RDE-IED) em até 30 dias da entrada no país — é isso que permite remeter lucros depois. A abertura da conta bancária pode levar algumas semanas." }],
    ],
    rules: [
      [{ EN: "Tax regime", PT: "Regime tributário" }, { EN: "Companies with a partner living abroad cannot use the simplified Simples Nacional regime, so the choice is usually between Lucro Presumido and Lucro Real — a decision that changes the tax bill significantly.", PT: "Empresas com sócio domiciliado no exterior não podem optar pelo Simples Nacional, então a escolha costuma ser entre Lucro Presumido e Lucro Real — uma decisão que muda bastante a carga tributária." }],
      [{ EN: "Tax reform", PT: "Reforma tributária" }, { EN: "Between 2026 and 2033, PIS, Cofins, IPI, ICMS and ISS are being replaced by two new taxes, CBS (federal) and IBS (states and municipalities). 2026 is a test year; CBS starts being charged in 2027. Pricing and systems should be planned for the transition.", PT: "Entre 2026 e 2033, PIS, Cofins, IPI, ICMS e ISS estão sendo substituídos por dois novos tributos, a CBS (federal) e o IBS (estados e municípios). 2026 é ano de teste; a CBS passa a ser cobrada em 2027. Preços e sistemas devem ser planejados para a transição." }],
      [{ EN: "Employment", PT: "Trabalhista" }, { EN: "Employees under the CLT receive a 13th salary, paid holidays with a bonus and FGTS deposits, so the real cost of a hire is well above the monthly salary.", PT: "Funcionários pela CLT recebem 13º salário, férias com adicional e depósitos de FGTS, então o custo real de uma contratação fica bem acima do salário mensal." }],
      [{ EN: "Contracts and language", PT: "Contratos e idioma" }, { EN: "Official filings are in Portuguese, and relationships matter: introductions to the right partners and suppliers save months.", PT: "Os registros oficiais são em português, e o relacionamento conta: as apresentações certas a parceiros e fornecedores economizam meses." }],
    ],
    living: { EN: "Most foreign executives settle in São Paulo, Rio de Janeiro or the capital of the state where the operation is based. Daily life almost always requires a CPF — for a phone line, a lease or a bank account — so it should be one of the first steps.", PT: "A maioria dos executivos estrangeiros se instala em São Paulo, no Rio de Janeiro ou na capital do estado da operação. No dia a dia, quase tudo exige CPF — linha de celular, aluguel, conta bancária —, então ele deve ser um dos primeiros passos." },
    livingList: [
      { EN: "Housing: leases usually require a guarantee (insurance, deposit or guarantor) — plan it with the employer.", PT: "Moradia: o aluguel normalmente exige garantia (seguro-fiança, caução ou fiador) — planeje com a empresa." },
      { EN: "Schools: bilingual and international schools are widely available in large cities, with enrolment early in the year.", PT: "Escolas: há muitas escolas bilíngues e internacionais nas grandes cidades, com matrículas no início do ano." },
      { EN: "Language: some Portuguese goes a long way; we support families with orientation from the first week.", PT: "Idioma: um pouco de português ajuda muito; apoiamos as famílias com orientação desde a primeira semana." },
    ],
    how: { EN: "We prepare your business plan with real Brazilian costs and taxes, coordinate company formation with licensed accountants and lawyers, introduce you to partners and clients, relocate your people, and launch your brand in Portuguese.", PT: "Preparamos seu plano de negócios com custos e impostos brasileiros reais, coordenamos a abertura da empresa com contadores e advogados habilitados, apresentamos você a parceiros e clientes, realocamos sua equipe e lançamos sua marca em português." },
    faq: [
      [{ EN: "Do I need a Brazilian partner?", PT: "Preciso de um sócio brasileiro?" }, { EN: "No. A Brazilian company can be 100% foreign-owned. What you do need is an administrator resident in Brazil and a local legal representative for non-resident partners.", PT: "Não. Uma empresa brasileira pode ter 100% de capital estrangeiro. O que é preciso é um administrador residente no Brasil e um representante legal para os sócios não residentes." }],
      [{ EN: "Can I use the Simples Nacional regime?", PT: "Posso usar o Simples Nacional?" }, { EN: "Not if any partner lives abroad. We model Lucro Presumido and Lucro Real in your business plan so you can see the difference before choosing.", PT: "Não, se algum sócio morar no exterior. Simulamos Lucro Presumido e Lucro Real no seu plano de negócios para você ver a diferença antes de escolher." }],
      [{ EN: "How do I send profits back home?", PT: "Como remeto os lucros para fora?" }, { EN: "Through the bank, once the foreign capital is properly registered with the Central Bank. That is why the RDE-IED registration matters from day one.", PT: "Pelo banco, desde que o capital estrangeiro esteja registrado corretamente no Banco Central. Por isso o registro no RDE-IED importa desde o primeiro dia." }],
    ],
    sources: [
      ["Complementary Law 214/2025 (Planalto)", "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm"],
      ["Complementary Law 123/2006, art. 17 — Simples Nacional (Planalto)", "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm"],
      ["Foreign capital registration RDE-IED (Brazil Counsel)", "https://www.brazilcounsel.com/blog/required-registrations-for-foreign-capital-contributions-in-brazilian-companies"],
      ["Thomson Reuters — IBS and CBS readiness", "https://tax.thomsonreuters.com/en/insights/infographics/brazil-tax-reform-your-indirect-tax-readiness-checklist-for-ibs-and-cbs"],
    ],
  },

  usa: {
    name: { EN: "United States", PT: "Estados Unidos" },
    h1: { EN: "Doing business in the United States.", PT: "Fazer negócios nos Estados Unidos." },
    lead: { EN: "The world's largest economy — and our home base in Florida. We help Brazilian and Guyanese companies set up, and U.S. companies expand nationwide.", PT: "A maior economia do mundo — e a nossa base na Flórida. Ajudamos empresas brasileiras e guianenses a se instalar, e empresas americanas a expandir pelo país." },
    facts: [
      [{ EN: "#1", PT: "Nº 1" }, { EN: "Largest economy in the world", PT: "Maior economia do mundo" }, ""],
      [{ EN: "21%", PT: "21%" }, { EN: "Federal corporate income tax for C-Corporations", PT: "Imposto de renda federal das C-Corporations" }, "IRS"],
      [{ EN: "0%", PT: "0%" }, { EN: "State personal income tax in Florida", PT: "Imposto de renda estadual de pessoa física na Flórida" }, "Florida DOR"],
      [{ EN: "50", PT: "50" }, { EN: "States, each with its own company and tax rules", PT: "Estados, cada um com regras próprias para empresas e impostos" }, ""],
    ],
    overview: [
      { EN: "The United States offers the largest consumer market and the deepest capital markets in the world, with clear rules and fast company formation. The decisions that matter most come early: which entity, which state, and how the company will be taxed and banked.", PT: "Os Estados Unidos têm o maior mercado consumidor e os maiores mercados de capitais do mundo, com regras claras e abertura de empresa rápida. As decisões mais importantes vêm no início: qual tipo de empresa, em qual estado e como ela será tributada e bancarizada." },
      { EN: "Florida, where Connectas is based, is a natural gateway to Latin America and the Caribbean: direct flights to Brazil and Guyana, a large Portuguese- and Spanish-speaking business community, and no state personal income tax.", PT: "A Flórida, onde a Connectas tem sede, é uma porta de entrada natural para a América Latina e o Caribe: voos diretos para o Brasil e a Guiana, uma grande comunidade de negócios que fala português e espanhol, e nenhum imposto estadual sobre a renda de pessoa física." },
    ],
    sectors: {
      EN: ["Technology & software", "Professional services", "Real estate", "Import & export with Latin America", "Hospitality & food", "Healthcare", "Logistics", "E-commerce"],
      PT: ["Tecnologia e software", "Serviços profissionais", "Imóveis", "Importação e exportação com a América Latina", "Hotelaria e alimentação", "Saúde", "Logística", "E-commerce"],
    },
    setupIntro: { EN: "A non-resident can own a U.S. company without living in the country. The usual path looks like this:", PT: "Um não residente pode ser dono de uma empresa americana sem morar no país. O caminho mais comum é este:" },
    setup: [
      [{ EN: "Choose the entity", PT: "Escolher o tipo de empresa" }, { EN: "An LLC is flexible and simple to run; a C-Corporation is usually preferred by venture investors and for raising capital.", PT: "A LLC é flexível e simples de manter; a C-Corporation costuma ser a preferida de investidores e para captar recursos." }],
      [{ EN: "Choose the state", PT: "Escolher o estado" }, { EN: "Usually the state where you operate — such as Florida — or Delaware for investor-backed companies. Each state requires a registered agent.", PT: "Normalmente o estado onde você opera — como a Flórida — ou Delaware para empresas com investidores. Cada estado exige um agente registrado (registered agent)." }],
      [{ EN: "File and organise", PT: "Registrar e organizar" }, { EN: "Articles of organization or incorporation with the Secretary of State (in Florida, the Division of Corporations), plus an operating agreement or bylaws.", PT: "Articles of organization ou incorporation na Secretaria de Estado (na Flórida, a Division of Corporations), além do operating agreement ou estatuto." }],
      [{ EN: "Federal tax ID", PT: "Cadastro federal" }, { EN: "An Employer Identification Number (EIN) from the IRS — available to non-residents without a Social Security number.", PT: "O Employer Identification Number (EIN) na Receita americana (IRS) — disponível para não residentes sem Social Security number." }],
      [{ EN: "Bank and registrations", PT: "Banco e registros" }, { EN: "Business bank account (some banks require a visit in person), and state licences and sales tax registration where they apply.", PT: "Conta bancária empresarial (alguns bancos exigem visita presencial) e licenças estaduais e registro de sales tax quando aplicável." }],
    ],
    rules: [
      [{ EN: "How the company is taxed", PT: "Como a empresa é tributada" }, { EN: "A C-Corporation pays 21% federal income tax plus state tax where it applies (Florida: 5.5%). An LLC is taxed through its owners by default, which has different consequences for foreign owners — model both before choosing.", PT: "A C-Corporation paga 21% de imposto federal, mais o estadual quando aplicável (Flórida: 5,5%). A LLC, por padrão, é tributada pelos sócios, o que tem consequências diferentes para sócios estrangeiros — simule as duas antes de escolher." }],
      [{ EN: "Foreign-owned LLCs", PT: "LLCs de estrangeiros" }, { EN: "A single-member LLC owned by a foreign person must file Form 5472 with the IRS every year, even with no income. Missing it carries heavy penalties.", PT: "A LLC de sócio único estrangeiro precisa entregar o Form 5472 à Receita americana todo ano, mesmo sem receita. Esquecer gera multas altas." }],
      [{ EN: "Beneficial ownership (BOI)", PT: "Beneficiário final (BOI)" }, { EN: "Since March 2025, companies formed in the U.S. are exempt from FinCEN's BOI reporting; foreign companies registered to do business in a U.S. state still report. We check the current rule for each case.", PT: "Desde março de 2025, empresas constituídas nos EUA estão dispensadas do relatório de BOI da FinCEN; empresas estrangeiras registradas para operar em um estado americano ainda reportam. Conferimos a regra vigente em cada caso." }],
      [{ EN: "Sales tax", PT: "Sales tax" }, { EN: "There is no federal VAT. Sales tax is set state by state — Florida's state rate is 6%, plus county surtaxes.", PT: "Não existe IVA federal. O sales tax é definido estado por estado — na Flórida, a alíquota estadual é de 6%, mais adicionais dos condados." }],
    ],
    living: { EN: "Owning a company does not, by itself, give the right to live or work in the United States. Where people need to move, immigration is handled with licensed immigration attorneys, and we take care of everything around the move.", PT: "Ser dono de uma empresa não dá, por si só, o direito de morar ou trabalhar nos Estados Unidos. Quando há mudança de pessoas, a parte imigratória é feita com advogados de imigração habilitados, e nós cuidamos de tudo ao redor da mudança." },
    livingList: [
      { EN: "Housing: landlords often ask for credit history, which newcomers don't have — we help with alternatives such as larger deposits or corporate leases.", PT: "Moradia: proprietários costumam pedir histórico de crédito, que quem chega não tem — ajudamos com alternativas como caução maior ou contrato em nome da empresa." },
      { EN: "Schools: public schools are assigned by address, so the choice of home and school go together.", PT: "Escolas: as escolas públicas são definidas pelo endereço, então a escolha da casa e da escola andam juntas." },
      { EN: "Daily life: driver's licence, health insurance and a bank account are the first practical steps.", PT: "Dia a dia: carteira de motorista, seguro-saúde e conta bancária são os primeiros passos práticos." },
    ],
    how: { EN: "We help you choose the entity and the state, coordinate formation, EIN and banking with licensed professionals, keep the annual filings on the calendar, and build the website, systems and marketing for your U.S. launch.", PT: "Ajudamos você a escolher o tipo de empresa e o estado, coordenamos a abertura, o EIN e a conta bancária com profissionais habilitados, mantemos as obrigações anuais no calendário e criamos o site, os sistemas e o marketing do seu lançamento nos EUA." },
    faq: [
      [{ EN: "Can I open a U.S. company without living there?", PT: "Posso abrir uma empresa nos EUA sem morar lá?" }, { EN: "Yes. Non-residents can own LLCs and corporations, obtain an EIN and, in many cases, open a bank account — although some banks ask for a visit.", PT: "Sim. Não residentes podem ser donos de LLCs e corporations, obter EIN e, em muitos casos, abrir conta bancária — embora alguns bancos peçam uma visita." }],
      [{ EN: "Delaware or Florida?", PT: "Delaware ou Flórida?" }, { EN: "Delaware is the standard for companies raising venture capital. If you will operate in Florida, a Florida company is often simpler and cheaper, because a Delaware company would also have to register in Florida.", PT: "Delaware é o padrão para empresas que vão captar investimento. Se você vai operar na Flórida, uma empresa da Flórida costuma ser mais simples e barata, porque a de Delaware também teria de se registrar na Flórida." }],
      [{ EN: "Does owning a company give me a visa?", PT: "Ter uma empresa me dá visto?" }, { EN: "No. Some visas are linked to investment or to running a business, but they are separate processes handled by immigration attorneys.", PT: "Não. Alguns vistos estão ligados a investimento ou à gestão de um negócio, mas são processos separados, conduzidos por advogados de imigração." }],
    ],
    sources: [
      ["IRS — About Form 5472", "https://www.irs.gov/forms-pubs/about-form-5472"],
      ["FinCEN — Beneficial Ownership Information", "https://www.fincen.gov/boi"],
      ["Florida Division of Corporations (Sunbiz)", "https://dos.fl.gov/sunbiz/"],
      ["Florida Department of Revenue", "https://floridarevenue.com/"],
    ],
  },
};
