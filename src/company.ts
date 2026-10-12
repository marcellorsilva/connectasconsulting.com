// Company facts used across the site and the legal pages. Change them here only.
export const COMPANY = {
  name: "Connectas",
  legal: "Connectas Enterprises LLC",
  state: "Florida",
  address1: "11640 NW 56th Dr 102",
  address2: "Coral Springs, FL 33076, United States",
  email: "info@connectasconsulting.com",
  updated: { EN: "October 12, 2026", PT: "12 de outubro de 2026" },
};

// Images already used by the Connectas design (hosted by Wix).
const W = (id: string) => `https://static.wixstatic.com/media/${id}`;
export const IMG = {
  logo: W("ffe100_e8512c7679c84eca9352ef302b19394c~mv2.png"),
  mosaic: W("ffe100_4fc1389f333348dd9309ff847b87e43d~mv2.png"),
  globe: W("ffe100_f3e55eb86dd7473cb1ba0bcaa8f11031~mv2.png"),
  // "Trusted by" logos (MilClean removed on purpose)
  partners: [
    W("ffe100_1756a6fb25954eee81b00d1b377bb308~mv2.png"),
    W("92e77a_4c3a623a74ed4556a732e1b869875442~mv2.png"),
    W("92e77a_dee3a23b7e344fce9521a7bd3baa62ea~mv2.png"),
    W("92e77a_e22fa845400d406a821fe7258628d28e~mv2.jpg"),
    W("92e77a_97c6bec0f4ab4540bd19d6aa76fda0a9~mv2.png"),
  ],
};
