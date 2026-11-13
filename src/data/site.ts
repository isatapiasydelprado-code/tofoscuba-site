// All business content in one place, so it is easy to edit.
const wix = (id: string, w = 1600, h = 1000) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_auto/${id}`;

export const contact = {
  email: 'info@tofoscuba.com',
  whatsapp: '+258843733074',
  whatsappLabel: '(+258) 84 373 3074',
  phones: [
    { tel: '+258843733074', label: '(+258) 84 373 3074' },
    { tel: '+258873733074', label: '(+258) 87 373 3074' },
  ],
  address: 'Praia do Tofo, Inhambane, Mozambique',
  mapUrl: 'https://maps.google.com/?q=Tofo+Scuba,+Praia+do+Tofo,+Mozambique',
};

export const socials = [
  { name: 'Facebook', icon: 'fa6-brands:facebook', url: 'https://www.facebook.com/TofoScuba' },
  { name: 'Instagram', icon: 'fa6-brands:instagram', url: 'https://www.instagram.com/tofoscuba/' },
  { name: 'YouTube', icon: 'fa6-brands:youtube', url: 'https://www.youtube.com/channel/UCeRZlX_4dIWGv4byWeERTeg' },
  { name: 'X / Twitter', icon: 'fa6-brands:x-twitter', url: 'https://twitter.com/TofoScuba' },
  {
    name: 'TripAdvisor',
    icon: 'fa6-solid:star',
    url: 'https://www.tripadvisor.com/Attraction_Review-g1794229-d1469144-Reviews-Tofo_Scuba-Tofo_Inhambane_Province.html',
  },
];

export const images = {
  logo: `https://static.wixstatic.com/media/2c8071_025912817f59417d870a7b0ed046c1ee~mv2.png/v1/fit/w_400,h_400,q_90/2c8071_025912817f59417d870a7b0ed046c1ee~mv2.png`,
  hero: wix('2c8071_d1e2f984e68d4abb9c555b2a2c0b412a.jpg', 2000, 1200),
  manta: wix('2c8071_35b0bbf0d9054603bc3abe5264904cd9.jpg', 900, 1100),
  whaleShark: wix('2c8071_26e59500a89a4f4cb2ce5b1d57cdc360.jpg', 900, 1100),
  nudibranch: wix('2c8071_4e6e4a29fa6c4d91880be4114073f4ee.jpg', 900, 1100),
  stingray: wix('2c8071_4c93ad7f942f456eb0666abfc27ad897~mv2.jpg', 900, 1100),
  beach: wix('2c8071_4af9cf131aa54f5fb451b5a7ab98c2ae.jpg', 1400, 1000),
  lodge: wix('2c8071_ad6dee71630d4cb08f178fb4e6dbf418~mv2_d_2460_1824_s_2.jpg', 1400, 1000),
  team: wix('2c8071_1351f5264e664f5f923667cd0cfa1d08~mv2.jpg', 1600, 900),
};

export const highlights = [
  { icon: 'fa6-solid:award', title: 'PADI 5 Star Gold Palm', text: 'Courses from Discover Scuba up to Divemaster.' },
  { icon: 'fa6-solid:umbrella-beach', title: 'Right on the beach', text: 'Just 30 m from the Indian Ocean.' },
  { icon: 'fa6-solid:temperature-high', title: 'Heated training pool', text: 'The only one in Tofo, plus hot showers & lockers.' },
  { icon: 'fa6-solid:shield-halved', title: 'Safety first', text: 'Experienced DOT skippers and PADI instructors.' },
];

export const marineLife = [
  { title: 'Manta rays', text: 'Tofo is famous for its giant manta rays gliding over the reef cleaning stations.', img: 'manta' },
  { title: 'Whale sharks', text: 'Join an Ocean Safari to snorkel with the biggest fish in the sea.', img: 'whaleShark' },
  { title: 'Macro life', text: 'Colourful nudibranchs and tiny critters for the eagle-eyed diver.', img: 'nudibranch' },
  { title: 'Rays & reef', text: 'Stingrays and vibrant reefs on our near and far reef sites.', img: 'stingray' },
] as const;

// Prices in USD — taken from tofoscuba.com/prices. Confirm before going live.
export const courses = [
  { icon: 'fa6-solid:person-swimming', name: 'Discover Scuba Diving', price: '110', note: 'Your first breaths underwater — no experience needed.' },
  { icon: 'fa6-solid:certificate', name: 'Open Water Diver', price: '490', note: 'Theory online available for a $100 deposit.', featured: true },
  { icon: 'fa6-solid:gauge-high', name: 'Advanced Open Water', price: '495', note: 'Deep, navigation and 3 more adventure dives.' },
  { icon: 'fa6-solid:wind', name: 'Enriched Air Nitrox', price: '199', note: 'Longer bottom times, shorter surface intervals.' },
  { icon: 'fa6-solid:life-ring', name: 'Rescue Diver', price: '495', note: 'The course divers call the most rewarding.' },
  { icon: 'fa6-solid:mask-ventilator', name: 'Emergency First Response', price: '195', note: 'Primary & secondary care skills.' },
  { icon: 'fa6-solid:user-graduate', name: 'Divemaster', price: null, note: 'Go pro — ask us about marine research options.' },
  { icon: 'fa6-solid:route', name: 'Scuba Review', price: '95', note: 'Not dived in 6+ months? Refresh with an instructor.' },
];

