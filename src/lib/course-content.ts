export type CourseContent = {
  exam: "IELTS" | "TOEFL";
  path: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  overview: string;
  audience: string[];
  focus: { title: string; description: string }[];
  formats: { title: string; description: string }[];
  preparation: string;
  faqs: { question: string; answer: string }[];
  references: { label: string; url: string }[];
};

export const ieltsCourse: CourseContent = {
  exam: "IELTS",
  path: "/program/ielts-banjarmasin",
  title: "Kursus IELTS Banjarmasin & Kelas Privat",
  description:
    "Kursus IELTS Banjarmasin dan les privat online. Kenali materi empat skill, tim tutor, pengalaman peserta, serta konsultasikan biaya dan jadwal English Banua.",
  heading: "Kursus IELTS Banjarmasin untuk Studi dan Beasiswa",
  intro:
    "Siapkan IELTS bersama English Banua melalui bimbingan privat dan pilihan belajar online maupun offline di Banjarmasin. Mulai dari tujuan studi, kemampuan awal, dan waktu yang kamu punya untuk berlatih.",
  overview:
    "Mencari les IELTS bukan sekadar memilih kumpulan soal. Kamu perlu memahami bagian yang masih sulit, membiasakan diri dengan bentuk tugas, dan belajar menjelaskan ide dengan lebih terarah. Melalui kursus IELTS Banjarmasin, English Banua mendampingi persiapan bahasa Inggris untuk mahasiswa, fresh graduate, dan pekerja. Ceritakan targetmu saat konsultasi agar tim dapat membantu memilih kelas dan tutor yang sesuai.",
  audience: [
    "Mahasiswa dan fresh graduate yang sedang mempersiapkan persyaratan bahasa Inggris untuk studi lanjutan.",
    "Calon pendaftar beasiswa yang ingin merencanakan latihan berdasarkan tenggat dan ketentuan program tujuan.",
    "Peserta yang sudah pernah belajar IELTS dan ingin membahas bagian yang masih terasa sulit bersama tutor.",
  ],
  focus: [
    { title: "Listening", description: "Biasakan diri memahami ide utama, mencatat informasi penting, dan memeriksa ketepatan jawaban dari latihan menyimak." },
    { title: "Reading", description: "Latih cara menemukan informasi, memahami hubungan antaride, dan mengatur waktu ketika membaca teks akademik." },
    { title: "Writing", description: "Pelajari cara menyusun jawaban yang runtut, mengembangkan argumen, serta meninjau penggunaan kosakata dan tata bahasa." },
    { title: "Speaking", description: "Berlatih menyampaikan pengalaman dan pendapat dengan jelas. Gunakan latihan percakapan untuk mengenali bagian yang perlu diperbaiki." },
  ],
  formats: [
    { title: "Private IELTS Banjarmasin", description: "Diskusikan kebutuhan les privat dan pilihan kelas offline bersama admin. Konfirmasikan tutor, lokasi belajar, serta jadwal yang tersedia sebelum mendaftar." },
    { title: "Belajar IELTS online", description: "Pilihan untuk peserta di luar Banjarmasin atau yang membutuhkan pembelajaran jarak jauh. Tanyakan pilihan sesi, media belajar, dan jadwal yang cocok dengan aktivitasmu." },
  ],
  preparation:
    "Sebelum konsultasi, siapkan informasi jenis IELTS yang diminta, target skor dari kampus atau beasiswa, perkiraan tanggal tes, dan pengalaman belajar sebelumnya. IELTS Academic mencakup Listening, Reading, Writing, dan Speaking. Pastikan pilihan tes mengikuti persyaratan lembaga tujuan; kebutuhan setiap pendaftar dapat berbeda.",
  faqs: [
    { question: "Berapa biaya kursus IELTS Banjarmasin?", answer: "Hubungi admin English Banua untuk mendapatkan informasi paket yang tersedia. Sampaikan pilihan privat, online atau offline, serta kebutuhan belajarmu. Minta rincian biaya, jumlah pertemuan, durasi sesi, dan fasilitas sebelum memutuskan mendaftar." },
    { question: "Apakah tersedia les privat IELTS di Banjarmasin?", answer: "English Banua menyediakan bimbingan privat IELTS dan memiliki pengalaman mendampingi peserta offline di Banjarmasin. Hubungi admin untuk mengonfirmasi ketersediaan kelas, tutor, lokasi, dan jadwal saat ini." },
    { question: "Bisa ikut kelas IELTS online dari luar Kalimantan Selatan?", answer: "Bisa. Pilihan belajar online memungkinkan peserta berkonsultasi dan belajar dari luar Banjarmasin. Konfirmasikan jadwal, media pembelajaran, dan kebutuhan perangkat dengan admin sebelum kelas dimulai." },
    { question: "Apakah kelas IELTS cocok untuk pemula?", answer: "Ceritakan kemampuan bahasa Inggrismu saat konsultasi. Tim akan membantu membahas kebutuhan belajar dan pilihan kelas yang tersedia. Jika fondasi bahasa Inggris masih perlu diperkuat, tanyakan persiapan awal yang sesuai sebelum berfokus pada latihan tes." },
    { question: "Berapa lama persiapan IELTS yang saya butuhkan?", answer: "Kebutuhan waktu berbeda menurut kemampuan awal, target skor, waktu latihan mandiri, dan tenggat tes. Sampaikan kondisi tersebut agar tutor dapat mendiskusikan rencana belajar. Konfirmasikan jumlah serta durasi pertemuan pada paket yang dipilih." },
    { question: "Apakah mengikuti kursus menjamin skor atau kelulusan beasiswa?", answer: "Hasil tes dipengaruhi kemampuan awal, latihan, dan performa saat ujian. Kelas membantu persiapan, sedangkan ketentuan skor dan seleksi mengikuti kampus atau penyelenggara beasiswa tujuan. Periksa persyaratan terbaru sebelum mendaftar tes." },
  ],
  references: [{ label: "Format IELTS Academic dari IELTS.org", url: "https://ielts.org/take-a-test/test-types/ielts-academic-test" }],
};

