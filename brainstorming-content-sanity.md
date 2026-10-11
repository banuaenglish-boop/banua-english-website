# Brainstorming: Konten CMS Sanity — English Banua

## Ringkasan Arsitektur

Website terdiri dari **5 halaman** (Beranda, Program, Webinar, Testimoni, Tentang Kami), dengan setiap konten utama dikelola via Sanity agar non-teknis bisa update tanpa deploy ulang.

---

## A. Status Sanity Schema Saat Ini ✅ (sudah ada)

| Schema | Dokumen | Tampil di halaman |
|---|---|---|
| `program` | 6 program/kelas | Program → explorer; Beranda → slider |
| `tutor` | 6 tutor | Program → tutor section; Beranda → preview |
| `teamMember` | 4 anggota tim | Tentang Kami → team grid |
| `milestone` | 4 milestone | Tentang Kami → timeline |
| `partner` | 6 institusi | Tentang Kami → partnerships |
| `webinar` | 5 webinar upcoming | Webinar → list; Beranda → preview |
| `pastWebinar` | 5 arsip | Webinar → arsip bawah |
| `video` | 6 recording | Webinar → video grid; Beranda → preview |
| `testimonial` | 6 testimoni | Testimoni → gallery; Beranda → marquee |
| `faq` | 6 FAQ | (blm terpakai — cadangan) |

---

## B. Konten Static / Konfigurasi (belum masuk CMS)

Konten ini saat ini hard-coded di komponen / file konfigurasi. Opsional masuk CMS — cocok untuk tim konten atau multi-language.

### 1. **Site Config** (`src/lib/site.ts`)
- Nama, URL, deskripsi SEO, kontak (email, telepon, WA), jam operasional, sosial media
- **Prioritas: rendah** — jarang berubah & dipakai di metadata/layout
- **Alternatif:** single‑document `siteSettings` di Sanity buat SEO & kontak

### 2. **Hero Section** (`src/components/Hero.tsx`)
- Background video path (saat ini `/background/90933-629483642_small.mp4`)
- Heading / subheading teks
- **Prioritas: rendah** — tim konten perlu ganti teks promo tanpa deploy

### 3. **Stats** (`src/lib/content.ts` + `src/components/Stats.tsx`)
- 4 kartu statistik besar (50+ Tutor, 10.000+ Alumni, 85% Lolos Beasiswa, 98% Capai Target)
- Belum dipasang di layout mana pun skrg? Coba dicek.
- **Prioritas: medium** — angkanya berubah seiring waktu

### 4. **Home About Section** (`src/components/HomeAboutSection.tsx`)
- Teks & gambar profil singkat English Banua
- **Prioritas: medium** — perlu diedit tim konten

### 5. **CTAs & Banner** (`src/components/HomeCTABanner.tsx`, `src/components/testimoni/SuccessCTA.tsx`)
- CTA stats (7.0+ Rata-rata kenaikan skor, dll.)
- Call‑to‑action teks & link
- **Prioritas: rendah** — cukup template umum

### 6. **Hero Text per Halaman** (Hero, WebinarHero, TestimoniHero, AboutHero)
- Masing-masing punya heading, subheading, dekorasi
- **Prioritas: medium** — biar tim konten bisa ganti pesan promosi per halaman

### 7. **Registration Steps** (`src/components/program/RegistrationSteps.tsx`)
- 3 langkah statis (Konsultasi → Daftar → Mulai Belajar)
- **Prioritas: rendah** — jarang berubah

### 8. **Timeline & Partnerships konten** (sebagian ditarik dari Sanity, sebagian static)
- Sudah milik Sanity: ✅ milestone, ✅ partner
- Sisanya static: **tidak perlu masuk CMS**

### 9. **JsonLd / SEO snippet** (`src/components/JsonLd.tsx`)
- Terbangun otomatis dari `siteConfig`
- **Prioritas: sangat rendah** — full otomatis

---

## C. Rekomendasi Prioritas Migrasi ke CMS

### 🟢 Phase 1 — Sekarang (existing, sudah jalan)
Semua schema yang sudah ada di `schemaTypes/index.ts`.

### 🟡 Phase 2 — Nilai tinggi, effort rendah
| Fitur | Ganti apa | Kenapa |
|---|---|---|
| **Hero text per halaman** | Single‑doc `pageSettings` atau field tiap halaman | Tim marketing bisa ganti tagline sesuai event/moment |
| **Stats angka** | Schematype `siteStats` sbg array of { number, label } | Angka alumni dan tutor naik tiap bulan |
| **Home About** | Schematype `homeAbout` (text + image) | Deskripsi branding perlu disesuaikan periodik |

### 🔵 Phase 3 — Nice to have
| Fitur | Ganti apa | Kenapa |
|---|---|---|
| **Site config** | Single‑doc `siteSettings` | SEO title/desc/kontak bisa diganti tanpa deploy |
| **CTA banner text** | `ctaBanner` single‑doc | Promo periodik (flash sale, event) |

---

## D. Catatan Teknis
- **Semua schema existing sudah siap digunakan** — tinggal isi data via Sanity Studio
- Query Sanity ada di `src/sanity/lib/queries.ts` & dipakai langsung di page.tsx
- Komponen yang belum narik dari Sanity (Hero text, Stats, Home About) masih baca dari **hard‑code** atau **`src/lib/content.ts`**
- Saat migrasi komponen ke CMS: jangan hapus fallback hard‑code — CMS bisa kosong saat development

---

## E. Pertanyaan untuk Tim
1. Apakah tim konten perlu edit **Hero teks** sendiri? → Y: masuk Phase 2 / N: biarkan hard‑code
2. Apakah ada halaman baru yg direncanakan (Blog, Karir, Events)? → akan nambah schema
3. **Stats** — apakah saat ini ditampilkan di suatu section? Cek `Stats` component dipanggil di mana.