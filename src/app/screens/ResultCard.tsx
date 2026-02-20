import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { TopBar } from "../components/TopBar";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { KioskTable } from "../components/KioskTable";
import { QRBlock } from "../components/QRBlock";
import { MapPlaceholder } from "../components/MapPlaceholder";

export function ResultCard() {
  const navigate = useNavigate();
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "English";

  const handleAskAnother = () => {
    navigate("/listening");
  };

  const handleBackToMenu = () => {
    navigate("/dashboard");
  };

  const handleLanguageClick = () => {
    navigate("/language");
  };

  const handleEndSession = () => {
    navigate("/");
  };

  // Sample data for admission requirements
  const tableHeaders = ["Requirement", "Details"];
  const tableRows = [
    ["Minimum Percentage", "60% in 12th Grade (Science)"],
    ["Entrance Exam", "KCET / COMEDK / JEE Main"],
    ["Age Limit", "17-25 years"],
    ["Documents Required", "10th & 12th Marksheets, Transfer Certificate"],
    ["Application Fee", "₹1,500 (General) / ₹750 (SC/ST)"],
  ];

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
        <div className="flex-1 flex items-center justify-center px-16 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full flex flex-col items-center gap-8"
          >
            <Modal subtitle="Here are the admission requirements for Computer Science at SVIT. Students need 60% in 12th grade science stream and must qualify through KCET, COMEDK, or JEE Main entrance exams.">
              {/* Content Area - Table */}
              <div className="mb-8">
                <h2 className="text-4xl font-semibold text-white mb-6">
                  Computer Science - Admission Requirements
                </h2>
                <KioskTable headers={tableHeaders} rows={tableRows} />
              </div>

              {/* Additional Info Section */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Important Dates */}
                <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Important Dates
                  </h3>
                  <ul className="space-y-3 text-xl text-white/80">
                    <li>• Application Start: June 1, 2026</li>
                    <li>• Application Deadline: July 15, 2026</li>
                    <li>• Counseling Dates: July 20-30, 2026</li>
                    <li>• Classes Begin: August 1, 2026</li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="p-6 bg-violet-500/10 rounded-2xl border border-violet-500/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Need More Help?
                  </h3>
                  <ul className="space-y-3 text-xl text-white/80">
                    <li>📧 admissions@svit.ac.in</li>
                    <li>📞 +91 80 1234 5678</li>
                    <li>🕐 Mon-Fri: 9:00 AM - 5:00 PM</li>
                    <li>📍 Visit Admissions Office - Block A</li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6 justify-center items-center">
                <Button variant="primary" onClick={handleAskAnother}>
                  Ask Another Question
                </Button>
                <Button variant="secondary" onClick={handleBackToMenu}>
                  Back to Menu
                </Button>

                {/* QR Block on the right */}
                <div className="ml-8">
                  <QRBlock />
                </div>
              </div>
            </Modal>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}