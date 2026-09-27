# Architecture Blueprint Bisadev

Dokumen ini mencatat arsitektur **yang terimplementasi di repository Bisadev saat ini** dan menjadi acuan saat mengubah struktur, alur data, atau dependency. Detail kontrak fitur ada di `docs/features/`; setup di `docs/deployment/installation.md`; autentikasi di `docs/security/authentication.md`.

## Stack dan batas sistem

- Next.js 16 App Router, React 19, TypeScript (`strict: true`), Tailwind CSS 3, React Compiler, dan output build `standalone`.
- Data akun, blog, dan kategori berasal dari backend HTTP eksternal melalui `NEXT_PUBLIC_API_URL`. Repository ini tidak berisi implementasi backend utama, schema database, atau migrasi lokal.
- Satu route handler lokal, `src/app/api/chat/route.ts`, memakai OpenAI SDK untuk jawaban streaming berdasarkan `src/data/context.json`.
- Alias impor `@/*` menunjuk ke `src/*`. `npm ci`, `npm run dev`, `npm run build`, dan `npm run start` adalah perintah yang tersedia; CI membangun aplikasi dengan Node 20.

## Struktur yang dipakai

| Lokasi | Tanggung jawab aktual |
|---|---|
| `src/app/(public)/` | Beranda, about, services, portofolio, contact, blog, detail artikel; metadata halaman publik. |
| `src/app/(auth)/` | Halaman login dan register. |
| `src/app/(main)/dashboard/` | Layout sidebar serta halaman overview, blogs, categories, dan settings. |
| `src/app/api/chat/` | Endpoint chat streaming lokal. |
| `src/features/auth/`, `src/features/dashboard/`, `src/features/public/` | API, hook, skema, tipe, dan komponen menurut domain. |
| `src/components/ui/`, `src/components/`, `src/design-system/` | Primitive Radix/shadcn dan komponen bersama; editor blog aktif di `src/components/advance-editor/`. |
| `src/lib/`, `src/context/`, `src/hooks/`, `src/utils/` | Klien API, provider/store, hook lintas fitur, dan utilitas. |
| `src/config/`, `src/data/`, `src/types/`, `src/typdata/`, `src/styles/`, `public/` | Konfigurasi, konten statis, tipe, gaya, dan aset. |
| `src/proxy.ts` | Redirect awal berbasis cookie pada rute yang masuk `matcher`. |

`src/Layouts/`, `src/store/`, `src/components/tailwind/`, beberapa utilitas Axios lama, dan berkas bernama `copy` masih ada. Pilih modul dengan menelusuri impor dari rute aktif; jangan menganggap semua implementasi paralel dipakai.

## Rendering dan alur data

1. `src/app/layout.tsx` memasang `PreferencesStoreProvider`, `ReactQueryProvider`, `AuthBootstrap`, top loader, toast, dan analitik. Nilai preferensi awal tema di root adalah `light`/`default`.
2. `page.tsx` dan layout App Router menangani metadata, parameter, redirect, atau fetch server bila diperlukan. Banyak halaman menyerahkan interaksi ke `page.client.tsx` dan komponen berpenanda `"use client"`.
3. Fetch server memakai helper di `src/lib/api.public.fetch.ts`, `api.server.fetch.ts`, atau `api.server.ts` sesuai kebutuhan cookie. Halaman detail blog mengambil data untuk metadata/JSON-LD; beranda dan sitemap juga membaca artikel dari API eksternal.
4. Pada klien, `src/features/**/api.ts(x)` memanggil `src/lib/api.ts` (Axios dengan cookie credentials, header CSRF untuk mutasi, percobaan refresh token saat respons tertentu). Hook TanStack React Query menyimpan hasil remote dan menginvalidasi query terkait setelah mutasi.
5. Zustand menyimpan pengguna di `src/context/stores/use-auth.store.ts` dan preferensi UI di `src/context/stores/preferences-store.ts`. `AuthBootstrap` memanggil `/auth/me`; layout dashboard juga mengambil pengguna dari server dan preferensi sidebar dari cookie.

## Pola fitur dan UI

- Domain blog dan kategori menempatkan kontrak API, hook query/mutasi, skema Zod, dan tipe pada folder fitur; form interaktif memakai React Hook Form dan `@hookform/resolvers/zod`.
- Komponen presentasi memakai Tailwind dan helper `cn` (`clsx` + `tailwind-merge`). Primitive `src/components/ui/` dibangun dari Radix UI; detail visual aktif dicatat di [DESIGN.md](DESIGN.md).
- Form blog memakai editor Novel/Tiptap dan menyimpan HTML serta JSON string. Halaman publik memakai `page.seo.ts`, JSON-LD, `src/app/sitemap.ts`, dan `src/app/robots.ts` untuk SEO.
- Navigasi dashboard berasal dari `src/navigation/sidebar/sidebar-items.ts` dan difilter berdasarkan role untuk tampilan. `src/proxy.ts` hanya mengecek keberadaan cookie pada rute yang cocok; otorisasi backend tidak didefinisikan di repository ini.

## Aturan perubahan

- Ubah rute, API fitur, hook/cache key, dan tipe respons bersama ketika kontrak backend berubah. Periksa alur server/client dan cookie sebelum memindahkan fetch atau logika autentikasi.
- Untuk perubahan blog, periksa editor, skema, daftar/detail publik, metadata, dan sitemap. Untuk perubahan desain bersama, periksa token `src/app/globals.css`, `tailwind.config.ts`, primitive UI, serta halaman publik dan dashboard yang masih memakai kelas/warna langsung.
- Tambah dependency atau abstraksi hanya setelah pemakai aktifnya jelas. Jangan memindahkan kode lama/duplikat tanpa menelusuri impor dan perilaku rute.
- `docs/` menyimpan dokumentasi hidup; perbarui topik yang terdampak dan buat laporan implementasi signifikan menurut [konvensi dokumentasi](../documentation_convention.md). Belum ada test runner atau skrip `test`; `npx tsc --noEmit` dapat dipakai, sedangkan skrip `npm run lint` saat ini gagal karena masih memakai `next lint`.

## Batasan yang terlihat

- Nama paket masih `bbyts` dan `next-sitemap.config.js` masih memuat identitas lama; rute sitemap aktif berada di `src/app/sitemap.ts`.
- Mode gelap memiliki token CSS dan kontrol dashboard, tetapi root layout memberi nilai awal `light`; beberapa halaman publik masih memakai warna langsung. Jangan mendokumentasikan konsistensi tema yang belum terverifikasi.
- Route chat membaca `NEXT_PUBLIC_OPENAI_API_KEY`. Perubahan konfigurasi kredensial perlu ditinjau bersama batas server/client dan lingkungan deploy.
