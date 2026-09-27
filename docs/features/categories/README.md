# Kategori

Halaman `/dashboard/categories` memakai `src/features/dashboard/categories/` untuk menampilkan dan mengelola kategori. Form dan validasi berada di `schema/category.schema.ts` serta komponen dalam folder fitur. Hook React Query memuat daftar dan menginvalidasi query `categories` setelah mutasi.

Frontend memanggil `GET /categories` dengan filter opsional `page`, `limit`, `q`, dan `type`. Mutasi memakai `POST /category`, `PATCH /category/:id`, dan `DELETE /category/:id`. API server terpisah di `api.server.tsx` untuk pengambilan kategori tanpa interaksi klien.

Kategori bertipe blog dipakai form pengelolaan artikel; filter kategori juga muncul pada halaman blog publik. Lihat [blog](../blog/README.md) untuk perilaku tersebut. Alur API bersama dijelaskan di [arsitektur](../../architecture/overview.md).
