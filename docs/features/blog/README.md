# Blog

Halaman publik `/blog` menampilkan daftar artikel dan filter pencarian/kategori/status melalui `src/features/public/blog/`. Detail artikel ada di `/blog/[slug]/detail`; halaman ini mengambil artikel dan artikel terkait pada server, serta membentuk metadata dan JSON-LD. Beranda menampilkan artikel terbaru; `src/app/sitemap.ts` memasukkan rute artikel dari API.

Dashboard `/dashboard/blogs` menampilkan daftar blog milik pengguna, statistik, serta aksi buat, edit, dan hapus. Form buat/edit memakai React Hook Form, skema Zod `src/features/dashboard/blog/schema/blog-form.schema.ts`, dan editor di `src/components/advance-editor/`. Konten editor disimpan sebagai HTML (`content`) dan JSON string (`content_JSON`); thumbnail dikirim sebagai multipart form. Hook mutasi menginvalidasi query blog/statistik.

Kontrak yang dipakai frontend: `GET /blogs` untuk daftar publik, `GET /blogs/:slug` untuk detail, `GET /blogs/my` untuk daftar dashboard, `GET /blogs/stats/my` untuk statistik, serta `POST /blogs`, `PATCH /blogs/:id`, dan `DELETE /blogs/:id` untuk pengelolaan. Query daftar memakai `page`, `limit`, `q`, `status`, `category`, dan `sort` sesuai pemanggil; query publik menambahkan `status=published`. Implementasi berada di `src/features/dashboard/blog/api.tsx`, `api.server.tsx`, dan `src/api/find-blog.api.ts`.

Kategori yang dipilih form berasal dari [fitur kategori](../categories/README.md). Perubahan artikel juga perlu memeriksa metadata, sitemap, serta alur API pada [arsitektur](../../architecture/overview.md).
