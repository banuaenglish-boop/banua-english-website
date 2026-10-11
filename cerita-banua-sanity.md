# Mengelola Cerita Banua

Di Sanity Studio, buka **Cerita Banua**, lalu pilih cerita yang ingin diedit atau buat dokumen baru.

- **Foto**: unggah atau ganti gambar.
- **Caption**: isi 1–3 kalimat (maksimal 400 karakter), tanpa judul artikel.

Hanya dua isian ini yang tampil di form. Caption juga dipakai sebagai teks alternatif untuk pembaca layar. Pengaturan lama disembunyikan agar data awal tetap terjaga, dan tidak wajib diisi saat membuat cerita baru. Cerita Banua hanya tampil di halaman khusus, bukan di beranda.

Klik **Publish** untuk menampilkan perubahan. Semua cerita yang dipublikasikan tampil di `/cerita-banua`. Perubahan dibaca melalui integrasi Sanity Live yang sudah digunakan website.

Tiga foto awal telah diimpor ke project `25ynefoe`, dataset `production`. ID dokumennya:

- `initial-banuaStory-kegiatan-belajar`
- `initial-banuaStory-kunjungan-tamu`
- `initial-banuaStory-ruang-kursus`

Import ulang jika diperlukan:

```powershell
node --use-system-ca scripts/sanity-seed.mjs --type banuaStory --project 25ynefoe --dataset production --apply
```

Perintah memakai login CLI Sanity yang sudah ada atau variabel proses yang diwariskan, tanpa membaca file konfigurasi lingkungan. Dokumen yang sudah ada (termasuk draft) dilewati agar perubahan editorial tetap terjaga.

Saat Sanity mengembalikan daftar kosong, foto contoh tidak dimunculkan kembali. Data lokal hanya digunakan ketika koneksi tidak tersedia atau project belum dihubungkan.
