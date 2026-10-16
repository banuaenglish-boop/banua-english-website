# Implementasi SEO English Banua

Tanggal: 16 Oktober 2026. Skill: seo-keyword-strategist.

## Perubahan di project

- Delapan halaman memiliki title, description, canonical, Open Graph, dan Twitter metadata yang sesuai URL masing-masing. Title menggunakan nama English Banua satu kali.
- Canonical beranda dipindahkan dari layout global ke metadata halaman. Halaman program, testimoni, dan profil lembaga tidak lagi mewarisi canonical beranda.
- Dua halaman layanan ditambahkan: `/program/ielts-banjarmasin` dan `/program/toefl-banjarmasin`.
- H1 dan pengantar beranda/program diperjelas untuk kebutuhan kursus IELTS, TOEFL, dan bahasa Inggris di Banjarmasin serta kelas online.
- Halaman layanan memuat tujuan peserta, materi, pilihan belajar, konsultasi biaya/jadwal, tutor dari CMS, testimoni sesuai program, dan FAQ.
- Tautan internal dari footer dan halaman testimoni mengarah ke halaman layanan yang relevan. Sesuai revisi pemilik, tautan tambahan di kartu program dan blok panduan di section program beranda/halaman kelas dihapus; kedua halaman layanan dan sitemap tetap tersedia.
- Kedua URL masuk sitemap. Breadcrumb memiliki urutan Beranda → Program → halaman layanan, ditampilkan sebagai navigasi dan JSON-LD.
- Structured data Service dan FAQ mengikuti isi yang tampil. Tidak ada angka harga, rating, ketersediaan kursi, atau jaminan hasil yang ditambahkan ke schema.
- Serialisasi JSON-LD mengamankan karakter `<` agar teks dari CMS tidak menutup elemen script.
- Tombol utama beranda sekarang membuka daftar program.
- Data tautan layanan dipisahkan dari naskah panjang halaman dan dipakai oleh navigasi panduan pada halaman testimoni.

## Pemetaan keyword

| Halaman | Primary | Secondary | Search intent |
| --- | --- | --- | --- |
| Beranda | kursus IELTS dan TOEFL Banjarmasin | kursus bahasa Inggris Banjarmasin; les privat bahasa Inggris; kelas online | Mencari lembaga dan memilih layanan |
| `/program` | program IELTS dan TOEFL | kelas privat; kursus online; pilihan belajar Banjarmasin | Membandingkan program |
| `/program/ielts-banjarmasin` | kursus IELTS Banjarmasin | les IELTS; private IELTS Banjarmasin; biaya kursus IELTS Banjarmasin; belajar IELTS online | Mencari kelas, biaya, tutor, dan cara mendaftar |
| `/program/toefl-banjarmasin` | kursus TOEFL Banjarmasin | les TOEFL; private TOEFL online; biaya kursus TOEFL Banjarmasin; TOEFL ITP dan iBT | Memilih persiapan tes yang sesuai kebutuhan |
| `/webinar` | webinar beasiswa gratis | rekaman belajar IELTS; webinar TOEFL | Mencari acara dan materi belajar |

Varian lokal dan online ditempatkan dalam dua halaman layanan yang cukup lengkap. Halaman online nasional yang hampir sama tidak ditambahkan, agar konten tidak terpecah menjadi halaman duplikat. URL artikel dalam riset tetap berupa rencana konten berikutnya.

## Analisis kepadatan

Pengukuran awal dari render komponen layanan, termasuk FAQ dan contoh tutor/testimoni yang diberikan pemilik, tanpa navigasi global dan footer:

| Halaman | Jumlah kata | Kemunculan frasa primary | Kepadatan frasa |
| --- | --- | --- | --- |
| IELTS | 818 | 5 | 0,61% |
| TOEFL | 805 | 5 | 0,62% |

Rumus: jumlah kemunculan frasa lengkap, tanpa membedakan huruf besar/kecil, dibagi jumlah kata × 100. Metadata, JSON-LD, dan markup HTML tidak dihitung. Angka berubah jika CMS mengubah profil tutor atau testimoni. Ini ukuran editorial untuk memeriksa pengulangan, bukan faktor atau jaminan ranking Google.

