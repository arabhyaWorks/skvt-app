import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AARTIS = [
  { name: "Mangala Aarti", time: "03:00 AM", done: true },
  { name: "Bhog Aarti", time: "11:30 AM", done: true },
  { name: "Sandhya Aarti", time: "07:00 PM", done: false, next: true },
  { name: "Shayan Aarti", time: "10:30 PM", done: false },
];

export default function Darshan() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(4821);

  function handleLike() {
    setLiked((l) => !l);
    setLikeCount((c) => liked ? c - 1 : c + 1);
  }

  return (
    <div className="min-h-full bg-black flex flex-col">
      {/* Video area */}
      <div className="relative bg-black" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/live_stream?channel=UCzJI1STLaJxaYJXqdU3p-gw&autoplay=1&mute=1"
          title="Shri Kashi Vishwanath Live Darshan"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Back button overlay */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-12 left-4 z-10 flex items-center gap-1.5 px-3 py-2 rounded-[10px] font-manrope text-[13px] font-semibold text-white"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Back
        </button>
      </div>

      {/* Info panel */}
      <div className="flex-1 rounded-t-[24px] -mt-3 z-10 relative overflow-y-auto pb-6" style={{ background: "#FFFAF4" }}>
        {/* Live badge + title */}
        <div className="px-4 pt-5 pb-4" style={{ borderBottom: "1px solid rgba(180,120,60,0.1)" }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full font-manrope font-bold text-[10px] text-white uppercase tracking-wide" style={{ background: "#E53E3E" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </span>
            <span className="font-manrope text-[12px] text-foreground/45">12,430 watching now</span>
          </div>
          <h2 className="font-manrope font-bold text-[16px] text-temple-brown leading-snug">
            Shri Kashi Vishwanath Mandir — Live Darshan
          </h2>
          <p className="font-manrope text-[12px] text-foreground/45 mt-0.5">Varanasi, Uttar Pradesh</p>

          {/* Action buttons */}
          <div className="flex items-center gap-3 mt-4">
            <button onClick={handleLike} className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] font-manrope font-semibold text-[13px] transition-all active:scale-95"
              style={{ background: liked ? "rgba(217,124,42,0.12)" : "rgba(180,120,60,0.08)", color: liked ? "#D97C2A" : "#5C2D0E", border: liked ? "1.5px solid rgba(217,124,42,0.3)" : "1.5px solid rgba(180,120,60,0.15)" }}>
              <span>{liked ? "🙏" : "🙏"}</span>
              {likeCount.toLocaleString()}
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] font-manrope font-semibold text-[13px] active:scale-95"
              style={{ background: "rgba(180,120,60,0.08)", color: "#5C2D0E", border: "1.5px solid rgba(180,120,60,0.15)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" strokeLinecap="round"/>
              </svg>
              Share
            </button>
          </div>
        </div>

        {/* Aarti schedule */}
        <div className="px-4 pt-4">
          <h3 className="font-manrope font-bold text-[15px] text-temple-brown mb-3">Today's Aarti Schedule</h3>
          <div className="space-y-2">
            {AARTIS.map(({ name, time, done, next }) => (
              <div key={name} className="flex items-center justify-between px-4 py-3 rounded-[14px]"
                style={{
                  background: next ? "rgba(255,248,235,0.9)" : "#fff",
                  border: next ? "1.5px solid rgba(217,124,42,0.2)" : "1px solid rgba(180,120,60,0.1)",
                }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[16px]"
                    style={{ background: done ? "rgba(180,120,60,0.08)" : next ? "rgba(217,124,42,0.12)" : "rgba(180,120,60,0.06)" }}>
                    {done ? "✓" : next ? "🔔" : "🪔"}
                  </div>
                  <div>
                    <p className="font-manrope font-semibold text-[13px]" style={{ color: done ? "rgba(90,50,20,0.4)" : "#3B1A05" }}>{name}</p>
                    {next && <p className="font-manrope text-[10px] text-temple-gold font-bold">Starting soon</p>}
                  </div>
                </div>
                <span className="font-manrope font-bold text-[13px]" style={{ color: done ? "rgba(90,50,20,0.3)" : "#A85A18" }}>{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Temple info */}
        <div className="mx-4 mt-4 p-4 rounded-[16px]" style={{ background: "rgba(255,248,235,0.8)", border: "1px solid rgba(180,120,60,0.12)" }}>
          <p className="font-manrope text-[12px] text-foreground/55 leading-relaxed">
            🕌 <strong>Shri Kashi Vishwanath Temple</strong> is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India.
          </p>
          <p className="font-manrope text-[11.5px] text-foreground/40 mt-2">📍 Lahori Tola, Varanasi, UP 221001</p>
        </div>
      </div>
    </div>
  );
}
