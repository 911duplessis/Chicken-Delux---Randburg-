export interface MenuItem {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  tag?: string;
  isAddOn?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "quarter-box",
    name: "Delux Signature Quarter Box",
    price: 79,
    priceLabel: "R79",
    description:
      "1/4 flame-grilled chicken in our signature spice, crispy fries, and a signature BBQ glaze cup.",
    tag: "Get Started",
  },
  {
    id: "half-grill-box",
    name: "Premium Half Grill Box",
    price: 119,
    priceLabel: "R119",
    description:
      "1/2 chicken, mixed BBQ + peri option, your choice of fries or pap, sauce upgrade included.",
    tag: "Most Popular",
  },
  {
    id: "king-feast",
    name: "Randburg King Feast",
    price: 179,
    priceLabel: "R179",
    description:
      "Full flame-grilled chicken, large fries, 2 sauces, coleslaw, and a bonus secret spice dust.",
    tag: "Feeds the Family",
  },
  {
    id: "wing-stack",
    name: "BBQ Wing Stack (10 Piece)",
    price: 69,
    priceLabel: "R69",
    description:
      "10 grilled wings tossed in smoky BBQ glaze or spicy fire glaze — your call.",
    tag: "Snack Loop",
  },
  {
    id: "combo-boost",
    name: "Delux Combo Boost",
    price: 29,
    priceLabel: "+R29",
    description:
      "Add to any order: upgrade to large fries, extra sauce, a cold drink, or extra wings.",
    isAddOn: true,
  },
];

export const mainMenuItems = menuItems.filter((item) => !item.isAddOn);
export const addOnItems = menuItems.filter((item) => item.isAddOn);
