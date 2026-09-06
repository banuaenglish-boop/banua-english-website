import { defineArrayMember, defineField, defineType } from "sanity";

/** Kunci ikon Phosphor. Komponen memetakan kunci ini ke elemen React. */
const ICON_KEYS = [
  { title: "Clock", value: "clock" },
  { title: "Graduation Cap", value: "graduationCap" },
  { title: "Star", value: "star" },
  { title: "Video", value: "video" },
  { title: "Chalkboard", value: "chalkboard" },
  { title: "Users", value: "users" },
  { title: "Book Open", value: "bookOpen" },
];

const order = defineField({
  name: "order",
  title: "Urutan",
  type: "number",
  description: "Angka kecil tampil lebih dulu.",
});

const featuredOnHome = defineField({
  name: "featuredOnHome",
  title: "Tampilkan di Homepage",
  type: "boolean",
  initialValue: false,
});

export const program = defineType({
  name: "program",
  title: "Program / Kelas",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nama Program",
      type: "string",
      validation: (r) => r.required().max(80),
    }),
    defineField({
      name: "subtitle",
      title: "Subjudul",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "mode",
      title: "Mode",
      type: "string",
      options: {
        list: [
          { title: "Private 1-on-1", value: "private" },
          { title: "Offline", value: "offline" },
          { title: "Online", value: "online" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Gambar",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: 'Opsional, mis. "🔥 Paling Diminati".',
    }),
    defineField({
      name: "badgeColor",
      title: "Warna Badge",
      type: "string",
      options: {
        list: [
          { title: "Oranye", value: "bg-orange-500 text-white" },
          { title: "Biru Banua", value: "bg-[#2C3E8A] text-white" },
        ],
      },
      hidden: ({ parent }) => !parent?.badge,
    }),
    defineField({
      name: "highlight",
      title: "Highlight",
      type: "string",
      description: 'Label kecil di atas gambar, mis. "Request Materi Bebas".',
    }),
    defineField({
      name: "ctaLabel",
      title: "Label Tombol",
      type: "string",
      description: 'Default: "Lihat Detail".',
    }),
    defineField({
      name: "features",
      title: "Fitur",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "iconKey",
              title: "Ikon",
              type: "string",
              options: { list: ICON_KEYS },
              validation: (r) => r.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "label", subtitle: "iconKey" } },
        }),
      ],
      validation: (r) => r.max(4),
    }),
    featuredOnHome,
    order,
  ],
  preview: { select: { title: "title", subtitle: "subtitle", media: "image" } },
});

export const tutor = defineType({
  name: "tutor",
  title: "Tutor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: 'Mis. "ERASMUS Awardee". Dipakai di halaman Program.',
    }),
    defineField({
      name: "expertise",
      title: "Spesialisasi",
      type: "string",
      description: 'Mis. "IELTS Speaking".',
    }),
    defineField({
      name: "credential",
      title: "Kredensial",
      type: "string",
      description: "Gelar / almamater / beasiswa.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "score",
      title: "Skor",
      type: "string",
      description: 'Mis. "Overall IELTS 7.0". Dipakai di Homepage.',
    }),
    defineField({
      name: "experience",
      title: "Pengalaman",
      type: "string",
      description: 'Mis. "10+ Tahun Pengalaman Mengajar". Dipakai di Homepage.',
    }),
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    featuredOnHome,
    order,
  ],
  preview: { select: { title: "name", subtitle: "credential", media: "image" } },
});

export const teamMember = defineType({
  name: "teamMember",
  title: "Tim (Tentang Kami)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Peran",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Profil Singkat",
      type: "text",
      rows: 3,
      description: "Tampil di sisi belakang kartu saat diklik.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    order,
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});

export const milestone = defineType({
  name: "milestone",
  title: "Milestone (Timeline)",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Tahun",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {
      title: "Tahun (lama → baru)",
      name: "yearAsc",
      by: [{ field: "year", direction: "asc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "year" } },
});

export const partner = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama Institusi",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      description: 'Boleh pakai emoji bendera, mis. "🇬🇧 UK".',
      validation: (r) => r.required(),
    }),
    order,
  ],
  preview: { select: { title: "name", subtitle: "region" } },
});

