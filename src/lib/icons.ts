// Thin line icons (stroke only) in the same weight as the network motif.
const s = (d: string) => `<svg viewBox="0 0 48 48" aria-hidden="true">${d}</svg>`;
export const ICON = {
  plan: s('<rect x="9" y="6" width="30" height="36" rx="3"/><path d="M15 32l6-7 5 4 8-10"/><path d="M15 14h12"/>'),
  register: s('<path d="M12 42V12l12-6 12 6v30"/><path d="M6 42h36"/><path d="M19 42V30h10v12"/><path d="M18 18h2M28 18h2M18 24h2M28 24h2"/>'),
  market: s('<circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="9"/><circle cx="24" cy="24" r="2"/><path d="M24 2v8M24 38v8M2 24h8M38 24h8"/>'),
  relocation: s('<path d="M8 22 24 9l16 13"/><path d="M12 19v21h24V19"/><path d="M20 40V29h8v11"/><path d="M36 8l5 0 0 5"/>'),
  tech: s('<rect x="5" y="9" width="30" height="22" rx="2"/><path d="M14 38h12M20 31v7"/><rect x="31" y="18" width="12" height="22" rx="2.5"/><path d="M35 36h4"/>'),
  marketing: s('<path d="M8 20v8h6l14 9V11l-14 9H8Z"/><path d="M34 18c2 1.5 3 3.6 3 6s-1 4.5-3 6"/><path d="M38.5 13c3.5 2.8 5.5 6.8 5.5 11s-2 8.2-5.5 11"/>'),
  support: s('<circle cx="24" cy="24" r="17"/><path d="M24 13v11l7 5"/>'),
  people: s('<circle cx="18" cy="16" r="6"/><path d="M6 40c1.6-7.2 6.8-11 12-11s10.4 3.8 12 11"/><path d="M31 10.5a6 6 0 0 1 0 11.5M36 29c3 1.6 5 5 6 11"/>'),
  home: s('<path d="M6 21 24 6l18 15"/><path d="M10 18v24h28V18"/><path d="M20 42V30h8v12"/>'),
  bed: s('<path d="M6 36V12M42 36V26a6 6 0 0 0-6-6H20v16"/><path d="M6 30h36"/><circle cx="13" cy="23" r="3.5"/>'),
  money: s('<rect x="5" y="12" width="38" height="24" rx="3"/><circle cx="24" cy="24" r="5"/><path d="M12 19v10M36 19v10"/>'),
  chart: s('<path d="M8 40V20M18 40V8M28 40V26M38 40V16M4 40h40"/>'),
  phone: s('<rect x="13" y="5" width="22" height="38" rx="4"/><path d="M21 37h6"/>'),
  shield: s('<path d="M24 6 9 12v11c0 9.2 6.2 16.8 15 19 8.8-2.2 15-9.8 15-19V12L24 6Z"/><path d="m17.5 24 4.5 4.5 8.5-9"/>'),
  mail: s('<rect x="6" y="10" width="36" height="28" rx="3"/><path d="m7 12 17 13 17-13"/>'),
  card: s('<rect x="5" y="10" width="38" height="28" rx="3"/><path d="M5 19h38M12 30h8"/>'),
  key: s('<circle cx="16" cy="30" r="8"/><path d="M22 24 38 8M32 14l5 5M28 18l4 4"/>'),
  brand: s('<circle cx="24" cy="24" r="17"/><path d="M15 24a9 9 0 0 1 18 0"/><circle cx="24" cy="24" r="3"/>'),
};
