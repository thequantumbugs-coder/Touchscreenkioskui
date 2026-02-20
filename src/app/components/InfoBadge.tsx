import { Info } from "lucide-react";
import { motion } from "motion/react";

interface InfoBadgeProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

export function InfoBadge({ text, position = "bottom" }: InfoBadgeProps) {
  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  };

  return (
    <div className="relative group">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center cursor-help"
      >
        <Info className="w-4 h-4 text-white/70" />
      </motion.div>

      {/* Tooltip */}
      <div
        className={`absolute ${positionClasses[position]} left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-xl text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl`}
      >
        {text}
      </div>
    </div>
  );
}
