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

  address: "Jl. Flamboyan No.8, Tridaya Sakti, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510",

  logo: "/logo.png",
  cover: "/cover.png",

  map_location_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.122980073638!2d107.06911027523876!3d-6.247520893740869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f3d7edbfcbb%3A0xeb69ffb3509cd752!2sBisadev%20Indonesia!5e0!3m2!1sid!2sid!4v1784518240941!5m2!1sid!2sid"
};