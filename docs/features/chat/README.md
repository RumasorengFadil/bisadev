# Chat situs

Layout publik menampilkan `ChatPromptForm`. Hook `src/hooks/use-chat.tsx` mengirim `POST /api/chat` dengan body JSON `{ "question": string }`, membaca body respons sebagai stream teks, dan menampilkan jawaban bertahap.

Route handler `src/app/api/chat/route.ts` membaca `src/data/context.json`, memilih konteks berdasarkan kecocokan topik sederhana (atau memakai semua konteks jika tidak ada yang cocok), lalu meminta respons streaming dari OpenAI. Model yang ditetapkan kode saat ini adalah `gpt-4o-mini`; bila terjadi error, route mengembalikan JSON `{ "error": "Something went wrong" }` dengan status 500.

Route membaca `NEXT_PUBLIC_OPENAI_API_KEY` di server. Perubahan prompt, sumber konteks, payload, cara streaming, atau konfigurasi kunci harus memperbarui dokumen ini dan diperiksa bersama [panduan lingkungan](../../deployment/installation.md).
