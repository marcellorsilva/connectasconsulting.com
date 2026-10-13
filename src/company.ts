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

// Images from the Connectas Wix sites (hosted by Wix). MilClean is never used.
const W = (id: string) => `https://static.wixstatic.com/media/${id}`;
// Resized by Wix (fill = crop to the box)
const WI = (id: string, w: number, h: number) => `${W(id)}/v1/fill/w_${w},h_${h},al_c,q_85/${id.replace("~", "_")}`;
export const PHOTO = {
  hero: WI("11062b_0da4e81deb614205abd77688ca7eaaa9~mv2.jpeg", 2400, 1200),     // Ponte Estaiada, São Paulo
  duo: WI("92e77a_94e100b7059b4479ae452543629ef928~mv2.jpg", 1400, 1000),       // Stabroek Market from above, Georgetown
  stat: WI("11062b_2cc30823d1ae4f31bdecbb8ddebb8bc8f000.jpg", 2400, 1100),       // building at sunset
  guyana: `${W("92e77a_94e100b7059b4479ae452543629ef928~mv2.jpg")}/v1/fit/w_2400,h_2400,q_85/guyana.jpg`,
  guyana2: WI("92e77a_72ffd6656c2f4a25afeeeaaf838d3879~mv2.jpg", 1200, 1200),    // 1763 Monument, Georgetown
  brazil: `${W("11062b_0da4e81deb614205abd77688ca7eaaa9~mv2.jpeg")}/v1/fit/w_2400,h_2400,q_85/brazil.jpg`,
  usa: `${W("5e4f822698fc4e23b2b48f0dda9e765a.jpg")}/v1/fit/w_2400,h_2400,q_85/usa.jpg`,                  // New York at sunset
  usa2: WI("92e77a_f6bd6c04d1014f10be0714b99025edd7~mv2.jpg", 1200, 1200),       // Wall Street
  founder: `${W("ffe100_1711e3f3758144ffa10f93e921e36dec~mv2.png")}/v1/fit/w_1800,h_2700,q_88/marcello-silva.png`, // Marcello Silva, New York
  tech: WI("11062b_7a56e8ec12ef4d00b2ec73822f42de31~mv2.jpg", 2000, 1200),       // team at work
};
// Country hero videos (mp4). Empty = the page uses the photo with a slow zoom instead.
export const VIDEO: Record<"guyana" | "brazil" | "usa", string> = { guyana: "", brazil: "", usa: "" };

export const IMG = {
  logo: W("92e77a_aa6304742f1e4e568e671e1221a14847~mv2.png"),
  mosaic: W("ffe100_4fc1389f333348dd9309ff847b87e43d~mv2.png"),
  globe: W("ffe100_f3e55eb86dd7473cb1ba0bcaa8f11031~mv2.png"),
  // "Trusted by" logos (MilClean removed on purpose). s = visual scale, because some files have wide margins; inv = white logo shown dark
  partners: [
    { src: W("ffe100_1756a6fb25954eee81b00d1b377bb308~mv2.png"), s: 1 },      // J.D. Netto Creative
    { src: W("92e77a_4c3a623a74ed4556a732e1b869875442~mv2.png"), s: 1 },      // Acqua Home Living
    { src: W("92e77a_dee3a23b7e344fce9521a7bd3baa62ea~mv2.png"), s: 1.1 },    // CMRmobility
    { src: W("92e77a_e22fa845400d406a821fe7258628d28e~mv2.jpg"), s: 1.3 },    // Grupo Protec
    { src: W("92e77a_97c6bec0f4ab4540bd19d6aa76fda0a9~mv2.png"), s: 1.35 },   // L&C
    { src: W("92e77a_2818eb05a537409fa78a5fad03cccb8d~mv2.png"), s: 0.95, inv: true }, // Round Table
    { src: "/partners/swerve.png", s: 0.85 },                                    // Swerve Creative Agency
    { src: "/partners/the-nettoverse.png", s: 0.95, inv: true },                 // The Nettoverse
  ],
};
