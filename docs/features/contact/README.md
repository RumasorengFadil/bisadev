# Kontak

Halaman `/contact` menampilkan informasi kontak dari `src/config/app-config.ts` dan form di `src/features/public/contanct/components/ContactFormSection.tsx` (ejaan folder mengikuti path yang sedang dipakai kode).

Form mengumpulkan nama, email, telepon, subjek, dan pesan. Saat submit, browser membuka URL `wa.me` dengan teks yang dibentuk dari input tersebut. Implementasi ini tidak mengirim form ke route API atau menyimpan data di repository ini. Perubahan field, format pesan, tujuan WhatsApp, atau perilaku submit harus diperbarui di dokumen ini.
