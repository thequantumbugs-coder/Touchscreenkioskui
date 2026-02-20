import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  GraduationCap,
  CreditCard,
  Building2,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { TopBar } from "../components/TopBar";
import { CategoryCard } from "../components/CategoryCard";
import { MicButton } from "../components/MicButton";

const categories = [
  {
    title: "Admissions",
    icon: GraduationCap,
    accentColor: "from-violet-500 to-purple-600",
  },
  {
    title: "Fee Structure",
    icon: CreditCard,
    accentColor: "from-blue-500 to-cyan-600",
  },
  {
    title: "Departments & HODs",
    icon: Building2,
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    title: "Campus Navigation",
    icon: MapPin,
    accentColor: "from-orange-500 to-red-600",
  },
  {
    title: "Timings & Calendar",
    icon: Clock,
    accentColor: "from-pink-500 to-rose-600",
  },
  {
    title: "Contact Directory",
    icon: Phone,
    accentColor: "from-indigo-500 to-blue-600",
  },
];

export function MainDashboard() {
  const navigate = useNavigate();
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "English";

  const handleCategoryClick = () => {
    navigate("/listening");
  };

  const handleMicClick = () => {
    navigate("/listening");
  };

  const handleLanguageClick = () => {
    navigate("/language");
  };

  const handleEndSession = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-screen flex flex-col relative z-10"
      >
        {/* Top Bar */}
        <TopBar
          currentLanguage={selectedLanguage}
          onLanguageClick={handleLanguageClick}
          onEndSession={handleEndSession}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-16 pb-16">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-semibold text-white mb-12 text-center"
          >
            How can I help you today?
          </motion.h1>

          {/* Category Grid */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1400px] mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <CategoryCard
                  title={category.title}
                  icon={category.icon}
                  accentColor={category.accentColor}
                  onClick={handleCategoryClick}
                />
              </motion.div>
            ))}
          </div>

          {/* Voice Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <MicButton onClick={handleMicClick} />
            <p className="text-2xl text-white/70">Tap to Speak</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}