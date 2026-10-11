# Data awal Sanity

Sumber seed adalah konten yang saat ini tampil: `mockData.ts` untuk program,
partner, webinar, dan video; `provided-content.ts` untuk tutor, tim, timeline,
dan testimoni. Tutor/testimoni contoh lama tidak diimpor.

Total: 48 dokumen (6 program, 8 tutor, 8 tim, 5 milestone, 6 partner,
5 webinar, 6 video, 4 testimoni). Konten header, footer, informasi kontak,
dan teks UI tetap di kode; FAQ/arsip lama yang tidak dipakai tidak diimpor.

## Periksa sebelum mengunggah

```powershell
npm run sanity:seed
node --test scripts/sanity-seed.test.mjs
```

Secara default script hanya memvalidasi. Script tidak membaca file `.env`.
Untuk mengunggah diperlukan login CLI Sanity yang punya akses tulis ke proyek,
atau `SANITY_API_WRITE_TOKEN`/`SANITY_AUTH_TOKEN` yang sudah diwariskan oleh shell.
Jangan menyimpan token di kode atau mengirimkannya melalui chat.

## Masukkan data

Pastikan dataset tujuan sudah ada. Project yang diberikan pemilik: `25ynefoe`.
Konfirmasi dataset (contoh di bawah memakai `production`), kemudian jalankan:

```powershell
npm run sanity:seed -- --apply --project 25ynefoe --dataset production
```

Script mengunggah gambar lokal dari `public` dan gambar Unsplash yang dipakai
konten sekarang, lalu membuat referensi asset Sanity. ID dokumen stabil;
dokumen atau draft dengan ID yang sudah ada dilewati. Tidak ada penghapusan
atau penggantian dokumen. Dokumen baru dibuat dalam satu transaksi lalu dibaca
kembali untuk memastikan tersimpan. Upload asset dapat tetap tersimpan jika
transaksi dokumen gagal; menjalankan ulang tidak menggandakan konten seed.

Gambar Unsplash program mentoring beasiswa yang mengembalikan 404 diganti
dengan foto kampus lokal `public/background/univ-glasglow.jpg`.

Tanggal webinar dan URL YouTube contoh belum menjadi jadwal/link asli.
URL pendaftaran `/kontak` yang sudah tidak punya halaman diganti ke WhatsApp
kontak website. Skor, capaian, dan foto alumni yang belum tersedia tetap kosong;
schema Studio mengizinkannya. Flag homepage dan urutan mengikuti konten saat ini.

Seed menggunakan [createIfNotExists](https://www.sanity.io/docs/apis-and-sdks/js-client-mutations)
agar konten yang sudah diedit di Studio tidak tertimpa saat script diulang.
