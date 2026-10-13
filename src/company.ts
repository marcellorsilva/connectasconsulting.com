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
  founder: "/photos/marcello-silva-bw.jpg", // Marcello Silva, New York — black and white, waist up
  tech: WI("11062b_7a56e8ec12ef4d00b2ec73822f42de31~mv2.jpg", 2000, 1200),       // team at work
};
// Country hero videos (mp4). Empty = the page uses the photo with a slow zoom instead.
export const VIDEO: Record<"guyana" | "brazil" | "usa", string> = { guyana: "", brazil: "", usa: "" };

export const IMG = {
  logo: "/brand/connectas-logo-black-600.png",       // official logo files live in /public/brand (black, grey, white)
  logoWhite: "/brand/connectas-logo-white-600.png",
  mosaic: W("ffe100_4fc1389f333348dd9309ff847b87e43d~mv2.png"),
  globe: W("ffe100_f3e55eb86dd7473cb1ba0bcaa8f11031~mv2.png"),
  // "Trusted by" logos (MilClean removed on purpose). s = visual scale, because some files have wide margins; inv = white logo shown dark
  // Logos trimmed to their ink (no white margins) so the spacing between them is identical; h = display height in px,
  // chosen so every logo carries about the same visual weight.
  partners: [
    { src: "/partners/jd-netto.png", h: 40 },                   // J.D. Netto Creative
    { src: "/partners/acqua.png", h: 38 },                      // Acqua Home Living
    { src: "/partners/cmr.png", h: 42 },                        // CMRmobility
    { src: "/partners/protec.png", h: 44 },                     // Grupo Protec
    { src: "/partners/lc.png", h: 44 },                         // L&C
    { src: "/partners/round-table.png", h: 38, inv: true },     // Round Table
    { src: "/partners/swerve.png", h: 22 },                     // Swerve Creative Agency
    { src: "/partners/the-nettoverse.png", h: 48, inv: true },  // The Nettoverse
  ],
};
