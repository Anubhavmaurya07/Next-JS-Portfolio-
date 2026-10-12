// Sample websites for made-up businesses, built to show clients what their
// own site could look like. Each one is a self-contained HTML page in
// public/samples/<slug>/index.html, served at /samples/<slug>.
export type Sample = {
  slug: string;
  name: string;
  kind: string;
  description: string;
  // colours taken from the sample itself, used for the preview swatch
  swatch: [string, string, string];
};

export const samples: Sample[] = [
  {
    slug: "kinara-dental",
    name: "Kinara Dental",
    kind: "Clinic",
    description:
      "A dental clinic with online appointment booking: patients pick a treatment, day and free time slot, and the booking reaches the clinic on WhatsApp.",
    swatch: ["#12343b", "#e3f4ef", "#1f9e8a"],
  },
  {
    slug: "cafe-shirin",
    name: "Café Shirin",
    kind: "Restaurant",
    description:
      "An old Irani café with its full menu, prices and veg markers, plus an order tray that sends pickup or delivery orders on WhatsApp.",
    swatch: ["#1d4a3a", "#f5f5f2", "#b8902f"],
  },
  {
    slug: "masala-ghar",
    name: "Masala Ghar",
    kind: "Shop",
    description:
      "A spice shop with a product catalogue, pack sizes, a shopping bag with free-delivery threshold, and WhatsApp checkout.",
    swatch: ["#23306b", "#e3a21a", "#c1361f"],
  },
];
