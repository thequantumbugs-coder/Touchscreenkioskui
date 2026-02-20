import { ReactNode } from "react";
import { GlassCard } from "./GlassCard";

interface ModalProps {
  children: ReactNode;
  subtitle?: string;
}

export function Modal({ children, subtitle }: ModalProps) {
  return (
    <GlassCard className="w-[70%] max-w-[1200px] p-12">
      {/* AI Subtitle */}
      {subtitle && (
        <div className="mb-8 p-6 bg-violet-500/10 rounded-2xl border border-violet-500/20">
          <p className="text-2xl text-white/90 italic leading-relaxed">
            {subtitle}
          </p>
        </div>
      )}

      {/* Content */}
      <div>{children}</div>
    </GlassCard>
  );
}
