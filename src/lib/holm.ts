// Central business content — edit here to update the whole site.
export const HOLM = {
  instagram: "https://www.instagram.com/holm.dz_/",
  instagramHandle: "@holm.dz_",
  hours: "Every day · 10:00 – 21:00",
  // TODO: replace with the verified address once confirmed by HOLM.
  address: "Address shared on our Instagram (Location highlight)",
  mapsUrl: "https://www.google.com/maps/search/HOLM+coffee+brunch+Algeria",
  pottery: "Pottery sessions · every Thursday from 13:00",
};

export type MenuItem = { name: string; price: number; note?: string };
export type MenuSection = { id: string; title: string; subtitle?: string; items: MenuItem[] };

export const MENU: MenuSection[] = [
  {
    id: "classics",
    title: "Classics",
    subtitle: "Ethiopian, 100% arabica",
    items: [
      { name: "Espresso", price: 300 },
      { name: "Americano", price: 300 },
      { name: "Latte", price: 350 },
      { name: "Cappuccino", price: 400 },
      { name: "Matcha latte", price: 550 },
      { name: "Ube latte", price: 600 },
    ],
  },
  {
    id: "signature",
    title: "Signature",
    items: [
      { name: "Holm latte", price: 550, note: "House signature" },
      { name: "Salted caramel lotus latte", price: 500 },
      { name: "Pistachio latte", price: 600 },
    ],
  },
  {
    id: "iced",
    title: "Iced coffee",
    items: [
      { name: "Blueberry iced latte", price: 500 },
      { name: "Exotique iced latte", price: 550 },
      { name: "Holm iced latte", price: 600 },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails & iced tea",
    items: [
      { name: "Holm cocktail", price: 400 },
      { name: "Palm cocktail", price: 450 },
      { name: "Scarlet cocktail", price: 450 },
      { name: "Iced tea", price: 400, note: "Peach, strawberry or cherry" },
    ],
  },
  {
    id: "brunch",
    title: "Brunch",
    items: [
      { name: "Avocado toast", price: 700 },
      { name: "Croissant poulet fumé", price: 550 },
      { name: "Turkish velvet bowl", price: 550 },
      { name: "Granola bowl", price: 450 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Pistachio cheesecake", price: 350, note: "New" },
      { name: "Kinder cheesecake", price: 350, note: "New" },
      { name: "Snickers", price: 350, note: "New" },
      { name: "New York rolls", price: 300, note: "New" },
      { name: "San Sebastián cheesecake", price: 400 },
      { name: "Lemon tart", price: 350 },
      { name: "Pear tart", price: 350 },
      { name: "Brownies", price: 350 },
      { name: "Cookies", price: 300 },
      { name: "Cake", price: 250 },
      { name: "Viennoiserie", price: 250 },
      { name: "Croissant", price: 100 },
      { name: "Petit pain", price: 100 },
    ],
  },
];

export const formatDA = (n: number) => `${n} DA`;
