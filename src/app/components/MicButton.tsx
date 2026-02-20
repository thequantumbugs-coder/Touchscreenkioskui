import { Mic } from "lucide-react";
import { motion } from "motion/react";

interface MicButtonProps {
  onClick?: () => void;
  isActive?: boolean;
}

export function MicButton({ onClick, isActive = false }: MicButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center w-[120px] h-[120px] rounded-full"
    >
      {/* Glow rings */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isActive
            ? "bg-violet-500/30 animate-pulse"
            : "bg-gradient-to-br from-violet-500/20 to-indigo-600/20"
        }`}
      >
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.5)]">
          <Mic className="w-14 h-14 text-white" />
        </div>
      </div>

      {/* Outer glow ring (animated when active) */}
      {isActive && (
        <motion.div
          className="absolute inset-[-8px] rounded-full border-2 border-violet-400/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Ready state pulse (when not active) */}
      {!isActive && (
        <motion.div
          className="absolute inset-[-4px] rounded-full border-2 border-violet-400/30"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.button>
  );
}