Keyword muncul di H1, breadcrumb, paragraf yang relevan, bagian biaya, dan pertanyaan pengguna. Sinonim dan nama materi memberi konteks, sehingga setiap paragraf tidak perlu mengulang frasa utama. Daftar meta keywords lama dihapus; optimasi dilakukan pada isi yang berguna dan navigasi.

## Variasi semantik dan entitas

28 istilah/konsep untuk menjaga kedalaman topik. Daftar ini merupakan panduan editorial, bukan instruksi memasukkan semuanya ke setiap halaman:

1. Les IELTS Banjarmasin
2. IELTS preparation
3. Private IELTS
4. Kelas IELTS offline
5. Belajar IELTS online
6. Persiapan studi dan beasiswa
7. Listening IELTS
8. Reading IELTS
9. Writing IELTS
10. Speaking IELTS
11. Kemampuan awal peserta
12. Target skor kampus tujuan
13. TOEFL preparation
14. Private TOEFL online
15. TOEFL ITP
16. TOEFL iBT
17. Structure and Written Expression
18. Reading Comprehension
19. Listening Comprehension
20. Biaya paket kursus
21. Jadwal kelas privat
22. Durasi pertemuan
23. Tutor lulusan TESOL
24. Tutor awardee LPDP
25. Mahasiswa dan fresh graduate
26. Peserta yang bekerja
27. Latihan mandiri
28. Konsultasi kebutuhan belajar

Entitas utama: English Banua, PT. Banua Education Center, Banjarmasin, Kalimantan Selatan, IELTS, TOEFL, ETS, IELTS.org, tutor dan peserta yang benar-benar tercatat pada konten lembaga. Nama universitas dan capaian tutor ditampilkan dari data yang tersedia, tanpa menambah afiliasi atau klaim baru.

## Validasi

Jalankan `npm run check:seo` untuk memeriksa metadata delapan rute, hubungan sitemap dengan halaman, hierarki breadcrumb, satu H1 per halaman layanan, kesesuaian FAQ dengan JSON-LD, tautan internal, serta pengamanan JSON-LD. Script juga mencetak metrik keyword.

Pemeriksaan ini memakai modul SEO dan render React yang terisolasi. Next.js server, build, dan file konfigurasi environment tidak dijalankan atau dimuat. Pemeriksaan tipe TypeScript dan ESLint dilakukan terpisah. Pemeriksaan tersebut tidak menggantikan uji server Next.js lengkap saat lingkungan pengujian yang diizinkan tersedia.

Preview HTML komponen dengan stylesheet project berhasil dibuat. Browser tidak dapat menjangkau server preview lokal pada sesi ini, sehingga tampilan desktop/mobile belum dapat diverifikasi secara visual melalui Browser.

## Data yang sengaja ditunda

Sesuai arahan pemilik, harga, jumlah/durasi pertemuan, dan alamat lengkap kelas offline belum diisi. Pengunjung diarahkan menanyakan rincian kepada admin. Tidak ada harga contoh atau klaim cabang baru.

Domain canonical tetap mengikuti konfigurasi URL situs yang sudah tersedia. Konfigurasi domain, aturan noindex untuk host pratinjau, akun sosial yang benar, redirect URL lama, Google Business Profile, dan Search Console perlu dipastikan saat migrasi/rilis. Tidak ada perubahan konfigurasi environment, akun eksternal, atau deployment dalam pekerjaan ini.

## Rujukan isi tes

Materi membedakan ITP dan iBT, serta mengarahkan pembaca ke sumber primer:

- [Format IELTS Academic](https://ielts.org/take-a-test/test-types/ielts-academic-test) untuk empat keterampilan IELTS Academic.
- [Test content TOEFL ITP dari ETS](https://www.ets.org/toefl/itp/test-content.html) untuk Listening Comprehension, Structure and Written Expression, serta Reading Comprehension.
- [Format TOEFL iBT terkini dari ETS](https://www.ets.org/toefl/test-takers/ibt/about/content.html) untuk pemeriksaan format menurut tanggal tes. Tidak ada rincian durasi, format tugas lama, atau angka konversi skor yang ditambahkan pada halaman layanan.
