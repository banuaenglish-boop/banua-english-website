# Banua English Website

Website resmi **English Banua** — lembaga kursus bahasa Inggris, TOEFL, dan IELTS di Banjarmasin, Kalimantan Selatan.

Stack: **Next.js 16**, **React 19**, **Tailwind CSS 4**, **Sanity CMS**.

## Fitur

- Halaman beranda, program, tentang kami, webinar, recording, testimoni, kontak
- Konten dinamis lewat Sanity
- UI modern (Framer Motion, Phosphor / Lucide)

## Prasyarat

- Node.js 20+
- npm
- Akun Sanity (untuk CMS)

## Setup

```bash
npm install
cp .env.example .env   # isi variabel Sanity
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Environment

Buat `.env` (lihat `.env.example`):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_DRAFT_SECRET=
SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET=production
```

Jangan commit file `.env`.

## Scripts

| Command | Keterangan |
| --- | --- |
| `npm run dev` | Dev server Next.js |
| `npm run build` | Production build |
| `npm run start` | Jalankan build production |
| `npm run lint` | ESLint |
| `npm run studio:dev` | Sanity Studio lokal |
| `npm run studio:deploy` | Deploy Sanity Studio |

## Struktur

```
src/
  app/           # App Router pages & API
  components/    # UI sections
  lib/           # Helpers
  sanity/        # Schema, client, queries
public/          # Static assets
```

## Deploy

Siap untuk Vercel / host Node. Pastikan env Sanity terisi di dashboard hosting.

## Lisensi

Private — © English Banua.
