// Market Insights articles. Each article is dated on (or right after) the news it reports, and every figure
// comes from the sources listed at the end of the article. Photos: Wikimedia Commons, credited.
type T = { EN: string; PT: string };
export interface Post { slug: string; date: string; tag: T; title: T; excerpt: T; img: string; alt: T; credit: string; body: T; sources: [string, string][] }

const cta = {
  EN: `<div class="callout"><h3>Planning a move into Guyana?</h3><p>Connectas puts your business plan, company registration, relocation, website, systems and launch marketing into one coordinated plan — with people on the ground in Guyana, Brazil and the United States.</p><a class="btn light" href="/#contact">Connect with Us <span class="arr">→</span></a></div>`,
  PT: `<div class="callout"><h3>Planejando entrar na Guiana?</h3><p>A Connectas reúne plano de negócios, abertura de empresa, realocação, site, sistemas e marketing de lançamento em um só plano coordenado — com gente presente na Guiana, no Brasil e nos Estados Unidos.</p><a class="btn light" href="/pt#contact">Fale Conosco <span class="arr">→</span></a></div>`,
};

export const POSTS: Post[] = [
  {
    slug: "linden-lethem-road-next-phase",
    date: "2025-09-23",
    tag: { EN: "Infrastructure", PT: "Infraestrutura" },
    title: { EN: "The road to Brazil moves to its next phase", PT: "A estrada até o Brasil avança para a próxima fase" },
    excerpt: { EN: "Guyana prepares to tender the remaining lots of the 450-km Linden–Lethem road, including a 600-metre bridge over the Kurupukari River.", PT: "A Guiana se prepara para licitar os lotes restantes da estrada Linden–Lethem, de 450 km, incluindo uma ponte de 600 metros sobre o rio Kurupukari." },
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/International_bridge_-_Letham%2C_Guyana_%2823025487324%29.jpg/1920px-International_bridge_-_Letham%2C_Guyana_%2823025487324%29.jpg",
    alt: { EN: "The international bridge at Lethem, linking Guyana and Brazil", PT: "A ponte internacional em Lethem, que liga a Guiana ao Brasil" },
    credit: "Dan Sloan · CC BY-SA 2.0 · Wikimedia Commons",
    body: {
      EN: `<p>For decades, the only overland route between Georgetown and northern Brazil has been a largely unpaved trail through the rainforest and the Rupununi savannah. That is changing.</p>
<p>On 22 September 2025, Guyana's Department of Public Information reported that the government is pushing ahead with the upgrade of the <strong>450-km Linden-to-Lethem road</strong>. The first phase, from Linden to Mabura Hill, is already under construction, and the government is preparing to tender <strong>lots two, three and four</strong>.</p>
<h2>A bridge over the Kurupukari</h2>
<p>The plan includes a <strong>600-metre bridge over the Kurupukari River</strong>, plus a causeway so the road can stay open around the clock. Public Works Minister Bishop Juan Edghill said the works are "high on the agenda" and that these are "things you will see in these five years".</p>
<h2>Why it matters for business</h2>
<ul><li><strong>Brazilian companies</strong> in Roraima and the wider North gain a more reliable land route to Guyana's coast and its growing market.</li><li><strong>Guyanese companies</strong> get closer to Brazil, Latin America's largest economy.</li><li><strong>Logistics, construction, agribusiness and services</strong> along the corridor are likely to see new demand as travel times fall.</li></ul>
<p>Infrastructure of this size takes years, and timelines can move. The companies that benefit most are usually the ones that study the market, structure their operations and build local relationships before the road is finished.</p>`,
      PT: `<p>Por décadas, a única ligação por terra entre Georgetown e o norte do Brasil foi uma estrada, em grande parte de terra, atravessando a floresta e a savana do Rupununi. Isso está mudando.</p>
<p>Em 22 de setembro de 2025, o Departamento de Informação Pública da Guiana informou que o governo está avançando com a melhoria da <strong>estrada Linden–Lethem, de 450 km</strong>. A primeira fase, de Linden até Mabura Hill, já está em obras, e o governo se prepara para licitar os <strong>lotes dois, três e quatro</strong>.</p>
<h2>Uma ponte sobre o Kurupukari</h2>
<p>O plano inclui uma <strong>ponte de 600 metros sobre o rio Kurupukari</strong>, além de um aterro para que a estrada funcione 24 horas por dia. O ministro de Obras Públicas, Bishop Juan Edghill, disse que as obras são prioridade e que são coisas que a população "verá nestes cinco anos".</p>
<h2>Por que isso importa para os negócios</h2>
<ul><li><strong>Empresas brasileiras</strong> de Roraima e de todo o Norte ganham uma rota terrestre mais confiável até o litoral da Guiana e seu mercado em crescimento.</li><li><strong>Empresas guianenses</strong> ficam mais perto do Brasil, a maior economia da América Latina.</li><li><strong>Logística, construção, agronegócio e serviços</strong> ao longo do corredor tendem a ter nova demanda à medida que o tempo de viagem cai.</li></ul>
<p>Obras desse porte levam anos, e os prazos podem mudar. Quem mais se beneficia costuma ser quem estuda o mercado, estrutura a operação e constrói relações locais antes de a estrada ficar pronta.</p>`,
    },
    sources: [["Department of Public Information (Guyana), 22 Sep 2025", "https://dpi.gov.gy/government-pushes-ahead-with-linden-lethem-trail-upgrade/"], ["Guyana Standard, 23 Sep 2025", "https://www.guyanastandard.com/2025/09/23/government-pushes-ahead-with-linden-lethem-trail-upgrade/"]],
  },
  {
    slug: "new-demerara-river-bridge-opens",
    date: "2025-10-06",
    tag: { EN: "Infrastructure", PT: "Infraestrutura" },
    title: { EN: "Guyana opens its new Demerara River Bridge", PT: "Guiana inaugura a nova ponte sobre o rio Demerara" },
    excerpt: { EN: "A 2.9-km, four-lane cable-stayed bridge built by a Chinese contractor opened on 5 October 2025, replacing a crossing that limited traffic for decades.", PT: "Uma ponte estaiada de 2,9 km e quatro faixas, construída por uma empresa chinesa, foi aberta em 5 de outubro de 2025, substituindo uma travessia que limitou o trânsito por décadas." },
    img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Demerara_Harbor_Bridge%2C_Retractable_Section_from_Air_-_panoramio.jpg",
    alt: { EN: "Aerial view of the old Demerara Harbour Bridge, which the new bridge replaces", PT: "Vista aérea da antiga ponte Demerara Harbour, substituída pela nova ponte" },
    credit: "Marco Farouk Basir · CC BY-SA 3.0 · Wikimedia Commons (the old floating bridge)",
    body: {
      EN: `<p>On <strong>5 October 2025</strong>, Guyana opened the new Demerara River Bridge to traffic. Built by China Railway Construction Corporation (International), it is about <strong>2,900 metres long</strong>, with <strong>four lanes</strong>, a design speed of 80 km/h and an expected service life of 100 years. Guyana's government describes it as the country's largest and most technically complex transport project to date.</p>
<p>The bridge replaces the old floating Demerara Harbour Bridge, for decades a well-known bottleneck between Georgetown and the West Bank of the Demerara River.</p>
<h2>What changes</h2>
<p>President Irfaan Ali called the bridge a lifeline for commerce, industry and daily life, saying it will significantly increase capacity and ease congestion. According to China's ambassador, Chinese companies trained more than 300 local technicians and worked with over 100 local suppliers during construction. Early commuter reports in the Guyana Chronicle describe rush-hour trips that are 30 to 40 minutes shorter.</p>
<h2>What it means for companies</h2>
<ul><li><strong>Real estate and housing:</strong> communities on the West Bank become more practical places to live and set up operations.</li><li><strong>Logistics:</strong> a fixed, four-lane crossing makes delivery schedules more predictable.</li><li><strong>Talent:</strong> a larger area within commuting distance of Georgetown widens the hiring pool.</li></ul>
<p>For companies choosing where to house staff, open offices or build warehouses, the map of Georgetown just changed. It pays to look at the new options with someone who knows them on the ground.</p>`,
      PT: `<p>Em <strong>5 de outubro de 2025</strong>, a Guiana abriu ao trânsito a nova ponte sobre o rio Demerara. Construída pela China Railway Construction Corporation (International), ela tem cerca de <strong>2.900 metros</strong>, <strong>quatro faixas</strong>, velocidade de projeto de 80 km/h e vida útil prevista de 100 anos. O governo da Guiana a descreve como o maior e mais complexo projeto de transporte já feito no país.</p>
<p>A ponte substitui a antiga ponte flutuante Demerara Harbour, por décadas um gargalo conhecido entre Georgetown e a margem oeste do rio Demerara.</p>
<h2>O que muda</h2>
<p>O presidente Irfaan Ali chamou a ponte de artéria vital para o comércio, a indústria e o dia a dia, dizendo que ela vai aumentar muito a capacidade e reduzir os congestionamentos. Segundo a embaixadora da China, as empresas chinesas treinaram mais de 300 técnicos locais e trabalharam com mais de 100 fornecedores locais durante a obra. Relatos de motoristas publicados pelo Guyana Chronicle falam em viagens 30 a 40 minutos mais curtas no horário de pico.</p>
<h2>O que isso significa para as empresas</h2>
<ul><li><strong>Imóveis e moradia:</strong> bairros da margem oeste ficam mais práticos para morar e instalar operações.</li><li><strong>Logística:</strong> uma travessia fixa, com quatro faixas, deixa os prazos de entrega mais previsíveis.</li><li><strong>Equipes:</strong> uma área maior a uma distância razoável de Georgetown amplia as opções de contratação.</li></ul>
<p>Para quem está escolhendo onde acomodar a equipe, abrir escritório ou montar um depósito, o mapa de Georgetown acabou de mudar. Vale olhar as novas opções com quem as conhece de perto.</p>`,
    },
    sources: [["Xinhua, 5 Oct 2025", "http://english.news.cn/20251006/1da08fe976ea491ba8d96d4f63004869/c.html"], ["China Daily, 6 Oct 2025", "https://www.chinadaily.com.cn/a/202510/06/WS68e3aaa3a310f735438b3b0a.html"], ["Guyana Chronicle, 14 Oct 2025", "https://guyanachronicle.com/2025/10/14/bharrat-jagdeo-demerara-river-bridge-redefines-connectivity-and-daily-life-for-thousands/"]],
  },
  {
    slug: "guyana-record-tourism-2025",
    date: "2025-12-30",
    tag: { EN: "Tourism", PT: "Turismo" },
    title: { EN: "Guyana heads for its best tourism year ever", PT: "Guiana caminha para o melhor ano do turismo em sua história" },
    excerpt: { EN: "Visitor arrivals from January to October 2025 already beat the whole of 2024, and the government targets three million passengers by 2030.", PT: "As chegadas de visitantes de janeiro a outubro de 2025 já superaram todo o ano de 2024, e o governo mira três milhões de passageiros até 2030." },
    img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Kaieteur_Falls%2C_Guyana.jpg",
    alt: { EN: "Kaieteur Falls, Guyana", PT: "Cataratas de Kaieteur, Guiana" },
    credit: "Kevin Gabbert · Public domain · Wikimedia Commons",
    body: {
      EN: `<p>Guyana is on track for the strongest tourism year in its history. On 29 December 2025, Tourism Minister Susan Rodrigues said that <strong>visitor arrivals from January to October 2025 had already exceeded the full-year total for 2024</strong>, with growth projected at around 20 per cent — the highest ever recorded in the country.</p>
<p>The Caribbean Tourism Organization also confirmed that Guyana had the <strong>highest percentage increase in visitor arrivals in the region</strong> from January to July 2025.</p>
<h2>Where the sector is going</h2>
<ul><li><strong>Target:</strong> three million passengers by 2030, supported by more airlines and routes. Nine new airlines started flying to Guyana between 2020 and 2025.</li><li><strong>Investment:</strong> the government opened a call for private investment in eco-lodges and resorts at ten locations across the country.</li></ul>
<h2>The opportunity</h2>
<p>More visitors mean more demand for hotels, guest houses, restaurants, tour operators, transport, events and the services around them — and for websites, booking systems and marketing that reach travellers before they land. For investors from Brazil and the United States, hospitality is one of the clearest ways into Guyana's non-oil economy.</p>`,
      PT: `<p>A Guiana caminha para o melhor ano do turismo em sua história. Em 29 de dezembro de 2025, a ministra do Turismo, Susan Rodrigues, informou que <strong>as chegadas de visitantes de janeiro a outubro de 2025 já tinham superado o total de 2024</strong>, com crescimento projetado em cerca de 20% — o maior já registrado no país.</p>
<p>A Organização de Turismo do Caribe também confirmou que a Guiana teve o <strong>maior aumento percentual de chegadas de visitantes da região</strong> entre janeiro e julho de 2025.</p>
<h2>Para onde o setor vai</h2>
<ul><li><strong>Meta:</strong> três milhões de passageiros até 2030, com mais companhias aéreas e rotas. Nove novas companhias começaram a voar para a Guiana entre 2020 e 2025.</li><li><strong>Investimento:</strong> o governo abriu uma chamada para investimento privado em eco-lodges e resorts em dez locais do país.</li></ul>
<h2>A oportunidade</h2>
<p>Mais visitantes significam mais demanda por hotéis, pousadas, restaurantes, agências de turismo, transporte, eventos e todos os serviços ao redor — e por sites, sistemas de reserva e marketing que alcancem o viajante antes de ele chegar. Para investidores do Brasil e dos Estados Unidos, a hotelaria é uma das portas de entrada mais claras na economia não petrolífera da Guiana.</p>`,
    },
    sources: [["Department of Public Information (Guyana), 29 Dec 2025", "https://dpi.gov.gy/guyana-sees-record-tourism-growth-in-2025-min-rodrigues"], ["DPI — January–July 2025 arrivals", "https://dpi.gov.gy/guyana-records-18-per-cent-increase-in-visitor-arrivals-from-january-july-2025"]],
  },
  {
    slug: "linden-mabura-road-86-percent",
    date: "2026-04-02",
    tag: { EN: "Infrastructure", PT: "Infraestrutura" },
    title: { EN: "Linden–Mabura Hill road reaches 86%: the Brazil corridor takes shape", PT: "Estrada Linden–Mabura Hill chega a 86%: o corredor até o Brasil ganha forma" },
    excerpt: { EN: "100 of the 121 kilometres are already paved, and officials call it a super highway linking Guyana and Brazil.", PT: "100 dos 121 quilômetros já estão asfaltados, e autoridades falam em uma super-rodovia ligando a Guiana ao Brasil." },
    img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Linden-Lethem_Road_%2813924759900%29.jpg",
    alt: { EN: "The Linden–Lethem road through Guyana's interior", PT: "A estrada Linden–Lethem no interior da Guiana" },
    credit: "David Stanley · CC BY 2.0 · Wikimedia Commons",
    body: {
      EN: `<p>The first phase of Guyana's road to Brazil is nearly done. On 1 April 2026, the Department of Public Information reported that the <strong>Linden to Mabura Hill road is 86 per cent complete</strong>, with <strong>100 of its 121 kilometres already paved</strong>, and on track for completion by August 2026.</p>
<p>Foreign Secretary Robert Persaud described the corridor as "a super highway, linking Guyana and Brazil". Brazil's ambassador, Maria Cristina de Castro Martins, said: "We are neighbours, and the best way to be connected is through the development of this road."</p>
<h2>From trail to corridor</h2>
<p>Linden–Mabura Hill is the first part of the 450-km route to Lethem, on the Brazilian border, where the Takutu bridge already links Guyana to Bonfim, in Roraima. The remaining lots, including a 600-metre bridge over the Kurupukari River, are the next step.</p>
<h2>Who should pay attention</h2>
<ul><li><strong>Exporters and importers</strong> in northern Brazil and Guyana looking for faster, cheaper routes.</li><li><strong>Construction and engineering firms</strong>, as more lots are tendered.</li><li><strong>Hospitality, fuel, retail and services</strong> along the route, where traffic is expected to grow.</li></ul>
<p>Cross-border trade works best when the company structure, permits and partners on both sides are ready before the trucks start rolling.</p>`,
      PT: `<p>A primeira fase da estrada da Guiana até o Brasil está quase pronta. Em 1º de abril de 2026, o Departamento de Informação Pública informou que a <strong>estrada Linden–Mabura Hill está 86% concluída</strong>, com <strong>100 dos seus 121 quilômetros já asfaltados</strong>, e com conclusão prevista para agosto de 2026.</p>
<p>O secretário de Relações Exteriores, Robert Persaud, descreveu o corredor como "uma super-rodovia ligando a Guiana e o Brasil". A embaixadora do Brasil, Maria Cristina de Castro Martins, afirmou: "Somos vizinhos, e a melhor forma de estarmos conectados é com o desenvolvimento desta estrada."</p>
<h2>De trilha a corredor</h2>
<p>O trecho Linden–Mabura Hill é a primeira parte da rota de 450 km até Lethem, na fronteira com o Brasil, onde a ponte sobre o rio Tacutu já liga a Guiana a Bonfim, em Roraima. Os lotes restantes, incluindo uma ponte de 600 metros sobre o rio Kurupukari, são o próximo passo.</p>
<h2>Quem deve prestar atenção</h2>
<ul><li><strong>Exportadores e importadores</strong> do norte do Brasil e da Guiana em busca de rotas mais rápidas e baratas.</li><li><strong>Construtoras e empresas de engenharia</strong>, à medida que novos lotes forem licitados.</li><li><strong>Hotelaria, combustível, varejo e serviços</strong> ao longo da rota, onde o movimento deve crescer.</li></ul>
<p>O comércio entre países funciona melhor quando a estrutura da empresa, as licenças e os parceiros dos dois lados estão prontos antes de os caminhões começarem a rodar.</p>`,
    },
    sources: [["Department of Public Information (Guyana), 1 Apr 2026", "https://dpi.gov.gy/a-major-milestone-for-linden-mabura-hill-road-project-races-toward-august-2026-completion/"], ["DPI — Linden–Lethem lots, 22 Sep 2025", "https://dpi.gov.gy/government-pushes-ahead-with-linden-lethem-trail-upgrade/"]],
  },
  {
    slug: "four-points-sheraton-georgetown-opens",
    date: "2026-04-25",
    tag: { EN: "Hospitality", PT: "Hotelaria" },
    title: { EN: "Four Points by Sheraton opens in Georgetown", PT: "Four Points by Sheraton é inaugurado em Georgetown" },
    excerpt: { EN: "A US$30 million, 172-room hotel joins Georgetown's growing list of international brands.", PT: "Um hotel de 172 quartos e US$ 30 milhões entra para a lista crescente de bandeiras internacionais em Georgetown." },
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/20191122_Guyana_0171_Georgetown_sRGB_%2849295935467%29.jpg/1920px-20191122_Guyana_0171_Georgetown_sRGB_%2849295935467%29.jpg",
    alt: { EN: "Georgetown, Guyana", PT: "Georgetown, Guiana" },
    credit: "Dan Lundberg · CC BY-SA 2.0 · Wikimedia Commons",
    body: {
      EN: `<p>Georgetown has a new international hotel. The <strong>Four Points by Sheraton Georgetown</strong>, a Marriott brand, was commissioned in April 2026, adding <strong>172 rooms</strong> after an investment of about <strong>US$30 million</strong>, as reported by Caribbean Today on 24 April 2026.</p>
<p>At the ceremony, President Irfaan Ali said Guyana is "positioning" itself "to be a premier hosting destination because we now have greater capacity and capability".</p>
<h2>A hotel pipeline, not a single opening</h2>
<p>Four Points is part of a wider wave. Hilton has signed its first two hotels in the country — <strong>Hilton Georgetown</strong> (253 rooms) and <strong>DoubleTree Suites by Hilton Georgetown</strong> (158 suites) — owned by an affiliate of Assets Group, with Hilton aiming to enter Guyana in 2027.</p>
<h2>Why it matters</h2>
<ul><li><strong>Business travel</strong> becomes easier to plan, with more international-standard rooms in the capital.</li><li><strong>Suppliers</strong> of food, linen, maintenance, transport and technology gain new large clients.</li><li><strong>Events and conferences</strong> have more room to grow, which brings more visitors and more deals.</li></ul>
<p>International brands arrive when the numbers make sense. For companies that supply hotels — or want to open one — the time to structure the business is before the next openings, not after.</p>`,
      PT: `<p>Georgetown tem um novo hotel internacional. O <strong>Four Points by Sheraton Georgetown</strong>, bandeira da Marriott, foi inaugurado em abril de 2026, com <strong>172 quartos</strong> e investimento de cerca de <strong>US$ 30 milhões</strong>, segundo o Caribbean Today de 24 de abril de 2026.</p>
<p>Na cerimônia, o presidente Irfaan Ali disse que a Guiana está se posicionando "para ser um destino de eventos de primeira linha, porque agora temos mais capacidade".</p>
<h2>Uma fila de hotéis, não uma inauguração isolada</h2>
<p>O Four Points faz parte de uma onda maior. A Hilton assinou seus dois primeiros hotéis no país — o <strong>Hilton Georgetown</strong> (253 quartos) e o <strong>DoubleTree Suites by Hilton Georgetown</strong> (158 suítes) — de uma empresa ligada ao Assets Group, com a Hilton prevendo entrar na Guiana em 2027.</p>
<h2>Por que isso importa</h2>
<ul><li><strong>Viagens de negócios</strong> ficam mais fáceis de planejar, com mais quartos de padrão internacional na capital.</li><li><strong>Fornecedores</strong> de alimentos, enxoval, manutenção, transporte e tecnologia ganham novos clientes de grande porte.</li><li><strong>Eventos e conferências</strong> têm mais espaço para crescer, o que traz mais visitantes e mais negócios.</li></ul>
<p>Bandeiras internacionais chegam quando os números fazem sentido. Para empresas que atendem hotéis — ou que querem abrir um — a hora de estruturar o negócio é antes das próximas inaugurações, não depois.</p>`,
    },
    sources: [["Caribbean Today, 24 Apr 2026", "https://www.caribbeantoday.com/sections/travel/guyana-opens-new-multi-million-dollar-hotel-four-points-by-sheraton-georgetown"], ["Hotel Management Network — Hilton in Guyana", "https://www.hotelmanagement-network.com/news/hilton-guyana-dual-brand-hotel/"]],
  },
  {
    slug: "imf-guyana-growth-2025",
    date: "2026-08-03",
    tag: { EN: "Economy", PT: "Economia" },
    title: { EN: "IMF: Guyana grew more than 19% in 2025 — and not only because of oil", PT: "FMI: Guiana cresceu mais de 19% em 2025 — e não só por causa do petróleo" },
    excerpt: { EN: "The non-oil economy expanded about 14%, led by construction, with agriculture, mining and manufacturing also contributing.", PT: "A economia não petrolífera cresceu cerca de 14%, puxada pela construção, com contribuição da agricultura, mineração e indústria." },
    img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Rupununi_Savannah.jpg",
    alt: { EN: "The Rupununi savannah, Guyana", PT: "A savana do Rupununi, Guiana" },
    credit: "Treez44est · CC BY-SA 2.0 · Wikimedia Commons",
    body: {
      EN: `<p>At the end of its 2026 Article IV mission (20–31 July), the International Monetary Fund said Guyana's <strong>real GDP grew by more than 19% in 2025</strong>, after average growth of nearly 40% in 2023–24.</p>
<p>The detail that matters most for new investors: the <strong>non-oil economy grew by about 14%</strong>. Construction was the largest driver, with agriculture, mining and manufacturing also contributing. Oil production passed <strong>900,000 barrels per day</strong> by the end of 2025.</p>
<h2>What comes next</h2>
<p>The IMF expects growth to slow from these exceptional levels, with the <strong>non-oil economy growing by about 7% a year on average over the medium term</strong> — still well above the region. Unemployment fell to 6.2% by the end of 2025, according to reports on the mission.</p>
<h2>Reading the numbers as an investor</h2>
<ul><li><strong>Construction and real estate</strong> keep leading — and pull demand for materials, engineering, furniture and services.</li><li><strong>Agriculture and food</strong> are a natural fit for Brazilian know-how.</li><li><strong>Services for a growing workforce</strong> — housing, schools, health, technology, retail — follow the money into the country.</li></ul>
<p>Fast growth rewards preparation. A business plan built on local costs, taxes and timelines is the difference between arriving early and arriving unprepared.</p>`,
      PT: `<p>Ao fim da missão do Artigo IV de 2026 (20 a 31 de julho), o Fundo Monetário Internacional informou que o <strong>PIB real da Guiana cresceu mais de 19% em 2025</strong>, depois de um crescimento médio de quase 40% em 2023–24.</p>
<p>O dado que mais interessa a novos investidores: a <strong>economia não petrolífera cresceu cerca de 14%</strong>. A construção foi o principal motor, com contribuição também da agricultura, da mineração e da indústria. A produção de petróleo passou de <strong>900 mil barris por dia</strong> no fim de 2025.</p>
<h2>O que vem pela frente</h2>
<p>O FMI espera que o crescimento desacelere em relação a esses níveis excepcionais, com a <strong>economia não petrolífera crescendo cerca de 7% ao ano, em média, no médio prazo</strong> — ainda muito acima da região. O desemprego caiu para 6,2% no fim de 2025, segundo as reportagens sobre a missão.</p>
<h2>Lendo os números como investidor</h2>
<ul><li><strong>Construção e imóveis</strong> seguem na frente — e puxam a demanda por materiais, engenharia, móveis e serviços.</li><li><strong>Agricultura e alimentos</strong> combinam naturalmente com a experiência brasileira.</li><li><strong>Serviços para uma força de trabalho crescente</strong> — moradia, escolas, saúde, tecnologia, varejo — acompanham o dinheiro que chega ao país.</li></ul>
<p>Crescimento rápido premia quem se prepara. Um plano de negócios feito com custos, impostos e prazos locais é a diferença entre chegar cedo e chegar despreparado.</p>`,
    },
    sources: [["Guyana Chronicle, 2 Aug 2026", "https://guyanachronicle.com/2026/08/02/imf-projects-five-more-years-of-strong-growth-for-guyana/"], ["Department of Public Information — IMF commends Guyana's transformation", "https://dpi.gov.gy/imf-commends-guyanas-massive-economic-transformation"]],
  },
  {
    slug: "hyatt-arrives-in-guyana",
    date: "2026-08-14",
    tag: { EN: "Hospitality", PT: "Hotelaria" },
    title: { EN: "Hyatt arrives in Guyana — with a Hyatt Regency planned for 2028", PT: "Hyatt chega à Guiana — com um Hyatt Regency previsto para 2028" },
    excerpt: { EN: "Atlantic Suites becomes Hyatt's first affiliated hotel in the country, Hyatt Place Georgetown is next, and a US$50 million tower follows.", PT: "O Atlantic Suites vira o primeiro hotel afiliado da Hyatt no país, o Hyatt Place Georgetown vem a seguir, e uma torre de US$ 50 milhões fecha o plano." },
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Stabroek_Market%2C_Georgetown.jpg/1920px-Stabroek_Market%2C_Georgetown.jpg",
    alt: { EN: "Stabroek Market, Georgetown", PT: "Mercado Stabroek, Georgetown" },
    credit: "Loriski · CC BY-SA 3.0 · Wikimedia Commons",
    body: {
      EN: `<p>On <strong>13 August 2026</strong>, Hyatt announced its entry into Guyana. The <strong>Atlantic Suites Hotel</strong> in Georgetown — 80 rooms and suites designed for business and extended-stay travellers — became the first Hyatt-affiliated hotel in the country.</p>
<h2>Three steps</h2>
<ul><li><strong>Now:</strong> Atlantic Suites Hotel joins the Hyatt portfolio as an affiliated hotel.</li><li><strong>Later in 2026:</strong> <strong>Hyatt Place Georgetown Guyana</strong> is expected to open, with 136 rooms, a rooftop bar and an outdoor pool.</li><li><strong>2028:</strong> a project of about <strong>US$50 million</strong> will connect a new tower to Atlantic Suites, creating <strong>Hyatt Regency Georgetown Guyana</strong>, with 240 rooms and suites.</li></ul>
<p>Robert Badal, CEO of RJR Investments & Holdings, said Guyana is "experiencing an extraordinary period of growth and international interest".</p>
<h2>The bigger picture</h2>
<p>Hyatt joins Marriott, whose Four Points by Sheraton opened in April, and Hilton, which has two Georgetown hotels in the pipeline. When three of the world's largest hotel groups commit to the same city within a few years, they are betting on sustained business travel — and on everything that comes with it: offices, housing, events, restaurants and services.</p>
<p>For companies thinking about Guyana, that is a signal worth reading carefully — and acting on with a plan.</p>`,
      PT: `<p>Em <strong>13 de agosto de 2026</strong>, a Hyatt anunciou sua chegada à Guiana. O <strong>Atlantic Suites Hotel</strong>, em Georgetown — 80 quartos e suítes pensados para viagens de negócios e estadias longas — tornou-se o primeiro hotel afiliado à Hyatt no país.</p>
<h2>Três etapas</h2>
<ul><li><strong>Agora:</strong> o Atlantic Suites Hotel entra no portfólio da Hyatt como hotel afiliado.</li><li><strong>Ainda em 2026:</strong> a previsão é a abertura do <strong>Hyatt Place Georgetown Guyana</strong>, com 136 quartos, rooftop bar e piscina.</li><li><strong>2028:</strong> um projeto de cerca de <strong>US$ 50 milhões</strong> vai ligar uma nova torre ao Atlantic Suites, criando o <strong>Hyatt Regency Georgetown Guyana</strong>, com 240 quartos e suítes.</li></ul>
<p>Robert Badal, CEO da RJR Investments & Holdings, disse que a Guiana vive "um período extraordinário de crescimento e de interesse internacional".</p>
<h2>O quadro geral</h2>
<p>A Hyatt se junta à Marriott, cujo Four Points by Sheraton abriu em abril, e à Hilton, que tem dois hotéis previstos em Georgetown. Quando três dos maiores grupos hoteleiros do mundo apostam na mesma cidade em poucos anos, estão apostando em viagens de negócios constantes — e em tudo o que vem junto: escritórios, moradia, eventos, restaurantes e serviços.</p>
<p>Para empresas que pensam na Guiana, é um sinal que merece leitura atenta — e uma ação com plano.</p>`,
    },
    sources: [["Hyatt newsroom, 13 Aug 2026", "https://newsroom.hyatt.com/atlanticsuiteshotel"], ["Caribbean Today — Four Points by Sheraton, 24 Apr 2026", "https://www.caribbeantoday.com/sections/travel/guyana-opens-new-multi-million-dollar-hotel-four-points-by-sheraton-georgetown"]],
  },
];

export const POST_CTA = cta;
