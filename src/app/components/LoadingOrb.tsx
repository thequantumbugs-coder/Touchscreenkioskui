import { motion } from "motion/react";

export function LoadingOrb() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-32 h-32">
        {/* Central orb */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Rotating rings */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute inset-0 rounded-full border-2 border-violet-400/60"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
              },
            }}
          />
        ))}
      </div>

      <motion.p
        className="text-3xl text-white/80"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Processing your request...
      </motion.p>
    </div>
  );
}
