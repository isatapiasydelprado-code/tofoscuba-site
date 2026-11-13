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
