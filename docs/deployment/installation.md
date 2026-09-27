# Instalasi dan deployment

## Menjalankan lokal

1. Jalankan `npm ci` pada root repository.
2. Buat `.env.local` untuk lingkungan kerja. Nilai yang diperlukan bergantung pada fitur yang dipakai; kode membaca `NEXT_PUBLIC_API_URL` untuk backend, `NEXT_PUBLIC_BASE_URL` untuk URL situs/SEO, `NEXT_PUBLIC_ENV` untuk mode tampilan/gambar, dan `NEXT_PUBLIC_IMAGE_HOST` untuk host gambar non-lokal. Route chat membaca `NEXT_PUBLIC_OPENAI_API_KEY`. Integrasi Google Picker membaca `NEXT_PUBLIC_GOOGLE_CLIENT_ID` serta `NEXT_PUBLIC_GOOGLE_API_KEY`.
3. Jalankan `npm run dev`, lalu buka `http://localhost:3000`.

Jangan memasukkan nilai rahasia ke dokumentasi. Nama `NEXT_PUBLIC_OPENAI_API_KEY` adalah kondisi kode saat ini; prefix `NEXT_PUBLIC_` perlu ditinjau saat konfigurasi kredensial chat diubah. `.env.local.example` ada di workspace lokal saat analisis, tetapi aturan `.gitignore` saat ini mengabaikan `.env*`, jadi panduan ini tidak bergantung pada keberadaannya di clone baru.

## Build dan pemeriksaan

`npm run build` menjalankan `next build`; `npm run start` menjalankan hasil build. `npx tsc --noEmit` memeriksa tipe. Belum ada skrip `test` atau test runner. Skrip `npm run lint` saat ini memanggil `next lint` dan gagal dengan Next.js yang terpasang, sehingga hasil lint tidak boleh dilaporkan lulus tanpa memperbaiki skrip tersebut.

## Deployment yang ada

Workflow `.github/workflows/deploy.yml` berjalan saat push ke `main`, `staging`, atau `dev`: memasang Node 20, menjalankan `npm ci` dan `npm run build`, menyalin aset ke output standalone, lalu mengirim hasil lewat SSH/rsync dan menyentuh file restart pada server. `next.config.ts` menyetel `output: "standalone"`. Nama workflow masih menyebut NestJS, tetapi langkah build yang dijalankan adalah Next.js. Pengaturan rahasia dan tujuan server berada pada GitHub Actions secrets; nilainya tidak dicatat di sini.

Lihat [arsitektur](../architecture/overview.md) untuk hubungan konfigurasi dengan rute, API, dan SEO.
