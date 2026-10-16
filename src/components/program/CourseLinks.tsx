import Link from "next/link";
import { courseLinks } from "@/lib/course-routes";

export default function CourseLinks() {
  return (
    <nav aria-label="Panduan program IELTS dan TOEFL" className="mb-8 grid gap-4 sm:grid-cols-2">
      {courseLinks.map((course) => (
        <Link
          key={course.path}
          href={course.path}
          className="group rounded-2xl border border-[#2C3E8A]/15 bg-white p-5 transition-colors hover:border-[#2C3E8A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2C3E8A]"
        >
          <span className="font-poppins text-base font-bold text-[#1a2557]">
            Kursus {course.exam} Banjarmasin <span aria-hidden="true">→</span>
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-gray-600">
            Kenali materi, pilihan kelas privat, tutor, dan cara konsultasi biaya.
          </span>
        </Link>
      ))}
    </nav>
  );
}
