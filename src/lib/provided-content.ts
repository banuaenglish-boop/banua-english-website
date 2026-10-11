import type { HomeTestimonial, HomeTutor, Milestone, TeamMember, Testimonial, Tutor } from "@/sanity/lib/types";

// Konten dari folder Tutor dan Information.txt yang diberikan pemilik website.
export const tutors: Tutor[] = [
  { _id: "nikmah", name: "Ms. Nikmah", role: "Tutor Offline", credential: "S2 TESOL · University of Edinburgh, UK", expertise: "IELTS Overall 8.0", image: "/tutors/ms-nikmah.webp" },
  { _id: "aa", name: "Ms. Aa", role: "Tutor Offline", credential: "S2 Hubungan Internasional · Universitas Indonesia", expertise: "IELTS Overall 7.0", image: "/tutors/ms-aa.webp" },
  { _id: "rian", name: "Mr. Rian", role: "Tutor Offline", credential: "S2 Pendidikan Bahasa Inggris · UIN Syekh Wasil Kediri", expertise: "2 tahun pengalaman mengajar di Kampung Inggris Pare, Jawa Timur", image: "/tutors/mr-rian.webp" },
  { _id: "oja", name: "Ms. Oja", role: "Tutor Offline", credential: "S1 Sastra Inggris · Universitas Brawijaya", expertise: "TOEFL 657 · IELTS 7.5", image: "/tutors/ms-oja.webp" },
  { _id: "reynaldi", name: "Mr. Reynaldi", role: "Tutor Online", credential: "S2 TESOL · University of Manchester, UK", expertise: "Awardee LPDP", image: "/tutors/mr-reynaldi.webp" },
  { _id: "boni", name: "Ms. Boni", role: "Tutor Online", credential: "S2 TESOL · Lancaster University, UK", expertise: "Awardee LPDP", image: "/tutors/ms-boni.webp" },
  { _id: "lisda", name: "Ms. Lisda", role: "Tutor Online", credential: "S2 Translation · University of New South Wales (UNSW), Australia", expertise: "Awardee LPDP", image: "/tutors/ms-lisda.webp" },
  { _id: "erina", name: "Ms. Erina", role: "Tutor Online", credential: "S2 Anthropology · Australian National University, Australia", expertise: "Awardee LPDP", image: "/tutors/ms-erina.webp" },
];

export const homeTutors: HomeTutor[] = tutors.slice(0, 4).map((tutor) => ({
  _id: tutor._id, name: tutor.name, credential: tutor.credential,
  image: tutor.image, score: tutor.expertise, experience: tutor.role,
}));

export const team: TeamMember[] = [
  ...tutors.filter((tutor) => tutor._id === "rian"),
  ...tutors.filter((tutor) => tutor._id !== "rian"),
].map((tutor) => ({
  _id: tutor._id,
  name: tutor.name,
  role: tutor._id === "rian" ? "Founder · Tutor Offline" : tutor.role ?? "Tutor",
  description: [tutor.credential, tutor.expertise].filter(Boolean).join(". "),
  image: tutor.image,
}));

export const milestones: Milestone[] = [
  { _id: "2016", year: "2016", title: "Berawal dari Les Privat", description: "Setelah satu bulan mengajar di Kampung Inggris Pare, Mr. Rian pulang ke Kalimantan Selatan dan membuka les privat bahasa Inggris di rumah untuk mahasiswa dan pekerja." },
  { _id: "2019", year: "2019", title: "Menjadi English Banua", description: "Les privat berubah menjadi English Banua. Peminat mulai bertambah dan kerja sama dengan himpunan mahasiswa dimulai, salah satunya ESA Antasari." },
  { _id: "2020", year: "2020–2022", title: "Jeda Saat Pandemi", description: "Kegiatan belajar sempat dihentikan sementara selama pandemi COVID-19." },
  { _id: "2023", year: "2023–2025", title: "Studi dan Mengajar di Kampung Inggris", description: "Mr. Rian menempuh S2 Pendidikan Bahasa Inggris di Kediri, Jawa Timur, serta mengajar selama dua tahun di Titiknol English Course, Kampung Inggris Pare." },
  { _id: "2025", year: "2025–sekarang", title: "Resmi Berbadan Hukum", description: "Mr. Rian kembali ke Kalimantan. English Banua bertransformasi menjadi PT. Banua Education Center dan fokus membuka les IELTS dan TOEFL." },
];

export const testimonials: Testimonial[] = [
  { _id: "nabiel-haggan", name: "Nabiel Haggan", program: "ielts", programLabel: "Private IELTS", score: "", achievement: "Student Exchange in Netherlands", university: "ULM Banjarmasin", status: "Mahasiswa", text: "Menurut saya, yang paling bagus dari sini adalah cara mengajarnya. Guru-gurunya bagus dan profesional. Selain itu, ini salah satu course yang affordable dan sesuai dengan value harganya.", avatar: "/testimonials/nabiel-haggan.webp" },
  { _id: "valencia-fayola", name: "Valencia Fayola", program: "ielts", programLabel: "IELTS", score: "IELTS Overall 6.5", achievement: "Awardee Beasiswa Talenta Indonesia (S1) by LPDP", university: "Universitas Prasetiya Mulya", status: "Business Economics", text: "The teacher is really easy-going. I practiced listening, reading, and speaking a lot, and it really improved my IELTS skills", avatar: "/testimonials/valencia-fayola.webp" },
  { _id: "mulyono-hadi", name: "Mulyono Hadi", program: "toefl", programLabel: "Private TOEFL Online", score: "", achievement: "", university: "PT Pertamina EP", status: "Bekerja", tutor: "Mr. Rian", text: "dimudahkan & online sangat membantu", avatar: "/testimonials/mulyono-hadi.webp" },
  { _id: "margareth-trevina", name: "Margareth Trevina Nugrahani", program: "ielts", programLabel: "Private IELTS Offline", score: "", achievement: "", university: "Universitas Sebelas Maret", status: "Fresh Graduate", tutor: "Mr. Rian & Ms. Oja", text: "All of the tutors are so friendly, kind, and patient. They explained the materials in detail and clearly. Even though I am a beginner in IELTS, I was able to follow the lessons and understand the basics of IELTS. They also boosted my motivation to learn IELTS and made me feel more confident about starting my IELTS journey", avatar: "" },
];

export const homeTestimonials: HomeTestimonial[] = testimonials.map((item) => ({
  _id: item._id, name: item.name, role: item.programLabel, score: item.score,
  university: item.university, text: item.text, avatar: item.avatar,
}));

export const heroTestimonials = testimonials
  .filter((item) => Boolean(item.avatar))
  .map((item) => ({
    ...item,
    quote: item._id === "nabiel-haggan"
      ? "Guru-gurunya bagus dan profesional."
      : item._id === "valencia-fayola"
        ? "The teacher is really easy-going."
        : item.text,
    imagePosition: item._id === "mulyono-hadi" ? "20% center" : "center 65%",
    imageScale: item._id === "nabiel-haggan" ? 1.35 : item._id === "valencia-fayola" ? 1.2 : 1,
  }));
