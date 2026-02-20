import { motion } from "motion/react";

export function Waveform() {
  const bars = 40;

  return (
    <div className="flex items-center justify-center gap-1 h-24">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-violet-500 to-indigo-400 rounded-full"
          animate={{
            height: [
              Math.random() * 40 + 20,
              Math.random() * 80 + 20,
              Math.random() * 40 + 20,
            ],
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.02,
          }}
        />
      ))}
    </div>
  );
}
