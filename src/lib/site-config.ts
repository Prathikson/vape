export const siteConfig = {
  name: "DRIPD",
  tagline: "Premium Vape & Lifestyle",
  description: "Edmonton's finest vape shop. Premium devices, e-liquids, and accessories. Located in Mill Woods, Edmonton, AB.",
  url: "https://dripd.ca",
  logo: {
    text: "DRIPD",
    // Replace with actual logo path if needed
    image: null,
  },
  location: {
    address: "2803 23 Ave NW",
    city: "Edmonton",
    province: "AB",
    postalCode: "T6L 6T3",
    neighborhood: "Mill Woods",
    phone: "+1 (780) 555-0192",
    email: "hello@dripd.ca",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.3!2d-113.4!3d53.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI3JzM2LjAiTiAxMTPCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sca!4v1234567890",
  },
  hours: {
    "Mon–Fri": "10:00 AM – 9:00 PM",
    Saturday: "10:00 AM – 8:00 PM",
    Sunday: "11:00 AM – 6:00 PM",
  },
  social: {
    instagram: "https://instagram.com/dripd.ca",
    facebook: "https://facebook.com/dripdca",
    tiktok: "https://tiktok.com/@dripd.ca",
    youtube: "https://youtube.com/@dripdca",
  },
  nav: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  paymentMethods: ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay", "Debit"],
  seo: {
    defaultTitle: "DRIPD — Premium Vape Shop Edmonton",
    defaultDescription:
      "Edmonton's finest vape destination. Shop premium devices, e-liquids, and accessories at DRIPD in Mill Woods, AB.",
    keywords: ["vape shop Edmonton", "e-liquid Edmonton", "vape devices", "Mill Woods vape", "DRIPD"],
    ogImage: "/og-image.jpg",
  },
};

export type SiteConfig = typeof siteConfig;
