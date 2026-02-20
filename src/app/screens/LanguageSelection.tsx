import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { LanguageCard } from "../components/LanguageCard";
import { useState } from "react";

const languages = [
  { nativeName: "English", englishName: "English" },
  { nativeName: "ಕನ್ನಡ", englishName: "Kannada" },
  { nativeName: "हिंदी", englishName: "Hindi" },
  { nativeName: "தமிழ்", englishName: "Tamil" },
  { nativeName: "తెలుగు", englishName: "Telugu" },
  { nativeName: "മലയാളം", englishName: "Malayalam" },
];

export function LanguageSelection() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const handleLanguageSelect = (language: string) => {
    // Store selected language
    setSelectedLang(language);
    localStorage.setItem("selectedLanguage", language);
    
    // Delay navigation for visual feedback
    setTimeout(() => {
      navigate("/dashboard");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-16">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1400px] space-y-16 relative z-10"
      >
        {/* Header */}
        <h1 className="text-5xl font-semibold text-white text-center">
          Please select a language to continue.
        </h1>

        {/* Language Grid */}
        <div className="grid grid-cols-3 gap-8 justify-items-center">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.englishName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <LanguageCard
                nativeName={lang.nativeName}
                englishName={lang.englishName}
                icon={<Globe className="w-20 h-20" />}
                onClick={() => handleLanguageSelect(lang.englishName)}
                selected={selectedLang === lang.englishName}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}