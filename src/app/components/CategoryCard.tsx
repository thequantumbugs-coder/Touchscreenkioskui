import { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
  accentColor?: string;
}

export function CategoryCard({
  title,
  icon: Icon,
  onClick,
  accentColor = "from-violet-500 to-indigo-600",
}: CategoryCardProps) {
  return (
    <GlassCard onClick={onClick} className="p-8 flex flex-col items-center justify-center gap-6 min-h-[220px]">
      {/* Icon with gradient background */}
      <div
        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-lg`}
      >
        <Icon className="w-10 h-10 text-white" />
      </div>

      {/* Title */}
      <div className="text-3xl font-semibold text-white text-center">
        {title}
      </div>
    </GlassCard>
  );
}
