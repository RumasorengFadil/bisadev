# Konvensi dokumentasi Bisadev

## Sumber dan cakupan

- `docs/` menyimpan dokumentasi teknis implementasi saat ini. `README.md` di root hanya pengantar; `AGENTS.md` memuat instruksi singkat untuk agent. Kode adalah bukti ketika dokumen perlu diverifikasi.
- Dokumen hidup berada di kategori `governance/`, `architecture/`, `security/`, `deployment/`, atau `features/<domain>/`. Perbarui dokumen yang sudah membahas topik itu; jangan simpan dua versi fakta yang sama. Dokumen lain cukup menaut ke sumber utamanya.
- `reports/YYYY/MM/DD/<slug_perubahan>.md` adalah arsip pekerjaan pada tanggal tersebut. Jangan edit laporan lama untuk menyesuaikan keadaan baru; perubahan susulan masuk laporan baru dan dapat menaut ke laporan sebelumnya.
- Rencana atau usulan harus diberi label jelas dan dipisahkan dari deskripsi perilaku yang sudah ada.

## Kapan memperbarui

Perubahan signifikan pada perilaku fitur, alur data, arsitektur/dependency, kontrak API (endpoint, payload, respons, error, otorisasi), autentikasi/otorisasi, integrasi eksternal, konfigurasi, atau deployment harus disertai pembaruan dokumen hidup dan laporan implementasi. Typo, format, atau rename internal tanpa perubahan perilaku tidak memerlukan keduanya.

Project ini memakai backend HTTP eksternal dan tidak memiliki schema database atau migrasi lokal. Jika pekerjaan kelak menambah/mengubah schema atau migrasi dalam repository ini, buat dokumentasi `database/` dari sumber nyata, sebutkan tabel/kolom/index/constraint/migrasi yang terdampak, dan verifikasi migrasinya. Perubahan kontrak backend yang terlihat frontend dicatat pada dokumen fitur/API yang relevan tanpa mengarang schema backend. Kategori `product/` atau `manual-books/` dibuat hanya bila artefak dan kebutuhan terkait benar-benar ada.

## Penempatan dan penamaan

- Struktur mengikuti domain kode dan rute yang aktif: misalnya blog di `features/blog/`, autentikasi lintas fitur di `security/authentication.md`, dan setup di `deployment/installation.md`.
- Folder fitur baru dimulai dengan `README.md` sebagai index/ringkasan; file topik tambahan dibuat hanya jika satu README tidak lagi cukup fokus. Perbarui tabel **Indeks fitur** di `docs/README.md` pada perubahan yang sama.
- Tambahkan kategori baru hanya bila dokumen tidak cocok dalam kategori yang ada; perbarui tabel **Kategori dokumentasi** di `docs/README.md`.
- Gunakan huruf kecil `snake_case.md` untuk file selain `README.md` dan dua nama governance yang diminta eksplisit, `ARCHITECTURE_BLUEPRINT.md` dan `DESIGN.md`. Slug folder fitur selaras dengan nama domain di kode. Semua tautan antar dokumen `docs/` bersifat relatif. Jangan menyalin isi dokumen asal atau membuat kategori kosong.
- Jika sebuah laporan perlu versi non-teknis, simpan versi terpisah dengan suffix yang jelas seperti `_ringkas.md`; jelaskan perbedaan audiens tanpa mengubah report teknis historis.

## Alur kerja perubahan signifikan

1. Baca kebutuhan, dokumen hidup yang relevan, dan kode aktual.
2. Implementasikan satu perubahan yang jelas, lalu jalankan pemeriksaan tipe/lint/test yang relevan dan verifikasi manual bila menyentuh UI atau integrasi.
   Untuk perubahan business logic yang substansial, tambahkan atau perbarui tes bila infrastruktur tes tersedia; bila belum tersedia, catat keterbatasan dan verifikasi yang dilakukan.
3. Perbarui dokumen hidup. Jika topik belum ada, buat dokumen di kategori yang sesuai dan perbarui indeks.
4. Tulis laporan implementasi bertanggal setelah hasil verifikasi diketahui. Gunakan status `PASS`, `FAIL`, `NOT TESTED`, atau `NOT APPLICABLE` secara jujur; jangan mengklaim pemeriksaan yang tidak dijalankan.
5. Ringkas hasil ke pengguna: Summary, Files Changed, Database Changes, API Changes, Architecture Changes, Documentation Updated, Tests Performed, Manual Test, dan Known Limitations. Isi `None` untuk kategori tanpa perubahan.

## Format laporan implementasi

Simpan sebagai `docs/reports/YYYY/MM/DD/<slug_perubahan>.md` dengan bagian berikut:

```md
# Judul perubahan

## Summary
Apa yang berubah dan alasannya.

## Files Changed
- path — ringkasan.

## Database Changes
None. / Rincian perubahan yang terverifikasi.

## API Changes
None. / Endpoint, payload, respons, error, dan otorisasi yang berubah.

## Architecture Changes
None. / Perubahan struktur atau alur dan dampaknya.

## Documentation Updated
- Tautan relatif ke dokumen yang diperbarui.

## Tests Performed
- Perintah/pemeriksaan: PASS / FAIL / NOT TESTED / NOT APPLICABLE.

## Manual Test
Langkah yang dijalankan dan hasilnya, atau NOT TESTED beserta alasan.

## Known Limitations
None. / Batasan yang masih diketahui.
```

Pemeriksaan yang tersedia dan keterbatasannya dicatat di [panduan instalasi](deployment/installation.md). Catat kondisi sesuai hasil pemeriksaan, bukan sebagai test lulus.