export const funDives = [
  { name: 'Fun dive (rental gear*)', price: '55' },
  { name: 'Fun dive (own gear)', price: '50' },
  { name: 'Ocean Safari', price: '55' },
  { name: 'Private boat charter', price: null },
];

export const facilities = [
  { value: '3', label: '8.4 m RIBs with twin 100 hp engines', icon: 'fa6-solid:ship' },
  { value: '40', label: 'full sets of Scubapro equipment', icon: 'fa6-solid:mask-ventilator' },
  { value: '90+', label: 'cylinders — 12 L alu & 15 L steel', icon: 'fa6-solid:gauge-high' },
  { value: '40%', label: 'Nitrox from our membrane system', icon: 'fa6-solid:wind' },
];

export const team = [
  { name: 'Brodie', role: 'Co-owner · Divemaster', text: 'Runs reception and will answer your emails. Also owns Tilak Lodge.' },
  { name: 'Danny', role: 'Co-owner', text: 'Co-owner of Tofo Scuba and Tilak Lodge.' },
  { name: 'Ross', role: 'Manager · PADI MSDT', text: 'Diving Tofo for 13+ years. EFR instructor and Scubapro technician.' },
  { name: 'Bruno', role: 'PADI Instructor', text: 'Raised in Maputo, in Tofo since 2022. Scubapro service technician.' },
  { name: 'Daniel & Armando', role: 'Divemasters', text: 'Mozambican divemasters who know every reef by heart.' },
  { name: 'Five & Manuel', role: 'Skippers', text: 'Getting you through the Tofo surf safely, every day.' },
];

// Dive sites — from tofoscuba.com/dive-sites and the individual site pages.
export const diveFacts = [
  { icon: 'fa6-solid:map-location-dot', value: '20+', label: 'named reefs to explore' },
  { icon: 'fa6-solid:temperature-half', value: '18–28 °C', label: 'cooler Jun–Oct, warmest Dec–Apr' },
  { icon: 'fa6-solid:eye', value: '5–15 m+', label: 'visibility changes by the hour' },
  { icon: 'fa6-solid:binoculars', value: 'Year-round', label: 'whale sharks · humpbacks Jun–Oct' },
];

export type Level = 'beginner' | 'openwater' | 'advanced';
export const levelLabels: Record<Level, string> = {
  beginner: 'Discover Scuba +',
  openwater: 'Open Water +',
  advanced: 'Advanced +',
};

export const diveSites: {
  name: string; level: Level; depth: string; distance: string; time: string; text: string; tags: string[];
}[] = [
  { name: 'Clownfish Reef', level: 'beginner', depth: '9–11 m', distance: '800 m', time: '2 min',
    text: 'A flat, sheltered reef in Tofo Bay with plate coral and small tropical fish — no current or surge. Perfect for first dives and training.',
    tags: ['Training', 'Coral', 'Calm'] },
  { name: 'Salon', level: 'openwater', depth: '11–16 m', distance: '3 km', time: '6 min',
    text: 'An 80 m reef with two resident green turtles, rays, crocodile fish, octopus, reef squid and plenty of macro.',
    tags: ['Turtles', 'Rays', 'Macro'] },
  { name: 'Marble Arch', level: 'openwater', depth: '14–19 m', distance: '9 km', time: '15 min',
    text: 'A sandy bowl ringed by a wall with two archways. Overhangs hide turtles, lobsters and Spanish dancers, with a chance of a whale shark.',
    tags: ['Archways', 'Turtles', 'Whale sharks'] },
  { name: 'Office', level: 'advanced', depth: '19–24 m', distance: '15 km', time: '30 min',
    text: 'Ledges and sandy channels topped with manta cleaning stations. Leopard and whitetip sharks, potato bass and giant morays.',
    tags: ['Mantas', 'Sharks', 'Ledges'] },
  { name: 'Manta Reef', level: 'advanced', depth: '21–26 m', distance: '16 km', time: '30 min',
    text: 'Tofo’s most famous dive: a drift over an amphitheatre of pinnacles with two huge manta cleaning stations, shrouded in fish.',
    tags: ['Mantas', 'Drift', 'Pinnacles'] },
  { name: 'Amazon', level: 'advanced', depth: '22–28 m', distance: '21 km', time: '45 min',
    text: 'Two ledges in an L with craters and big swim-throughs. Grey reef, blacktip, leopard sharks and even scalloped hammerheads. Only in perfect conditions.',
    tags: ['Sharks', 'Swim-throughs', 'Blue water'] },
  { name: 'Hogwarts', level: 'advanced', depth: '24–30+ m', distance: '18 km', time: '35 min',
    text: 'A magical wall with an archway, a huge swim-through and two cleaning stations for giant and reef mantas. Watch for frogfish and garden eels.',
    tags: ['Mantas', 'Archway', 'Frogfish'] },
  { name: 'Giants Castle', level: 'advanced', depth: '26–30+ m', distance: '6 km', time: '10 min',
    text: 'A 6 m wall running for 2 km with potato groupers, manta stations, barracuda, guitar sharks and tornadoes of giant trevally. Nitrox recommended.',
    tags: ['Wall', 'Mantas', 'Big schools'] },
];
