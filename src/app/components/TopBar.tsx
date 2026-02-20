import { Globe, X } from "lucide-react";

interface TopBarProps {
  showLanguageButton?: boolean;
  currentLanguage?: string;
  onLanguageClick?: () => void;
  onEndSession?: () => void;
}

export function TopBar({
  showLanguageButton = true,
  currentLanguage = "English",
  onLanguageClick,
  onEndSession,
}: TopBarProps) {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex items-center justify-between h-[100px] px-16">
      {/* Logo and Brand */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">C</span>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-white">CLARA</h1>
          <p className="text-sm text-white/60">AI Receptionist</p>
        </div>
      </div>

      {/* Right Cluster */}
      <div className="flex items-center gap-6">
        {/* Time & Date */}
        <div className="text-right">
          <div className="text-2xl font-semibold text-white">{currentTime}</div>
          <div className="text-lg text-white/70">{currentDate}</div>
        </div>

        {/* Language Pill */}
        {showLanguageButton && (
          <button
            onClick={onLanguageClick}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all"
          >
            <Globe className="w-6 h-6 text-white/90" />
            <span className="text-xl text-white">{currentLanguage}</span>
          </button>
        )}

        {/* End Session */}
        {onEndSession && (
          <button
            onClick={onEndSession}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-red-500/20 backdrop-blur-xl border border-red-500/30 hover:bg-red-500/30 transition-all"
          >
            <X className="w-7 h-7 text-red-400" />
          </button>
        )}
      </div>
    </div>
  );
}
