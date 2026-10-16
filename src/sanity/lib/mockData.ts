import type {
  Program,
  HomeTutor,
  Tutor,
  TeamMember,
  Milestone,
  Partner,
  Webinar,
  HomeWebinar,
  PastWebinar,
  Video,
  HomeVideo,
  Testimonial,
  HomeTestimonial,
  Faq,
} from "./types";

export const MOCK_PROGRAMS: Program[] = [
  {
    _id: "prog-1",
    title: "IELTS Preparation Masterclass",
    subtitle: "Persiapan IELTS Intensif",
    mode: "online",
    description:
      "Program bimbingan komprehensif 4 skill IELTS bersama Awardee beasiswa luar negeri. Disertai latihan dan feedback individual.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    badge: "Paling Populer",
    badgeColor: "amber",
    highlight: "Persiapan IELTS",
    ctaLabel: "Daftar IELTS Masterclass",
    features: [
      { iconKey: "clock", label: "Sesi Live Zoom" },
      { iconKey: "graduationCap", label: "Tutor Awardee UK/AU" },
      { iconKey: "star", label: "Latihan IELTS" },
      { iconKey: "bookOpen", label: "Modul & E-book Exclusive" },
    ],
  },
  {
    _id: "prog-2",
    title: "TOEFL iBT Intensive Booster",
    subtitle: "Bimbingan TOEFL iBT",
    mode: "online",
    description:
      "Kuasai strategi menjawab soal Listening, Reading, Speaking, dan Writing TOEFL iBT bersama tutor.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    badge: "Kelas Favorit",
    badgeColor: "emerald",
    highlight: "Persiapan TOEFL iBT",
    ctaLabel: "Daftar TOEFL iBT",
    features: [
      { iconKey: "clock", label: "Sesi Belajar Intensif" },
      { iconKey: "chalkboard", label: "Latihan Format Baru 2026" },
      { iconKey: "video", label: "Rekaman Sesi Kapan Saja" },
      { iconKey: "users", label: "Belajar Bersama Tutor" },
    ],
  },
  {
    _id: "prog-3",
    title: "Private 1-on-1 Mentoring",
    subtitle: "Bimbingan Exclusive Personal",
    mode: "private",
    description:
      "Program belajar privat disesuaikan dengan kebutuhan, jadwal, dan kelemahan spesifikmu. Dibimbing langsung oleh Head Tutor.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    badge: "Flexible Schedule",
    badgeColor: "blue",
    highlight: "Personalized Study Plan",
    ctaLabel: "Konsultasi Privat",
    features: [
      { iconKey: "users", label: "1 Tutor 1 Siswa" },
      { iconKey: "clock", label: "Jadwal Fleksibel" },
      { iconKey: "graduationCap", label: "Review Essay Beasiswa" },
      { iconKey: "star", label: "Mock Interview Beasiswa" },
    ],
  },
  {
    _id: "prog-4",
    title: "General English & Speaking Club",
    subtitle: "Offline Banjarmasin",
    mode: "offline",
    description:
      "Tingkatkan percaya diri berbicara bahasa Inggris dalam suasana santai dan interaktif di kelas offline Banjarmasin.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    badge: "Kelas Offline",
    badgeColor: "rose",
    highlight: "Native & Awardee Practice",
    ctaLabel: "Gabung Kelas Offline",
    features: [
      { iconKey: "chalkboard", label: "Tatap Muka di Banjarmasin" },
      { iconKey: "users", label: "Weekly Speaking Club" },
      { iconKey: "star", label: "Interactive Presentation" },
      { iconKey: "bookOpen", label: "Certificate of Completion" },
    ],
  },
  {
    _id: "prog-5",
    title: "Scholarship Mentoring & Essay Review",
    subtitle: "Pendampingan Beasiswa",
    mode: "online",
    description:
      "Bimbingan komprehensif penulisan Personal Statement, Motivation Letter, dan simulasi interview beasiswa LPDP, Chevening, AAS, & MEXT.",
    image:
      "/background/univ-glasglow.jpg",
    badge: "Best Seller Beasiswa",
    badgeColor: "amber",
    highlight: "Unlimited Essay Proofreading",
    ctaLabel: "Daftar Scholarship Mentoring",
    features: [
      { iconKey: "graduationCap", label: "Bedah Esai Unlimited" },
      { iconKey: "users", label: "Latihan Interview" },
      { iconKey: "star", label: "Curriculum Vitae Review" },
      { iconKey: "clock", label: "Konsultasi 1-on-1" },
    ],
  },
  {
    _id: "prog-6",
    title: "TOEFL ITP Academic Express",
    subtitle: "Persiapan TOEFL ITP S2/S3",
    mode: "online",
    description:
      "Program persiapan untuk mempelajari Structure, Written Expression, dan Listening TOEFL ITP untuk syarat sidang, CPNS, dan beasiswa dalam negeri.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
    badge: "Kelas Kilat",
    badgeColor: "emerald",
    highlight: "Persiapan TOEFL ITP",
    ctaLabel: "Daftar TOEFL ITP",
    features: [
      { iconKey: "clock", label: "Kelas TOEFL ITP" },
      { iconKey: "chalkboard", label: "Pembahasan Soal" },
      { iconKey: "star", label: "Latihan TOEFL ITP" },
      { iconKey: "bookOpen", label: "Bank Soal & Kunci Jawaban" },
    ],
  },
];

