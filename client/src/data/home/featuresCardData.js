import { FaPlay, FaGraduationCap, FaUsers } from "react-icons/fa";
import { MdQuiz, MdDashboard } from "react-icons/md";

const featuresCardData = [
  {
    icon: FaPlay,
    iconColor: "text-primary",
    title: "Easy Course Creation",
    description: "Upload videos, PDFs, and assignments in a simple, intuitive interface.",
  },
  {
    icon: MdQuiz,
    iconColor: "text-accent",
    title: "Interactive Quizzes",
    description: "Keep learners engaged with quizzes and instant feedback.",
  },
  {
    icon: FaGraduationCap,
    iconColor: "text-purple-600",
    title: "Certificates of Completion",
    description: "Reward learners with professional-looking certificates.",
  },
  {
    icon: MdDashboard,
    iconColor: "text-orange-600",
    title: "Learning Dashboard",
    description: "Track progress, resume lessons, and never lose your place.",
  },
  {
    icon: FaUsers,
    iconColor: "text-red-600",
    title: "Community & Discussions",
    description: "Share insights, ask questions, and learn together."
  },
];

export default featuresCardData;
