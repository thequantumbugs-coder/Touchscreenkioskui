import { MapPin } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function MapPlaceholder() {
  return (
    <GlassCard className="p-8 h-[400px] flex flex-col items-center justify-center gap-4">
      <MapPin className="w-24 h-24 text-violet-400" />
      <p className="text-2xl text-white/70">Campus Map</p>
      <p className="text-lg text-white/50 text-center max-w-md">
        Interactive campus navigation would be displayed here
      </p>
    </GlassCard>
  );
}
