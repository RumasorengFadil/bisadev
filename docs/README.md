# Dokumentasi Bisadev

`docs/` adalah sumber utama dokumentasi teknis implementasi Bisadev saat ini. Dokumen per topik diperbarui saat perilaku berubah; laporan implementasi menyimpan riwayat perubahan sebagai snapshot.

## Quick start

Jalankan `npm ci`, siapkan `.env.local`, lalu `npm run dev`. Detail variabel dan build ada di [instalasi](deployment/installation.md).

## Kategori dokumentasi

| Kategori | Isi |
|---|---|
| [Architecture](architecture/) | Struktur App Router, batas server/client, dan alur data. |
| [Security](security/) | Autentikasi, cookie, dan kontrol rute yang ada. |
| [Deployment](deployment/) | Setup lokal, variabel lingkungan, build, dan CI/deploy. |
| [Features](features/) | Perilaku fitur yang terimplementasi, satu folder per domain. |
| [Reports](reports/) | Riwayat implementasi per tanggal. |

## Indeks fitur

| Folder | Fitur |
|---|---|
| [blog](features/blog/README.md) | Artikel publik dan pengelolaan blog dashboard. |
| [categories](features/categories/README.md) | Kategori blog dashboard dan filter kategori. |
| [chat](features/chat/README.md) | Chat streaming pada situs publik. |
| [contact](features/contact/README.md) | Form kontak melalui WhatsApp. |

## Konvensi dokumentasi

Baca [aturan lengkap](documentation_convention.md) sebelum menambah dokumen. Untuk perubahan signifikan, perbarui dokumen hidup yang terkait dan buat laporan di `reports/YYYY/MM/DD/<slug_perubahan>.md`; perubahan trivial tidak memerlukan laporan. Periksa dokumen yang ada sebelum membuat file baru, gunakan tautan relatif di dalam `docs/`, dan perbarui tabel di atas saat menambah kategori atau folder fitur.
