import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Button } from "../components/Button";
import { MicButton } from "../components/MicButton";
import { Waveform } from "../components/Waveform";

export function ActiveListening() {
  const navigate = useNavigate();
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    // Simulate live transcription
    const phrases = [
      "What are the",
      "What are the admission",
      "What are the admission requirements",
      "What are the admission requirements for",
      "What are the admission requirements for Computer Science?",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < phrases.length) {
        setTranscript(phrases[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const handleStop = () => {
    navigate("/result");
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 relative">
      {/* Dimmed background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-md z-10"
      />

      {/* Content */}
      <div className="relative z-20 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-12"
        >
          {/* Visualizer with Mic Button */}
          <div className="relative flex flex-col items-center gap-8">
            <MicButton isActive />

            {/* Animated rings */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-full border-2 border-violet-400/40"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeOut",
                }}
                style={{
                  width: "120px",
                  height: "120px",
                }}
              />
            ))}

            {/* Waveform visualizer */}
            <div className="mt-8">
              <Waveform />
            </div>
          </div>

          {/* Live Transcription */}
          <div className="min-h-[200px] max-w-[900px] flex items-center justify-center">
            <motion.p
              key={transcript}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-5xl text-white italic text-center leading-relaxed"
            >
              {transcript || "Listening..."}
            </motion.p>
          </div>

          {/* Controls */}
          <div className="flex gap-6 mt-8">
            <Button variant="primary" onClick={handleStop}>
              Stop & Send
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}