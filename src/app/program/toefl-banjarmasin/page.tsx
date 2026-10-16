import CoursePage from "@/components/program/CoursePage";
import { toeflCourse } from "@/lib/course-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(toeflCourse);

export default function ToeflBanjarmasinPage() {
  return <CoursePage course={toeflCourse} />;
}
