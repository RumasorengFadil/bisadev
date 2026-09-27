# AGENTS.md

## Project

Bisadev adalah situs agensi digital untuk menampilkan layanan, produk, portofolio, artikel, dan kontak, dengan halaman login/register serta dashboard untuk mengelola blog, kategori, dan pengaturan akun. Nama paket di `package.json` masih `bbyts`; identitas situs aktif terlihat pada `src/config/app-config.ts` dan halaman publik.

## Arsitektur dan struktur

- `src/app/` memakai Next.js App Router: `(public)` untuk situs utama, `(auth)` untuk login/register, `(main)/dashboard` untuk area pengelolaan, dan `api/chat/route.ts` untuk respons chat streaming. `layout.tsx` akar memasang provider, analitik, dan komponen global.
- `src/features/` mengelompokkan API, hook, skema, tipe, dan komponen per domain (`auth`, `dashboard`, `public`). `src/components/` dan `src/design-system/` berisi komponen UI bersama; editor blog yang dipakai halaman dashboard berada di `src/components/advance-editor/`.
- `src/lib/` memuat klien API dan utilitas bersama; `src/context/` memuat provider React Query, filter, dan store Zustand. `src/types/`, `src/typdata/`, `src/utils/`, `src/data/`, `src/config/`, `src/styles/`, serta `public/` memuat tipe, utilitas, data konten, konfigurasi, gaya, dan aset. `src/proxy.ts` menangani redirect berbasis cookie untuk rute yang cocok dengan `matcher`.

## Teknologi dan pola implementasi

- Next.js 16, React 19, TypeScript ketat, Tailwind CSS 3, Radix UI/shadcn, Axios, TanStack React Query, Zustand, React Hook Form, Zod, Novel/Tiptap, Sonner, dan OpenAI SDK. Alias `@/*` menunjuk ke `src/*`.
- Halaman App Router umumnya memakai `page.tsx` untuk metadata, parameter, atau pengambilan data server, lalu `page.client.tsx` untuk interaksi. Komponen yang memakai hook/browser API diberi `"use client"`; ikuti batas server/client pada file yang diubah.
- API domain berada di `src/features/**/api.ts(x)`; hook `useQuery`/`useMutation` membungkusnya dan membatalkan query terkait setelah mutasi. Form yang relevan memakai React Hook Form bersama skema Zod. Gaya komponen terutama memakai kelas Tailwind dan helper `cn` dari `src/lib/utils.ts`.

## Alur data dan dependency penting

- Backend HTTP eksternal diambil dari `NEXT_PUBLIC_API_URL`. Klien fitur memakai `src/lib/api.ts` (Axios, cookie credentials, CSRF, refresh saat 401/CSRF error, dan loader); pengambilan data server memakai `src/lib/api.public.fetch.ts`, `src/lib/api.server.fetch.ts`, atau `src/lib/api.server.ts` sesuai kebutuhan endpoint/cookie.
- `src/app/layout.tsx` memasang `ReactQueryProvider`, `PreferencesStoreProvider`, dan `AuthBootstrap`; bootstrap memanggil `/auth/me` lalu mengisi `src/context/stores/use-auth.store.ts`. Dashboard juga mengambil pengguna lewat `src/utils/get-user.util.ts` dan preferensi sidebar dari cookie.
- Artikel publik, pratinjau beranda, dan sitemap membaca endpoint blog; dashboard melakukan CRUD blog/kategori lewat hook fitur. Form kontak membuka WhatsApp. Chat mengirim pertanyaan ke `/api/chat`, yang membaca `src/data/context.json` dan meneruskan stream dari OpenAI.

## Aturan perubahan

- Telusuri rute dan impor yang benar sebelum mengubah modul: masih ada implementasi lama/duplikat di `src/Layouts/`, `src/store/`, `src/utils/axiosClient.ts`, `src/utils/axiosServer.ts`, `src/components/tailwind/`, dan beberapa berkas bernama `copy`. Jangan menganggap semua berkas itu bagian dari alur aktif.
- Jaga kesesuaian endpoint, cookie, CSRF, query key, invalidasi cache, serta bentuk respons backend ketika mengubah autentikasi atau data. Untuk perubahan blog, periksa juga editor, skema, halaman publik, metadata, dan sitemap.
- Periksa konfigurasi lingkungan sebelum mengubah build atau SEO: `next.config.ts`, `src/config/app-config.ts`, `src/config/sitemap.config.ts`, `src/app/sitemap.ts`, dan `.github/workflows/deploy.yml`. `next-sitemap.config.js` masih memuat identitas lama. Route chat saat ini membaca `NEXT_PUBLIC_OPENAI_API_KEY`; perlakukan perubahan kunci dan variabel publik dengan hati-hati.
- Pertahankan penamaan/path yang sedang diimpor, termasuk `src/features/public/contanct/`, sampai semua pemakai ikut diperbarui. Jangan mengedit keluaran build `.next/` atau dependensi `node_modules/`.

## Dokumentasi dan verifikasi

- `docs/README.md` adalah indeks dokumentasi teknis; ikuti `docs/documentation_convention.md` untuk penempatan, penamaan, laporan, dan aturan anti-duplikasi. `README.md` di root adalah pengantar project. Perbarui `AGENTS.md` bila arsitektur atau alur utama berubah.
- Untuk perubahan signifikan pada fitur, logic/flow, API, autentikasi/otorisasi, integrasi, konfigurasi, deployment, atau arsitektur: perbarui dokumen hidup yang relevan di `docs/`, kemudian buat Implementation Report di `docs/reports/YYYY/MM/DD/<slug_perubahan>.md`. Dokumen hidup menjelaskan implementasi terkini; report tetap menjadi snapshot historis. Perubahan trivial tanpa dampak perilaku tidak memerlukan report.
- Cari dokumen yang sudah membahas topiknya sebelum membuat file baru. Satu fakta punya satu sumber utama; dokumen lain menaut ke sana. Folder fitur baru memakai `docs/features/<domain>/README.md`; kategori/folder fitur baru wajib masuk indeks `docs/README.md` pada perubahan yang sama. Gunakan tautan relatif antar dokumen.
- Repository ini belum punya schema/migrasi database lokal. Jika kelak perubahan menyentuh database yang dikelola di repository, sertakan migrasi dan dokumentasikan tabel, kolom, index, constraint, serta langkah verifikasinya. Untuk API backend eksternal, dokumentasikan kontrak yang benar-benar digunakan frontend, bukan schema backend yang tidak tersedia.
- Belum ada test runner, skrip `test`, atau berkas unit/integration test di repository. Jalankan `npx tsc --noEmit` untuk pemeriksaan tipe dan `npm run build` bila perubahan memengaruhi build; uji alur terkait secara manual. CI saat ini menjalankan `npm ci` dan `npm run build`.
- Skrip `npm run lint` masih menjalankan `next lint` dan gagal pada versi Next.js terpasang; perbaiki skrip tersebut sebelum menggunakannya sebagai pemeriksaan wajib. Dalam report, beri status `PASS` hanya untuk pemeriksaan yang benar-benar dijalankan; isi kategori tanpa perubahan dengan `None`.
