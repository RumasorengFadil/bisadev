# Arsitektur aplikasi

Bisadev adalah aplikasi Next.js App Router. Repository ini tidak memuat implementasi backend utama atau schema database; data akun, blog, dan kategori diambil melalui HTTP dari `NEXT_PUBLIC_API_URL`.

## Batas aplikasi

- `src/app/(public)/` berisi halaman beranda, layanan, portofolio, tentang, kontak, daftar blog, dan detail artikel. Layout publik menampilkan navigasi, chat, widget WhatsApp, dan footer.
- `src/app/(auth)/` berisi login dan register. `src/app/(main)/dashboard/` berisi overview, blog, kategori, dan settings. `src/app/api/chat/route.ts` adalah route handler lokal untuk chat streaming.
- `src/features/` menempatkan API, hooks React Query, skema Zod, tipe, dan komponen menurut domain. `src/components/` serta `src/design-system/` berisi UI bersama. `src/config/`, `src/data/`, `src/types/`, dan `src/utils/` mendukung konfigurasi, konten, tipe, dan utilitas.

## Rendering dan data

`page.tsx` dapat menangani metadata, parameter, dan fetch server; komponen interaktif diletakkan pada `page.client.tsx` atau komponen berpenanda `"use client"`. Root layout memasang `PreferencesStoreProvider`, `ReactQueryProvider`, dan `AuthBootstrap`. State data remote klien dikelola dengan TanStack React Query, sedangkan state pengguna/preferensi lokal memakai Zustand.

`src/lib/api.ts` adalah klien Axios untuk API fitur pada browser: memakai cookie credentials, token CSRF pada mutasi, dan mencoba refresh pada respons autentikasi tertentu. Pengambilan data server memakai helper fetch/axios di `src/lib/` atau utilitas khusus; pilih jalur sesuai kebutuhan cookie dan caching. Alur login dan kontrol rute dijelaskan di [autentikasi](../security/authentication.md).

Konten blog publik dibaca oleh halaman/komponen server, filter klien, dan `src/app/sitemap.ts`. Dashboard menggunakan API fitur serta hook mutasi yang menginvalidasi query terkait. Detail perilaku ada di [blog](../features/blog/README.md) dan [kategori](../features/categories/README.md). Chat lokal memakai route handler Next.js dan OpenAI, dijelaskan di [chat](../features/chat/README.md).

## Konfigurasi lintas area

`next.config.ts` mengaktifkan React Compiler, output `standalone`, redirect `/dashboard` ke `/dashboard/overview`, serta pola host gambar. Metadata/SEO berada di `page.seo.ts` pada beberapa halaman publik, `src/app/sitemap.ts`, `src/app/robots.ts`, dan `src/config/sitemap.config.ts`. Proses build/deploy yang ada dijelaskan di [instalasi](../deployment/installation.md).
