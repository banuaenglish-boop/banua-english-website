import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLanding from "@/components/program/CourseLanding";
import type { CourseContent } from "@/lib/course-content";
import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY, TUTORS_QUERY } from "@/sanity/lib/queries";
import type { Testimonial, Tutor } from "@/sanity/lib/types";

export default async function CoursePage({ course }: { course: CourseContent }) {
  const [{ data: tutors }, { data: testimonials }] = await Promise.all([
    sanityFetch<Tutor[]>({ query: TUTORS_QUERY }),
    sanityFetch<Testimonial[]>({ query: TESTIMONIALS_QUERY }),
  ]);

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <CourseLanding
          course={course}
          tutors={tutors.slice(0, 4)}
          testimonials={testimonials.filter((item) => item.program === course.exam.toLowerCase()).slice(0, 2)}
        />
      </main>
      <Footer />
    </div>
  );
}
