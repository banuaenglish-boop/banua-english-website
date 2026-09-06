import {
  BookOpen,
  Chalkboard,
  Clock,
  GraduationCap,
  Star,
  Users,
  Video,
} from "@phosphor-icons/react/dist/ssr";
import type { IconKey } from "@/sanity/lib/types";

/** iconKey dari Sanity → elemen React. Dipakai Programs.tsx & ProgramExplorer.tsx. */
export const programIcons: Record<IconKey, React.ReactNode> = {
  clock: <Clock size={14} weight="bold" />,
  graduationCap: <GraduationCap size={14} weight="bold" />,
  star: <Star size={14} weight="bold" />,
  video: <Video size={14} weight="bold" />,
  chalkboard: <Chalkboard size={14} weight="bold" />,
  users: <Users size={14} weight="bold" />,
  bookOpen: <BookOpen size={14} weight="bold" />,
};
