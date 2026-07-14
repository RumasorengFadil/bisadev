import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();
const waNumber = "6285178137881";

export const APP_CONFIG = {
  url: process.env.NEXT_PUBLIC_BASE_URL!,

  name: "Bisadev",

  version: packageJson.version,

  copyright: `© ${currentYear}, Bisadev.`,

  title: "Bisadev - Digital Solutions & Software Development",

  description: "Bisadev adalah digital agency yang menyediakan layanan pengembangan website, aplikasi, dan solusi digital modern. Kami membantu bisnis berkembang melalui teknologi yang scalable, cepat, dan user-friendly.",

  wa_number: waNumber,

  wa_url: `https://wa.me/${waNumber}`,

  email: "bisadevindonesia@gmail.com",

  address: "Bekasi, Indonesia",

  logo: "/logo.png",
  cover: "/cover.png",
};