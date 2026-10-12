// Every page of the site, in English (root) and Portuguese (/pt). Only pages listed here are built.
export type Lang = "EN" | "PT";
export type PageKey =
  | "home" | "solutions" | "guyana" | "brazil" | "usa" | "technology" | "insights" | "about"
  | "terms" | "privacy" | "cookies" | "dataprotection" | "ethics" | "refunds" | "accessibility";

export const ROUTES: Record<Lang, Record<PageKey, string>> = {
  EN: {
    home: "/", solutions: "/solutions", guyana: "/guyana", brazil: "/brazil", usa: "/united-states",
    technology: "/technology", insights: "/market-insights", about: "/about",
    terms: "/terms-of-service", privacy: "/privacy-policy", cookies: "/cookie-policy",
    dataprotection: "/data-protection", ethics: "/compliance-ethics", refunds: "/cancellation-and-refunds",
    accessibility: "/accessibility",
  },
  PT: {
    home: "/pt", solutions: "/pt/solucoes", guyana: "/pt/guiana", brazil: "/pt/brasil", usa: "/pt/estados-unidos",
    technology: "/pt/tecnologia", insights: "/pt/insights", about: "/pt/sobre",
    terms: "/pt/termos-de-servico", privacy: "/pt/politica-de-privacidade", cookies: "/pt/politica-de-cookies",
    dataprotection: "/pt/protecao-de-dados", ethics: "/pt/etica-e-compliance", refunds: "/pt/cancelamento-e-reembolso",
    accessibility: "/pt/acessibilidade",
  },
};

export const postUrl = (lang: Lang, slug: string) => `${ROUTES[lang].insights}/${slug}`;

export const SITE = "https://connectasconsulting.com";
