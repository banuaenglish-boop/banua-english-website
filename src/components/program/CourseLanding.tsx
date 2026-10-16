import Link from "next/link";
import SectionLabel from "@/components/ui/section-label";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/JsonLd";
import { absoluteUrl, programRegistrationUrl, siteConfig } from "@/lib/site";
import { coursePages, type CourseContent } from "@/lib/course-content";
import type { Testimonial, Tutor } from "@/sanity/lib/types";

const primaryLink = "inline-flex min-h-12 items-center justify-center rounded-full bg-[#FFD700] px-6 py-3 text-sm font-bold text-[#1a2557] transition-colors hover:bg-[#f5ce00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2C3E8A]";

export default function CourseLanding({ course, tutors, testimonials }: {
  course: CourseContent;
  tutors: Tutor[];
  testimonials: Testimonial[];
}) {
  const consultationUrl = programRegistrationUrl(`Kursus ${course.exam} Banjarmasin`);
  const relatedCourse = coursePages.find((item) => item.path !== course.path)!;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(course.path)} />
      <JsonLd data={faqJsonLd(course.faqs)} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${absoluteUrl(course.path)}#service`,
        name: `Kursus ${course.exam} Banjarmasin`,
        description: course.intro,
        serviceType: `Bimbingan persiapan ${course.exam}`,
        url: absoluteUrl(course.path),
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: [
          { "@type": "City", name: siteConfig.city },
          { "@type": "Country", name: "Indonesia" },
        ],
      }} />

      <section className="page-hero-bg py-16 text-white md:py-24">
        <div className="section-shell">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-white/80">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="underline-offset-4 hover:underline">Beranda</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/program" className="underline-offset-4 hover:underline">Program</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Kursus {course.exam} Banjarmasin</li>
            </ol>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <SectionLabel variant="dark">Persiapan {course.exam}</SectionLabel>
              <h1 className="max-w-3xl font-poppins text-3xl font-bold leading-tight md:text-5xl">{course.heading}</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85">{course.intro}</p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a href={consultationUrl} target="_blank" rel="noopener noreferrer" className={primaryLink}>Konsultasi {course.exam}</a>
                <a href="#materi" className="text-sm font-semibold underline underline-offset-4">Lihat materi belajar</a>
              </div>
            </div>
            <aside className="rounded-3xl border border-white/20 bg-white/10 p-6 md:p-8">
              <h2 className="font-poppins text-xl font-bold">Mulai dari kebutuhanmu</h2>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/85">
                <li>01 · Ceritakan tujuan studi, beasiswa, atau pekerjaanmu.</li>
                <li>02 · Diskusikan kemampuan awal dan waktu persiapan.</li>
                <li>03 · Konfirmasikan pilihan kelas, tutor, dan jadwal.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Rencana Belajar</SectionLabel>
            <h2 className="heading-2 font-poppins font-bold text-[#1a2557]">Persiapan yang mengikuti tujuanmu</h2>
            <p className="mt-5 text-sm leading-7 text-gray-600">{course.overview}</p>
          </div>
          <div>
            <h3 className="font-poppins text-lg font-bold text-[#1a2557]">Untuk siapa bimbingan ini?</h3>
            <ul className="mt-4 space-y-4">
              {course.audience.map((item) => <li key={item} className="border-l-2 border-[#FFD700] pl-4 text-sm leading-7 text-gray-600">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="materi" className="section-y scroll-mt-24 bg-gray-50">
        <div className="section-shell">
          <SectionLabel>Materi Belajar</SectionLabel>
          <h2 className="heading-2 font-poppins font-bold text-[#1a2557]">Kenali fokus persiapan {course.exam}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {course.focus.map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-100 bg-white p-6">
                <h3 className="font-poppins text-lg font-bold text-[#2C3E8A]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-600">{course.preparation}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs">
            {course.references.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-[#2C3E8A] underline underline-offset-4">{source.label}</a></li>)}
          </ul>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="section-shell">
          <SectionLabel>Pilihan Belajar</SectionLabel>
          <h2 className="heading-2 font-poppins font-bold text-[#1a2557]">Diskusikan format kelas yang cocok</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {course.formats.map((format) => (
              <div key={format.title}>
                <h3 className="font-poppins text-lg font-bold text-[#2C3E8A]">{format.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{format.description}</p>
              </div>
            ))}
          </div>
          <div id="biaya" className="mt-10 scroll-mt-24 rounded-3xl border border-[#2C3E8A]/15 bg-[#F7F8FC] p-6 md:p-8">
            <h2 className="font-poppins text-xl font-bold text-[#1a2557]">Biaya kursus {course.exam} Banjarmasin dan jadwal kelas</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">Tanyakan paket yang tersedia kepada admin. Sampaikan target, pilihan privat, dan waktu belajarmu agar kamu mendapatkan informasi yang sesuai sebelum mendaftar.</p>
            <ul className="my-5 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
              <li>• Rincian biaya dan fasilitas dalam paket</li>
              <li>• Jumlah pertemuan serta durasi tiap sesi</li>
              <li>• Pilihan tutor dan jadwal yang tersedia</li>
              <li>• Media belajar atau lokasi kelas tatap muka</li>
            </ul>
            <a href={consultationUrl} target="_blank" rel="noopener noreferrer" className={primaryLink}>Tanyakan biaya &amp; jadwal</a>
          </div>
        </div>
      </section>

      {tutors.length > 0 && (
        <section className="section-y bg-gray-50">
          <div className="section-shell">
            <SectionLabel>Tim Pengajar</SectionLabel>
            <h2 className="heading-2 font-poppins font-bold text-[#1a2557]">Kenali tutor English Banua</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">Tim kami memiliki latar pendidikan di Indonesia dan luar negeri. Penempatan tutor mengikuti kebutuhan belajar dan ketersediaan saat kamu mendaftar.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tutors.map((tutor) => (
                <article key={tutor._id} className="rounded-2xl border border-gray-100 bg-white p-5">
                  <h3 className="font-poppins font-bold text-[#1a2557]">{tutor.name}</h3>
                  <p className="mt-2 text-xs leading-6 text-gray-600">{tutor.credential}</p>
                  {tutor.expertise && <p className="mt-2 text-xs font-semibold leading-6 text-[#2C3E8A]">{tutor.expertise}</p>}
                </article>
              ))}
            </div>
            <Link href="/tentang-kami" className="mt-5 inline-block text-sm font-bold text-[#2C3E8A] underline underline-offset-4">Lihat profil seluruh tutor</Link>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="section-y bg-white">
          <div className="section-shell">
            <SectionLabel>Pengalaman Peserta</SectionLabel>
            <h2 className="heading-2 font-poppins font-bold text-[#1a2557]">Cerita dari kelas {course.exam}</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {testimonials.map((item) => (
                <figure key={item._id} className="rounded-3xl border border-gray-100 p-6">
                  <blockquote className="text-sm leading-7 text-gray-600">“{item.text}”</blockquote>
                  <figcaption className="mt-4 text-sm font-bold text-[#1a2557]">{item.name}<span className="mt-1 block text-xs font-normal text-gray-500">{item.programLabel}</span></figcaption>
                </figure>
              ))}
            </div>
            <Link href="/testimoni" className="mt-5 inline-block text-sm font-bold text-[#2C3E8A] underline underline-offset-4">Baca pengalaman peserta lainnya</Link>
          </div>
        </section>
      )}

      <section className="section-y bg-[#F7F8FC]">
        <div className="section-shell max-w-4xl">
          <SectionLabel>Pertanyaan Umum</SectionLabel>
          <h2 className="heading-2 font-poppins font-bold text-[#1a2557]">Sebelum memilih kelas {course.exam}</h2>
          <div className="mt-7 divide-y divide-gray-200">
            {course.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer font-poppins text-sm font-semibold leading-6 text-[#1a2557] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2C3E8A]">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[#2C3E8A] text-white">
        <div className="section-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="heading-2 font-poppins font-bold">Mulai dari konsultasi, susun langkah belajarmu</h2>
            <p className="mt-4 text-sm leading-7 text-white/85">Ceritakan target dan kebutuhanmu kepada tim English Banua. Kamu juga bisa <Link href="/webinar" className="underline underline-offset-4">menjelajahi webinar dan rekaman belajar</Link> atau mengenal <Link href={relatedCourse.path} className="underline underline-offset-4">kursus {relatedCourse.exam} Banjarmasin</Link> sebelum menentukan pilihan.</p>
          </div>
          <a href={consultationUrl} target="_blank" rel="noopener noreferrer" className={primaryLink}>Hubungi admin English Banua</a>
        </div>
      </section>
    </>
  );
}
