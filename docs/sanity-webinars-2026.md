# Impor poster webinar 2026

Tanggal pemeriksaan visual: 16 Oktober 2026. Sumber: 35 file PNG dalam folder Webinar milik pemilik.
Target: Sanity project `25ynefoe`, dataset `production`.

## Tanggal dari poster

Seluruh poster bertahun 2026, dari 11 Januari sampai 11 Oktober. Jam pada poster menggunakan WITA (Asia/Makassar). Semua acara sudah lewat pada tanggal pemeriksaan; filter Upcoming tidak boleh menggunakan tanggal contoh yang lama.

| File | Tanggal | Jam WITA | Narasumber | Kampus / program | Negara / kategori |
| --- | --- | --- | --- | --- | --- |
| 1.png | 2026-09-06 | 16:30 | Mr. Arief | University of Oxford | uk |
| 2.png | 2026-08-23 | 16:30 | Mr. Saiful | Massey University | new-zealand |
| 3.png | 2026-08-09 | 16:30 | Ms. Tasya | University of Birmingham | uk |
| 4.png | 2026-08-02 | 16:30 | Ms. Meliana | Seoul National University | south-korea |
| 5.png | 2026-07-26 | 16:30 | Ms. Lisda | University of New South Wales | australia |
| 6.png | 2026-07-19 | 16:30 | Mr. Hilman | Hochschule Bremen | germany |
| 7.png | 2026-07-12 | 16:30 | Ms. Rara | National University of Singapore | singapore |
| 8.png | 2026-07-05 | 10:00 | Ms. Adzra | University of British Columbia | canada |
| 9.png | 2026-06-28 | 16:30 | Ms. Raisa | Kocaeli University | turkiye |
| 10.png | 2026-06-21 | 20:00 | Ms. Nuhi | National Taiwan University of Science and Technology | taiwan |
| 11.png | 2026-06-14 | 16:30 | Mrs. Mito | University of Birmingham | uk |
| 12.png | 2026-06-07 | 16:30 | Ms. Mayda | Monash University | australia |
| 13.png | 2026-05-31 | 20:00 | Ms. Fona | University of Oxford | uk |
| 14.png | 2026-05-24 | 16:30 | Ms. Nail | Chulalongkorn University | thailand |
| 15.png | 2026-05-16 | 13:00 | Ms. Dini | Washington State University | usa |
| 16.png | 2026-05-10 | 16:30 | Mr. Alvianto | University of Bonn | germany |
| 17.png | 2026-05-03 | 16:30 | Ms. Nayla | University of Sydney | australia |
| 18.png | 2026-04-26 | 16:30 | Mr. John | Central South University | china |
| 19.png | 2026-04-19 | 16:30 | Mr. Syahro | University of Colorado Boulder | usa |
| 20.png | 2026-04-12 | 16:30 | Ms. Walis | University of Edinburgh | uk |
| 21.png | 2026-04-05 | 16:30 | Ms. Yuliana | University of Melbourne | australia |
| 22.png | 2026-03-15 | 16:30 | Mr. Fatur | Yeungnam University | south-korea |
| 23.png | 2026-03-08 | 16:30 | Ms. Kiki | MARIHE Erasmus Mundus | eropa |
| 24.png | 2026-03-01 | 16:30 | Mr. Smile | University of New South Wales | australia |
| 25.png | 2026-02-22 | 16:30 | Mr. Cahyo | MARIHE Erasmus Mundus | eropa |
| 26.png | 2026-02-08 | 16:30 | Ms. Usi | University College London | uk |
| 27.png | 2026-02-01 | 16:30 | Ms. Arni | Universitas Indonesia | indonesia |
| 28.png | 2026-01-25 | 16:30 | Ms. Erina | Australian National University | australia |
| 29.png | 2026-01-11 | 16:30 | Ms. Fransisca | Kobe University | japan |
| 30 (1).png | 2026-09-20 | 16:30 | Ms. Shavira | Korea University | south-korea |
| 30 (2).png | 2026-09-13 | 16:30 | Ms. Ara | University of Macerata | italy |
| 30 (3).png | 2026-09-27 | 20:00 | Ms. Asyifa | Harvard University | usa |
| 30 (5).png | 2026-10-11 | 16:30 | Ms. Feby | EM-CLMC Erasmus Mundus | eropa |
| 30 (6).png | 2026-10-04 | 16:30 | Ms. Zalfa | University of Cambridge | uk |
| 30 (7).png | 2026-08-30 | 16:30 | Mr. Yasir | Linnaeus University | sweden |

