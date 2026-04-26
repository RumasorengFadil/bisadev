import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Bisadev",
  version: packageJson.version,
  copyright: `© ${currentYear}, Bisadev.`,
  meta: {
    title: "Bisadev - Digital Solutions & Software Development",
    description:
      "Bisadev adalah digital agency yang menyediakan layanan pengembangan website, aplikasi, dan solusi digital modern. Kami membantu bisnis berkembang melalui teknologi yang scalable, cepat, dan user-friendly.",
  },
  wa_number: "6285178137881",
  email: "bisadevindonesia@gmail.com",
  address: "Bekasi, Indonesia"
};