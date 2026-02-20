import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function Greeting() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/language");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 flex items-center justify-center p-16 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-12 relative z-10"
      >
        {/* Glowing Orb / Logo */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 60px rgba(139, 92, 246, 0.6)",
              "0 0 100px rgba(139, 92, 246, 0.8)",
              "0 0 60px rgba(139, 92, 246, 0.6)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-48 h-48 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center relative"
        >
          <span className="text-8xl font-bold text-white">C</span>

          {/* Inner glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-violet-400/50 to-indigo-500/50 blur-xl" />
        </motion.div>

        {/* Primary Text */}
        <div className="text-center space-y-4">
          <h1 className="text-7xl font-semibold text-white">
            Welcome to SVIT
          </h1>

          {/* Secondary Text */}
          <p className="text-4xl text-white/70">
            I am Clara, your AI Receptionist.
          </p>
        </div>
      </motion.div>
    </div>
  );
}