## Cara pengisian

- `data/webinars-2026.json` mencatat hasil pembacaan poster, termasuk tanggal, jam, pembicara, dan institusi. Field tanggal, negara, judul, poster, serta penanda beranda digunakan oleh schema webinar yang ada. Nama pembicara dimasukkan ke judul; jam tetap tersedia pada poster dan manifest.
- Lima poster sudah pernah menjadi data awal: Tasya, Saiful, Meliana, Yasir, dan Arief. Importer mempertahankan ID dokumen dan memperbaiki tanggal/kategorinya, serta memakai poster PNG asli.
- Tiga puluh poster lainnya memiliki ID stabil. Importer melewati data yang sudah sesuai dan berhenti jika dokumen lama atau draft telah berubah. Lima pembaruan memakai pemeriksaan revision ID.
- Original PNG diunggah ke asset Sanity. File poster tidak ditambahkan ke Git. Website tetap memakai transformasi CDN Sanity.
- Tautan pendaftaran lama pada lima dokumen dipertahankan. Dokumen baru memakai fallback konsultasi website; URL generik pada poster tidak dijadikan tautan pendaftaran sesi yang sudah berlalu.
- Semua dokumen ditandai untuk beranda; query beranda menampilkan lima acara paling baru.
- Pilihan negara pada Studio, tipe data, dan filter website menggunakan satu daftar berisi 17 kategori. Dropdown dapat digulir, dan judul daftar mencakup jadwal serta arsip.

## Menjalankan ulang

```powershell
# Hanya validasi lokal
node scripts/import-webinars.mjs --source-dir "PATH_KE_FOLDER_WEBINAR"

# Unggah dan simpan menggunakan login CLI yang sudah ada
node --use-system-ca scripts/import-webinars.mjs --source-dir "PATH_KE_FOLDER_WEBINAR" --apply --report-dir "PATH_KE_LAPORAN_LOKAL"
```

Importer tidak memuat dotenv atau file konfigurasi environment. Backup sebelum transaksi, cache asset, dan hasil verifikasi disimpan di direktori laporan lokal. Tidak ada dokumen atau asset yang dihapus.

Semua unggahan harus selesai sebelum satu transaksi dokumen dijalankan. Setelahnya importer membaca ulang 35 dokumen dan memeriksa tanggal, judul, negara, penanda beranda, dan referensi asset. Menjalankan ulang data yang sama tidak membuat webinar duplikat.

Rujukan API melalui Context7: [Sanity JavaScript client](https://github.com/sanity-io/client/blob/main/README.md), bagian upload asset, createIfNotExists, transaction, dan ifRevisionId.

## Hasil pengisian Sanity

Berhasil disimpan dan dibaca ulang: **35 dokumen published** di `25ynefoe/production` (30 baru, 5 diperbaiki). Seluruh referensi poster tervalidasi. Rentang tanggal: 2026-01-11 sampai 2026-10-11.

Satu upload sempat menerima HTTP 503; pengulangan memakai kembali 34 asset yang sudah terunggah dan berhasil menyelesaikan poster terakhir sebelum transaksi dokumen. Tidak ada dokumen duplikat atau asset lama yang dihapus.

Validasi project: pemeriksaan tipe TypeScript, ESLint untuk file terkait, dry run 35 poster, dan empat tes seed Sanity lolos. Status deployment website diperiksa terpisah dari penyimpanan data CMS.