export const toeflCourse: CourseContent = {
  exam: "TOEFL",
  path: "/program/toefl-banjarmasin",
  title: "Kursus TOEFL Banjarmasin & Kelas Privat",
  description:
    "Kursus TOEFL Banjarmasin dan bimbingan privat online. Pelajari pilihan persiapan ITP atau iBT, kenali tutor, lalu tanyakan biaya serta jadwal English Banua.",
  heading: "Kursus TOEFL Banjarmasin untuk Kebutuhan Akademik dan Kerja",
  intro:
    "Rencanakan persiapan TOEFL bersama English Banua. Diskusikan kebutuhan akademik, kerja, atau studi lanjutanmu, lalu pilih bimbingan privat dan cara belajar yang sesuai dengan jenis tes tujuan.",
  overview:
    "Sebelum memilih kursus TOEFL Banjarmasin, cari tahu jenis tes dan persyaratan dari lembaga yang akan menerima hasilnya. TOEFL ITP dan iBT memiliki bentuk tugas yang berbeda, sehingga latihan perlu mengikuti kebutuhanmu. English Banua berfokus pada bimbingan bahasa Inggris dan persiapan tes. Kamu bisa memulai dengan konsultasi tentang pengalaman belajar, tenggat, dan bagian yang paling membutuhkan pendampingan.",
  audience: [
    "Mahasiswa yang sedang memeriksa persyaratan bahasa Inggris untuk kebutuhan akademik atau studi lanjutan.",
    "Pekerja yang ingin mempersiapkan kemampuan bahasa Inggris sambil menyesuaikan waktu belajar dengan aktivitas kerja.",
    "Calon pendaftar beasiswa yang sudah mengetahui jenis tes dan target skor yang diminta program tujuan.",
  ],
  focus: [
    { title: "Listening comprehension", description: "Latih pemahaman percakapan dan informasi lisan, lalu bahas cara mengenali ide serta rincian penting dalam soal." },
    { title: "Structure & written expression", description: "Untuk persiapan ITP, tinjau hubungan antarkata, susunan kalimat, dan penggunaan tata bahasa melalui pembahasan latihan." },
    { title: "Reading comprehension", description: "Bangun kebiasaan membaca dengan tujuan: mencari ide utama, memahami kosakata dalam konteks, dan menemukan informasi pendukung." },
    { title: "Persiapan TOEFL iBT", description: "Jika tujuanmu iBT, diskusikan latihan Reading, Listening, Writing, dan Speaking yang mengikuti format tes terkini. Pastikan materi sesuai tanggal tesmu." },
  ],
  formats: [
    { title: "Konsultasi TOEFL di Banjarmasin", description: "Untuk kebutuhan belajar lokal, tanyakan pilihan kelas yang sedang dibuka. Admin membantu mengonfirmasi format belajar, tutor, lokasi jika tatap muka, dan jadwal yang tersedia." },
    { title: "Private TOEFL online", description: "Belajar jarak jauh menjadi pilihan bagi peserta yang menyesuaikan kelas dengan kegiatan kerja atau kuliah. Ceritakan kebutuhan sesi dan waktu yang tersedia saat berkonsultasi." },
  ],
  preparation:
    "Siapkan nama tes yang diminta lembaga tujuan, target skor, batas waktu pengumpulan hasil, dan riwayat latihanmu. Untuk ITP, kenali Listening Comprehension, Structure and Written Expression, serta Reading Comprehension. Untuk iBT, periksa format terkini pada sumber ETS. Jangan menganggap semua jenis hasil tes dapat dipakai untuk keperluan yang sama.",
  faqs: [
    { question: "Berapa biaya kursus TOEFL Banjarmasin?", answer: "Tanyakan paket aktif kepada admin English Banua dengan menyebutkan jenis tes, kebutuhan privat, dan pilihan cara belajar. Minta rincian biaya, jumlah pertemuan, durasi sesi, serta fasilitas yang termasuk dalam paket sebelum mendaftar." },
    { question: "Apakah tersedia private TOEFL online?", answer: "English Banua memiliki layanan bimbingan privat TOEFL online dan pengalaman mendampingi peserta yang bekerja. Hubungi admin untuk menyesuaikan kebutuhan belajar dengan pilihan tutor dan jadwal yang tersedia saat ini." },
    { question: "Apa perbedaan persiapan TOEFL ITP dan iBT?", answer: "Latihan ITP berfokus pada Listening Comprehension, Structure and Written Expression, serta Reading Comprehension. iBT mencakup Reading, Listening, Writing, dan Speaking dengan bentuk tugasnya sendiri. Pastikan jenis tes yang dipilih sesuai persyaratan lembaga tujuan." },
    { question: "Berapa lama kursus TOEFL berlangsung?", answer: "Durasi belajar perlu disesuaikan dengan kemampuan awal, target, dan waktu latihan mandiri. Sampaikan tenggatmu saat konsultasi dan konfirmasikan jumlah pertemuan serta durasi setiap sesi dalam paket yang tersedia." },
    { question: "Apakah biaya kursus sudah termasuk tes TOEFL resmi?", answer: "Halaman ini menjelaskan layanan bimbingan persiapan. Untuk biaya, pendaftaran, dan penyelenggara tes resmi, konfirmasikan secara terpisah. Jangan menganggap latihan atau simulasi di kelas sebagai hasil tes resmi yang dapat diajukan ke kampus, pemberi kerja, atau penyelenggara beasiswa." },
    { question: "Bisakah belajar TOEFL jika kemampuan bahasa Inggris masih dasar?", answer: "Sampaikan kemampuan dan pengalaman belajarmu kepada admin. Tanyakan apakah perlu memperkuat fondasi bahasa Inggris sebelum mulai latihan tes serta pilihan pendampingan yang sesuai dengan kebutuhanmu." },
  ],
  references: [
    { label: "Materi TOEFL ITP dari ETS", url: "https://www.ets.org/toefl/itp/test-content.html" },
    { label: "Format TOEFL iBT terkini dari ETS", url: "https://www.ets.org/toefl/test-takers/ibt/about/content.html" },
  ],
};

export const coursePages = [ieltsCourse, toeflCourse];
