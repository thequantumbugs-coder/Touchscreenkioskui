import { GlassCard } from "./GlassCard";

interface LanguageCardProps {
  nativeName: string;
  englishName: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

export function LanguageCard({
  nativeName,
  englishName,
  icon,
  onClick,
  selected = false,
}: LanguageCardProps) {
  return (
    <GlassCard 
      onClick={onClick} 
      className={`w-[350px] h-[250px] p-8 flex flex-col items-center justify-center gap-4 relative overflow-hidden transition-all ${
        selected ? 'ring-4 ring-violet-500 bg-white/20' : ''
      }`}
    >
      {/* Faint background icon */}
      {icon && (
        <div className="absolute top-4 right-4 text-white/10 scale-150">
          {icon}
        </div>
      )}

      {/* Native name */}
      <div className="text-5xl font-semibold text-white text-center z-10">
        {nativeName}
      </div>

      {/* English subtitle */}
      <div className="text-2xl text-white/70 text-center z-10">
        {englishName}
      </div>
    </GlassCard>
  );
}