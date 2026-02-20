import { QrCode } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function QRBlock() {
  return (
    <GlassCard className="p-6 flex flex-col items-center gap-4 w-[200px]">
      {/* QR Code placeholder */}
      <div className="w-[140px] h-[140px] bg-white rounded-xl flex items-center justify-center">
        <QrCode className="w-32 h-32 text-slate-800" />
      </div>

      {/* Label */}
      <p className="text-lg text-white/70 text-center">Scan to phone</p>
    </GlassCard>
  );
}