export const webinar = defineType({
  name: "webinar",
  title: "Webinar",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      description:
        "Dipakai untuk alt text dan judul kartu. Detail lain ada di poster.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "country",
      title: "Negara Tujuan",
      type: "string",
      options: {
        list: [
          { title: "🇬🇧 UK", value: "uk" },
          { title: "🇺🇸 USA", value: "usa" },
          { title: "🇦🇺 Australia", value: "australia" },
          { title: "🇪🇺 Eropa", value: "eropa" },
          { title: "🇮🇩 Indonesia", value: "indonesia" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Tanggal",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      description: "Menentukan filter Terbaru / Upcoming.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "poster",
      title: "Poster",
      type: "image",
      description: "Portrait 3:4.",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "registrationUrl",
      title: "Link Pendaftaran",
      type: "url",
      description: "Kosongkan untuk mengarahkan ke /kontak.",
    }),
    featuredOnHome,
  ],
  orderings: [
    {
      title: "Tanggal (baru → lama)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "date", media: "poster" } },
});

export const pastWebinar = defineType({
  name: "pastWebinar",
  title: "Arsip Webinar (ringkas)",
  type: "document",
  description: "Daftar ringkas di bagian bawah halaman Webinar.",
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "dateLabel",
      title: "Label Tanggal",
      type: "string",
      description: 'Teks bebas, mis. "Agustus 2026".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "string",
      description: 'Mis. "2.4K views".',
    }),
    defineField({
      name: "speaker",
      title: "Pembicara",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "youtubeUrl",
      title: "Link YouTube",
      type: "url",
    }),
    order,
  ],
  preview: { select: { title: "title", subtitle: "speaker" } },
});

export const video = defineType({
  name: "video",
  title: "Recording / Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "IELTS", value: "ielts" },
          { title: "TOEFL", value: "toefl" },
          { title: "Scholarship", value: "scholarship" },
          { title: "General English", value: "general" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Tanggal Tayang",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      description: "Tanggal di masa depan dianggap jadwal premiere.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "string",
      description: 'Mis. "3.2K", atau "Premiere" untuk video mendatang.',
    }),
    defineField({
      name: "duration",
      title: "Durasi",
      type: "string",
      description: 'Format mm:ss atau hh:mm:ss, mis. "58:04".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "Landscape 16:9.",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "youtubeUrl",
      title: "Link YouTube",
      type: "url",
      validation: (r) => r.required(),
    }),
    featuredOnHome,
  ],
  orderings: [
    {
      title: "Tanggal (baru → lama)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "thumbnail" },
  },
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimoni",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama Alumni",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "program",
      title: "Program",
      type: "string",
      options: {
        list: [
          { title: "IELTS", value: "ielts" },
          { title: "TOEFL", value: "toefl" },
          { title: "Scholarship", value: "scholarship" },
          { title: "Private 1-on-1", value: "private" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "programLabel",
      title: "Label Program",
      type: "string",
      description: 'Teks badge, mis. "IELTS Preparation".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "score",
      title: "Skor / Capaian",
      type: "string",
      description: 'Mis. "IELTS 7.0" atau "LPDP Awardee".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "achievement",
      title: "Pencapaian",
      type: "string",
      description: 'Mis. "Diterima di The University of Melbourne".',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "university",
      title: "Universitas / Beasiswa",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "text",
      title: "Kutipan",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "shortText",
      title: "Kutipan Pendek (Homepage)",
      type: "text",
      rows: 3,
      description:
        "Versi ringkas untuk marquee homepage. Kosongkan untuk memakai Kutipan.",
    }),
    defineField({
      name: "role",
      title: "Role (Homepage)",
      type: "string",
      description: 'Baris kecil di marquee, mis. "IELTS 7.5 · Awardee LPDP UK".',
    }),
    defineField({
      name: "avatar",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    featuredOnHome,
    order,
  ],
  preview: { select: { title: "name", subtitle: "score", media: "avatar" } },
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Pertanyaan",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "answer",
      title: "Jawaban",
      type: "text",
      rows: 5,
      validation: (r) => r.required(),
    }),
    order,
  ],
  preview: { select: { title: "question" } },
});

export const schemaTypes = [
  program,
  tutor,
  teamMember,
  milestone,
  partner,
  webinar,
  pastWebinar,
  video,
  testimonial,
  faq,
];
