# Desain UI Bisadev

Dokumen ini mencatat pola visual **yang terlihat pada kode saat ini**, sebagai acuan saat mengubah UI. Sumber utamanya `src/app/globals.css`, `tailwind.config.ts`, `src/components/ui/`, layout App Router, serta halaman publik dan dashboard. UI belum sepenuhnya seragam: beberapa area memakai token CSS, area lain memakai kelas warna langsung.

## Fondasi visual

| Area | Implementasi saat ini |
|---|---|
| Token tema | Variabel HSL di `src/app/globals.css`, termasuk background, foreground, primary, secondary, muted, destructive, border, chart, dan sidebar; `.dark` memiliki set variabel tersendiri. |
| Brand publik | Kuning `#FFB700` sering dipakai langsung untuk judul, ikon, filter aktif, dan hover. Token `--primary` bernilai `46 100% 51%`, sehingga tidak identik dengan semua nilai kuning langsung. |
| Dashboard blog | Beberapa aksi, focus ring, dan tautan memakai navy `#1a3e6b` dengan hover `#2a5a8f`; status memakai hijau/kuning Tailwind. |
| Netral | Latar putih, `text-gray-400/600/900`, `border-gray-200/300`, serta `bg-muted`/`text-muted-foreground` pada primitive UI. |

Gunakan token atau pola komponen di area yang diubah dan periksa area lain yang memakai nilai langsung sebelum mengubah palet. Tema awal di root layout adalah `light`; dashboard memiliki switcher dan token `.dark`, tetapi tidak semua halaman publik memakai warna berbasis token.

## Tipografi dan jarak

- Root layout memuat Inter, Geist, dan Geist Mono dari `next/font` sebagai variabel CSS. `tailwind.config.ts` menyediakan `font-inter`; tidak ada satu kelas font-family yang dipasang ke seluruh body. Teks UI memakai utilitas Tailwind sesuai komponen.
- Halaman publik banyak memakai H1 `text-4xl md:text-5xl` atau hero `text-xl md:text-6xl`, judul seksi `text-3xl md:text-4xl`, dan paragraf `text-lg`/`text-xl`. Dashboard lebih padat: judul `text-3xl`, isi tabel/form umumnya `text-sm` atau `text-base`.
- Kontainer publik berulang memakai `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` dengan seksi `py-16`/`py-20` dan grid `gap-6`/`gap-8`. Konten dashboard memakai `p-4 md:p-6`; card dan dialog UI bersama umumnya `p-6`.
- Primitive `Card` memakai `rounded-xl border ... shadow`; tombol/input shared memakai `rounded-md`; kartu dan filter publik dapat memakai `rounded-xl`/`rounded-2xl`, sementara badge filter/status sering `rounded-full`.

## Komponen dan interaksi

- `src/components/ui/` menyediakan primitive Radix/shadcn untuk `Button`, `Input`, `Card`, `Table`, `Dialog`, `AlertDialog`, `Sheet`, `Select`, `Popover`, `Tooltip`, dan lain-lain. `Button` memakai varian default, destructive, outline, secondary, ghost, link; ukuran default/sm/lg/icon. Halaman publik dan dashboard juga memiliki elemen Tailwind langsung, jadi pola lokal perlu dicek sebelum mengganti komponen.
- Form login, blog, kategori, dan settings memakai React Hook Form dengan Zod pada alur terkait, label/error field, serta primitive form/input/select. Form kontak memakai input native dengan `required` dan membuka WhatsApp saat submit.
- Kategori memakai Radix `Dialog` untuk tambah/edit; hapus blog memakai `AlertDialog`. Hapus kategori masih memakai `window.confirm`. `Dialog`/`AlertDialog` bersama memiliki overlay `bg-black/80`, panel tengah `max-w-lg p-6`, tombol tutup, dan animasi state.
- `src/components/ui/table.tsx` membungkus tabel dengan `overflow-auto`, header netral dan baris hover. Daftar blog dashboard memakai `<table>` langsung di dalam card `overflow-hidden`, filter di atasnya, badge status, aksi per baris, skeleton, empty state, dan pagination. Header tabel sticky bukan pola umum yang terimplementasi.
- Umpan balik yang ada meliputi Sonner toast, top loader global/dashboard, skeleton loading, validasi form, dan empty state pada daftar blog. Cakupan state tersebut berbeda antar halaman; jangan menganggap semua fitur sudah memiliki pola yang sama.

## Navigasi dan layout

- Situs publik memakai navbar sticky `top-0 z-50` dengan logo, enam tautan utama, tanda aktif kuning, dan menu yang berubah menjadi tombol toggle di bawah `md`. Layout publik juga memasang footer empat kolom pada `md`, chat prompt, dan widget WhatsApp.
- Dashboard memakai `SidebarProvider`, sidebar berbasis role dari `src/navigation/sidebar/sidebar-items.ts`, header dengan trigger, pencarian, kontrol layout/tema, dan menu akun. Preferensi sidebar/layout dibaca dari cookie; sidebar desktop bisa collapsed/expanded. Di bawah 768 px, primitive sidebar memakai Radix `Sheet` sebagai panel mobile.
- Beberapa kontrol layout dashboard menulis preferensi ke cookie, tetapi teks pada panel menyatakan kontrol sementara dinonaktifkan. Perlakukan UI yang tampak dan perilaku kode ini sebagai kondisi yang perlu diperiksa saat mengubah kontrol, bukan sebagai fitur yang sudah seragam.

## Responsif dan aksesibilitas yang ada

- Breakpoint yang tampak mengikuti Tailwind: `sm` (640 px), `md` (768 px), `lg` (1024 px), ditambah kondisi khusus pada sidebar. Grid publik berubah dari satu kolom ke dua/tiga/empat kolom; filter blog dan tombol CTA berubah dari susunan vertikal ke horizontal pada layar lebih lebar.
- Primitive Radix menyediakan dialog/sheet/menu berbasis keyboard dan kelas `focus-visible`; input dan form memakai label serta pesan error di beberapa alur. Komponen buatan halaman tidak selalu memakai primitive yang sama. Untuk perubahan UI, periksa focus, label, state loading/empty/error, kontras, dan overflow pada layar sempit pada komponen yang benar-benar diubah.

## Acuan perubahan

Mulai dari komponen/rute yang aktif, lalu cocokkan token CSS, utilitas Tailwind, dan primitive yang dipakai area itu. Untuk perubahan lintas halaman, cek navbar publik, layout dashboard, light/dark, dan breakpoint mobile. Catat perbedaan yang masih ada sebagai kondisi aktual; jangan menulis nilai/pola baru sebagai standar sebelum kode menerapkannya. Struktur kode dan alur data diringkas di [Architecture Blueprint](ARCHITECTURE_BLUEPRINT.md).
