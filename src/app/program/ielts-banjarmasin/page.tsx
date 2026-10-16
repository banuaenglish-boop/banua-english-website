import CoursePage from "@/components/program/CoursePage";
import { ieltsCourse } from "@/lib/course-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(ieltsCourse);

export default function IeltsBanjarmasinPage() {
  return <CoursePage course={ieltsCourse} />;
}
