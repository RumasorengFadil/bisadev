# Autentikasi dan kontrol rute

Halaman login berada di `src/app/(auth)/login/` dan register di `src/app/(auth)/register/`. Form login memanggil `loginUser` pada `src/features/auth/api.ts`, yang mengirim `POST /auth/login` ke backend HTTP eksternal. Hook login mengarahkan ke `/dashboard` setelah sukses; form juga mengisi store pengguna. Register mengirim `POST /auth/register` dan hook-nya mengarahkan ke `/check-email` setelah sukses.

Root layout memasang `AuthBootstrap`, yang memanggil `GET /auth/me` lewat React Query dan memperbarui `src/context/stores/use-auth.store.ts`. Logout memanggil `POST /auth/logout`, mengosongkan query `me` dan store, lalu kembali ke `/`.

`src/proxy.ts` memeriksa keberadaan cookie `access_token` dan `refresh_token` pada rute dalam `matcher`: `/dashboard/:path*`, `/admin/:path*`, `/login`, dan `/register`. Tanpa access token, rute terlindungi diarahkan ke `/login`; jika access token ada, halaman login/register diarahkan ke `/dashboard`. Ketika access token tidak ada tetapi refresh token ada, proxy meneruskan permintaan. Pemeriksaan ini berdasarkan keberadaan cookie, bukan validasi token/role di proxy.

Layout dashboard mengambil pengguna dari `GET /auth/me` melalui `src/utils/get-user.util.ts`, membaca preferensi sidebar dari cookie, dan memfilter navigasi sesuai role pada `src/navigation/sidebar/sidebar-items.ts`. `src/lib/api.ts` memakai cookie credentials dan token CSRF untuk mutasi; pada 401 atau error CSRF tertentu ia mencoba `POST /auth/refresh` lalu mengulang request. Validasi identitas/izin di backend eksternal tidak tercakup oleh kode repository ini.

Perubahan autentikasi harus dicek bersama `src/proxy.ts`, layout dashboard, `AuthBootstrap`, store pengguna, API/hook auth, dan kontrak backend. Dokumentasi struktur umum ada di [arsitektur](../architecture/overview.md).