export const MOCK_TUTORS: Tutor[] = [
  {
    _id: "tut-1",
    name: "Aulia Rahman, M.Ed.",
    role: "Head IELTS Instructor",
    expertise: "IELTS Speaking & Writing",
    credential:
      "Master of Education - University of Melbourne | LPDP Awardee (IELTS 8.5)",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
  },
  {
    _id: "tut-2",
    name: "Dr. Rizky Pratama",
    role: "TOEFL Specialist",
    expertise: "TOEFL iBT & Academic Writing",
    credential:
      "Ph.D. in Applied Linguistics - NUS Singapore | Full Asian Development Bank Scholar",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    _id: "tut-3",
    name: "Nadia Safitri, M.Sc.",
    role: "Scholarship Mentor",
    expertise: "Scholarship Essay & Interview Strategy",
    credential:
      "M.Sc. Sustainable Energy - Cranfield University UK | Chevening Awardee",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    _id: "tut-4",
    name: "Fajar Hidayat, M.A.",
    role: "General English & Culture Lead",
    expertise: "Conversational Fluency & Pronunciation",
    credential:
      "M.A. International Relations - Osaka University | MEXT Scholar (IELTS 8.0)",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
  {
    _id: "tut-5",
    name: "Dini Anggraini, M.Sc.",
    role: "IELTS Listening & Reading Specialist",
    expertise: "Academic Reading Speed & Skimming",
    credential:
      "M.Sc. Data Science - University of Edinburgh | LPDP Awardee (IELTS 8.0)",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
  {
    _id: "tut-6",
    name: "Bagas Saputra, M.Eng.",
    role: "STEM Scholarship Mentor",
    expertise: "Research Proposal & STEM Essays",
    credential:
      "M.Eng. Robotics - TU Delft Netherlands | StuNed Scholar",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
];

export const MOCK_HOME_TUTORS: HomeTutor[] = [
  {
    _id: "tut-1",
    name: "Aulia Rahman, M.Ed.",
    credential: "Uni of Melbourne (LPDP)",
    score: "IELTS Band 8.5",
    experience: "5+ Tahun Pengalaman",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
  },
  {
    _id: "tut-2",
    name: "Dr. Rizky Pratama",
    credential: "NUS Singapore (ADB Scholar)",
    score: "TOEFL iBT 114",
    experience: "6+ Tahun Pengalaman",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    _id: "tut-3",
    name: "Nadia Safitri, M.Sc.",
    credential: "Cranfield Uni UK (Chevening)",
    score: "IELTS Band 8.0",
    experience: "4+ Tahun Pengalaman",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    _id: "tut-4",
    name: "Fajar Hidayat, M.A.",
    credential: "Osaka University Japan (MEXT)",
    score: "IELTS Band 8.0",
    experience: "4+ Tahun Pengalaman",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
];

export const MOCK_TEAM: TeamMember[] = [
  {
    _id: "tm-1",
    name: "M. Aulia Rahman",
    role: "Founder & Managing Director",
    description:
      "Master of Education dari University of Melbourne. Berpengalaman membimbing 1.000+ alumni lolos beasiswa luar negeri.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=480&fit=crop",
  },
  {
    _id: "tm-2",
    name: "Sarah Annisa, M.A.",
    role: "Co-Founder & Academic Director",
    description:
      "Lulusan Edinburgh University. Merancang kurikulum IELTS & TOEFL berbasis standar universitas top dunia.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=480&fit=crop",
  },
  {
    _id: "tm-3",
    name: "Budi Santoso",
    role: "Head of Operations & Student Success",
    description:
      "Memastikan proses belajar berjalan efektif dan membantu kebutuhan administratif ratusan siswa setiap bulannya.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=480&fit=crop",
  },
  {
    _id: "tm-4",
    name: "Dina Fitriani, S.Pd.",
    role: "Student Relations Manager",
    description:
      "Pendamping setia para siswa dari tes penempatan awal hingga pengiriman dokumen aplikasi beasiswa.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=480&fit=crop",
  },
];

export const MOCK_MILESTONES: Milestone[] = [
  {
    _id: "ms-1",
    year: "2021",
    title: "Pendirian English Banua",
    description:
      "Berawal dari komunitas belajar IELTS gratis di Banjarmasin dengan 20 siswa pertama.",
  },
  {
    _id: "ms-2",
    year: "2023",
    title: "Ekspansi Program Online",
    description:
      "Membuka program online nasional dan menembus 1.000+ alumni dari seluruh wilayah Indonesia.",
  },
  {
    _id: "ms-3",
    year: "2025",
    title: "Resmi Berbadan Hukum (PT)",
    description:
      "Transformasi menjadi PT Banua Education Center dengan 50+ Tutor Awardee bersertifikat.",
  },
  {
    _id: "ms-4",
    year: "2026",
    title: "10.000+ Alumni & Partnership Global",
    description:
      "Mencapai 10.000+ alumni dengan kelolosan beasiswa LPDP, Chevening, AAS, MEXT, dan AAS.",
  },
];

export const MOCK_PARTNERS: Partner[] = [
  { _id: "p-1", name: "University of Melbourne", region: "🇦🇺 Australia" },
  { _id: "p-2", name: "University of Edinburgh", region: "🇬🇧 UK" },
  {
    _id: "p-3",
    name: "National University of Singapore",
    region: "🇸🇬 Singapore",
  },
  { _id: "p-4", name: "Osaka University", region: "🇯🇵 Japan" },
  { _id: "p-5", name: "Cranfield University", region: "🇬🇧 UK" },
  { _id: "p-6", name: "TU Delft", region: "🇳🇱 Netherlands" },
];

export const MOCK_WEBINARS: Webinar[] = [
  {
    _id: "web-1",
    title: "Beasiswa LPDP: University of Birmingham bersama Ms. Tasya",
    country: "uk",
    date: "2026-08-09",
    registrationUrl: "/kontak",
    poster: "/webinar_dummy/webinar-1.jpg",
  },
  {
    _id: "web-2",
    title: "Beasiswa Manaaki: Massey University bersama Mr. Saiful",
    country: "new-zealand",
    date: "2026-08-23",
    registrationUrl: "/kontak",
    poster: "/webinar_dummy/webinar-2.jpg",
  },
  {
    _id: "web-3",
    title: "Beasiswa GKS: Seoul National University bersama Ms. Meliana",
    country: "south-korea",
    date: "2026-08-02",
    registrationUrl: "/kontak",
    poster: "/webinar_dummy/webinar-3.jpg",
  },
  {
    _id: "web-4",
    title: "Beasiswa SISGP: Linnaeus University bersama Mr. Yasir",
    country: "sweden",
    date: "2026-08-30",
    registrationUrl: "/kontak",
    poster: "/webinar_dummy/webinar-4.webp",
  },
  {
    _id: "web-5",
    title: "Webinar Beasiswa: University of Oxford bersama Mr. Arief",
    country: "uk",
    date: "2026-09-06",
    registrationUrl: "/kontak",
    poster: "/webinar_dummy/webinar-5.webp",
  },
];

export const MOCK_HOME_WEBINARS: HomeWebinar[] = MOCK_WEBINARS.map(({ _id, title, poster, date }) => ({ _id, title, poster, date }));

export const MOCK_PAST_WEBINARS: PastWebinar[] = [
  {
    _id: "pw-1",
    title: "Mastering IELTS Speaking Part 2 & 3",
    dateLabel: "Agustus 2026",

    speaker: "Aulia Rahman, M.Ed.",
    youtubeUrl: "https://youtube.com",
  },
  {
    _id: "pw-2",
    title: "Panduan Lengkap Esai Beasiswa LPDP 2026",
    dateLabel: "Juli 2026",

    speaker: "Nadia Safitri, M.Sc.",
    youtubeUrl: "https://youtube.com",
  },
  {
    _id: "pw-3",
    title: "Simulasi Interview Beasiswa Luar Negeri",
    dateLabel: "Juni 2026",

    speaker: "Dr. Rizky Pratama",
    youtubeUrl: "https://youtube.com",
  },
  {
    _id: "pw-4",
    title: "Bedah Format Baru TOEFL iBT 2026",
    dateLabel: "Mei 2026",

    speaker: "Dr. Rizky Pratama",
    youtubeUrl: "https://youtube.com",
  },
  {
    _id: "pw-5",
    title: "Strategi Menulis Motivation Letter Beasiswa Eropa",
    dateLabel: "April 2026",

    speaker: "Bagas Saputra, M.Eng.",
    youtubeUrl: "https://youtube.com",
  },
];

export const MOCK_VIDEOS: Video[] = [
  {
    _id: "vid-1",
    title: "Bedah Soal IELTS Listening Section 4 - Tips Skor 8.5",
    category: "ielts",
    date: "2026-08-20",

    duration: "45:12",
    youtubeUrl: "https://youtube.com",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop",
  },
  {
    _id: "vid-2",
    title: "Cara Menulis Personal Statement Beasiswa LPDP & Chevening",
    category: "scholarship",
    date: "2026-08-15",

    duration: "58:04",
    youtubeUrl: "https://youtube.com",
    thumbnail:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=340&fit=crop",
  },
  {
    _id: "vid-3",
    title: "TOEFL iBT Integrated Writing Template & Example",
    category: "toefl",
    date: "2026-08-01",

    duration: "32:40",
    youtubeUrl: "https://youtube.com",
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=340&fit=crop",
  },
  {
    _id: "vid-4",
    title: "IELTS Speaking Cue Card: Strategi Menjawab Tanpa Grogi",
    category: "ielts",
    date: "2026-07-24",

    duration: "28:15",
    youtubeUrl: "https://youtube.com",
    thumbnail:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=340&fit=crop",
  },
  {
    _id: "vid-5",
    title: "Tips Lolos Wawancara Beasiswa LPDP: Pertanyaan Tersulit!",
    category: "scholarship",
    date: "2026-07-10",

    duration: "64:20",
    youtubeUrl: "https://youtube.com",
    thumbnail:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=340&fit=crop",
  },
  {
    _id: "vid-6",
    title: "Daily English Vocabulary for Academic Discussions",
    category: "general",
    date: "2026-06-28",

    duration: "21:05",
    youtubeUrl: "https://youtube.com",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=340&fit=crop",
  },
];

export const MOCK_HOME_VIDEOS: HomeVideo[] = [
  {
    _id: "vid-1",
    title: "Bedah Soal IELTS Listening Section 4 - Tips Skor 8.5",
    category: "ielts",
    duration: "45:12",

  },
  {
    _id: "vid-2",
    title: "Cara Menulis Personal Statement Beasiswa LPDP & Chevening",
    category: "scholarship",
    duration: "58:04",

  },
  {
    _id: "vid-3",
    title: "TOEFL iBT Integrated Writing Template & Example",
    category: "toefl",
    duration: "32:40",

  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    _id: "test-1",
    name: "Rina Wijaya",
    program: "ielts",
    programLabel: "IELTS Preparation",
    score: "IELTS 7.5",
    achievement: "Diterima Uni of Melbourne (LPDP Awardee)",
    university: "University of Melbourne",
    text: "Bimbingan di English Banua sangat membantu saya meningkatkan skor Writing dari 6.0 ke 7.5! Feedback tutor-nya sangat detail dan taktis.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
  },
  {
    _id: "test-2",
    name: "Dicky Kurniawan",
    program: "scholarship",
    programLabel: "Scholarship Mentoring",
    score: "Chevening Awardee",
    achievement: "M.Sc. di Cranfield University UK",
    university: "Cranfield University",
    text: "Review essay dan mock interview bersama mentor benar-benar membuka wawasan saya. Tanpa bimbingan English Banua, saya tidak yakin bisa lolos Chevening!",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
  },
  {
    _id: "test-3",
    name: "Siti Rahma",
    program: "toefl",
    programLabel: "TOEFL iBT",
    score: "TOEFL 108",
    achievement: "Diterima NUS Singapore",
    university: "National University of Singapore",
    text: "Kelasnya sangat interaktif dan fleksibel. Tutor selalu siap menjawab pertanyaan di luar jam kelas. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
  },
  {
    _id: "test-4",
    name: "Ahmad Fauzi",
    program: "ielts",
    programLabel: "IELTS Masterclass",
    score: "IELTS 8.0",
    achievement: "AAS Scholar di Uni of Sydney",
    university: "The University of Sydney",
    text: "Simulasi IELTS real test dari English Banua bikin saya nggak kagok pas tes aslinya. Beda banget atmosfer latihannya!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    _id: "test-5",
    name: "Nabila Putri",
    program: "private",
    programLabel: "Private Mentoring",
    score: "IELTS 7.0",
    achievement: "MEXT Scholar di Osaka Uni",
    university: "Osaka University",
    text: "Bimbingan privat 1-on-1 sangat intensif. Tutor fokus memperbaiki tata bahasa & kelancaran speaking saya dalam waktu 1 bulan!",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  },
  {
    _id: "test-6",
    name: "Hendra Pratama",
    program: "scholarship",
    programLabel: "Scholarship Mentoring",
    score: "LPDP Awardee 2026",
    achievement: "M.Sc. di TU Delft Netherlands",
    university: "TU Delft",
    text: "Review proposal riset dan esai beasiswa sangat tajam. Mentor ngasih insight teknis yang bikin esai saya berbobot!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
];

export const MOCK_HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    _id: "test-1",
    name: "Rina Wijaya",
    role: "IELTS 7.5 · Awardee LPDP UK",
    score: "IELTS 7.5",
    university: "University of Melbourne",
    text: "Bimbingan di English Banua sangat membantu saya meningkatkan skor Writing dari 6.0 ke 7.5! Feedback tutor sangat detail.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    _id: "test-2",
    name: "Dicky Kurniawan",
    role: "Chevening Awardee 2026",
    score: "Chevening Awardee",
    university: "Cranfield University UK",
    text: "Review essay dan mock interview bersama mentor benar-benar membuka wawasan saya. Sangat bersyukur belajar di sini!",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
  {
    _id: "test-3",
    name: "Siti Rahma",
    role: "TOEFL 108 · NUS Singapore",
    score: "TOEFL 108",
    university: "NUS Singapore",
    text: "Kelasnya sangat interaktif dan fleksibel. Metode belajarnya sangat efektif untuk persiapan studi luar negeri.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
  {
    _id: "test-4",
    name: "Ahmad Fauzi",
    role: "IELTS 8.0 · AAS Scholar",
    score: "IELTS 8.0",
    university: "University of Sydney",
    text: "Simulasi IELTS real test dari English Banua bikin saya nggak kagok pas tes aslinya. Sangat direkomendasikan!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    _id: "test-5",
    name: "Nabila Putri",
    role: "IELTS 7.0 · MEXT Scholar",
    score: "IELTS 7.0",
    university: "Osaka University",
    text: "Bimbingan privat 1-on-1 sangat intensif. Tutor fokus memperkuat kelancaran speaking dalam waktu singkat!",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
  },
];

export const MOCK_FAQS: Faq[] = [
  {
    _id: "faq-1",
    question: "Bagaimana cara mendaftar kelas di English Banua?",
    answer:
      "Anda dapat mendaftar langsung melalui tombol WhatsApp di website ini atau mengisi formulir pendaftaran pada halaman Kontak. Tim kami akan segera menghubungi Anda untuk konsultasi jadwal dan tes penempatan gratis.",
  },
  {
    _id: "faq-2",
    question: "Apakah tersedia kelas offline di Banjarmasin?",
    answer:
      "Ya, kami menyediakan kelas offline di Banjarmasin untuk program General English, Speaking Club, dan Private Intensive. Kelas online juga tersedia untuk siswa dari seluruh Indonesia.",
  },
  {
    _id: "faq-3",
    question: "Siapa pengajar di English Banua?",
    answer:
      "Semua pengajar utama kami adalah Awardee beasiswa S1 & S2 (LPDP, Chevening, AAS, MEXT) serta tersertifikasi dengan pengalaman mengajar minimal 3 tahun.",
  },
  {
    _id: "faq-4",
    question: "Apakah ada garansi kenaikan skor IELTS / TOEFL?",
    answer:
      "Kami memberikan garansi mengulang kelas gratis bagi siswa yang mengikuti 100% sesi dan mengerjakan seluruh tugas namun belum mencapai target kenaikan skor yang disepakati.",
  },
  {
    _id: "faq-5",
    question: "Apakah materi kelas dapat diakses kembali jika saya berhalangan hadir?",
    answer:
      "Tentu saja. Seluruh sesi Zoom direkam secara otomatis dan dapat diakses kapan saja oleh siswa melalui Learning Management System (LMS) kami.",
  },
  {
    _id: "faq-6",
    question: "Berapa lama durasi masing-masing program?",
    answer:
      "Durasi program bervariasi mulai dari 10 hari (Intensive Booster) hingga 3 bulan (Masterclass & Mentoring Lengkap). Jadwal fleksibel menyesuaikan kebutuhan Anda.",
  },
];
