# Penyesuaian acuan arsitektur dan desain Bisadev

## Summary

Mengganti isi blueprint dan desain yang masih berasal dari ORBIT dengan uraian implementasi Bisadev saat ini. Blueprint kini menjadi acuan arsitektur utama, sedangkan `docs/architecture/overview.md` menaut ke sana untuk mencegah dua versi fakta yang sama.

## Files Changed

- `docs/governance/ARCHITECTURE_BLUEPRINT.md` — stack, struktur, alur data, dependency, dan pola pengembangan aktual.
- `docs/governance/DESIGN.md` — token, komponen, layout, interaksi, dan perilaku responsif aktual.
- `docs/architecture/overview.md` — pintu masuk menuju blueprint tanpa menduplikasi isinya.
- `docs/README.md` — indeks kategori governance dan tautan dua acuan lintas fitur.
- `docs/documentation_convention.md` — kategori governance dan pengecualian dua nama file yang diminta.
- `docs/reports/2026/09/27/align_architecture_design.md` — laporan ini.

## Database Changes

None.

## API Changes

None.

## Architecture Changes

None pada kode runtime. Acuan arsitektur dokumentasi dipindahkan ke blueprint Bisadev yang sesuai implementasi.

## Documentation Updated

- [Architecture Blueprint](../../../../governance/ARCHITECTURE_BLUEPRINT.md)
- [DESIGN.md](../../../../governance/DESIGN.md)
- [Overview](../../../../architecture/overview.md)
- [Indeks dokumentasi](../../../../README.md)
- [Konvensi dokumentasi](../../../../documentation_convention.md)

## Tests Performed

- `npx tsc --noEmit`: PASS.
- Pemeriksaan 23 tautan relatif pada lima dokumen yang disentuh: PASS.
- `git diff --check`: PASS.
- Pencarian referensi ORBIT/PHP/PostgreSQL lama pada dua dokumen target: PASS.
- `npm run build`: NOT TESTED; tidak ada perubahan kode aplikasi.

## Manual Test

NOT APPLICABLE untuk UI/API; perubahan hanya pada dokumentasi. Klaim dokumen dicocokkan dengan rute, konfigurasi, CSS, dan komponen yang ada.

## Known Limitations

`AGENTS.md` mempunyai perubahan lain yang belum di-commit dan masih memuat instruksi ORBIT; perubahan tersebut tidak disentuh dalam tugas ini. Pola warna dan komponen publik/dashboard memang belum sepenuhnya seragam, sebagaimana dicatat di `DESIGN.md`.
