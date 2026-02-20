import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "destructive";
  className?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-8 py-5 rounded-3xl text-2xl font-semibold transition-all active:scale-95 min-h-[72px] min-w-[200px]";

  const variants = {
    primary:
      "bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]",
    secondary:
      "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/15",
    destructive:
      "bg-red-500/20 backdrop-blur-xl border border-red-500/30 text-red-400 hover:bg-red-500/30",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
