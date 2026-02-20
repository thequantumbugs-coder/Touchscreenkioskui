import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white/10 backdrop-blur-2xl 
        border border-white/20 
        rounded-[32px] 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        ${onClick ? "cursor-pointer hover:bg-white/15 active:scale-[0.98] transition-all" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
