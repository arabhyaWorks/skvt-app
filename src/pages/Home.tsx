import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import heroTemple from "@/assets/hero/hero-temple.jpg";
import logo from "@/assets/header/logo.png";
import iconMyTickets from "@/assets/my-tickets.png";
import iconBookPuja from "@/assets/book-pooja.png";
import iconDonation from "@/assets/donation.png";
import iconLiveDarshan from "@/assets/livedarshan.png";
import banner1 from "@/assets/banner.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";

const BANNERS = [banner1, banner2, banner3];

const saffron = "linear-gradient(135deg, #D97C2A 0%, #A85A18 100%)";

const AARTIS = [
  { name: "Mangala Aarti", time: "03:00 AM", done: true },
  { name: "Bhog Aarti", time: "11:30 AM", done: true },
  { name: "Sandhya Aarti", time: "07:00 PM", done: false, next: true },
  { name: "Shayan Aarti", time: "10:30 PM", done: false },
];

const SERVICES = [
  { id: "rudrabhishek", name: "Rudrabhishek", desc: "Sacred Shiva worship ritual", icon: "🪔", color: "#8B4513", price: "₹1,100" },
  { id: "laghu-rudra", name: "Laghu Rudra", desc: "11 priests chanting", icon: "🕉️", color: "#6B3A2A", price: "₹5,100" },
  { id: "maha-mrityu", name: "Maha Mrityunjaya", desc: "Divine protection ritual", icon: "📿", color: "#7B4E3D", price: "₹2,100" },
  { id: "vishesh-puja", name: "Vishesh Puja", desc: "Special personal puja", icon: "🔱", color: "#9B6A4A", price: "₹3,100" },
];

export default function Home() {
  const navigate = useNavigate();
  const [bannerIndex, setBannerIndex] = useState<number | null>(null);
  const [showLangSheet, setShowLangSheet] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: "EN", label: "English" });

  // After 3s show banners, then cycle every 3s
  useEffect(() => {
    const initial = setTimeout(() => {
      setBannerIndex(0);
      const interval = setInterval(() => {
        setBannerIndex((i) => ((i ?? 0) + 1) % BANNERS.length);
      }, 3000);
      return () => clearInterval(interval);
    }, 3000);
    return () => clearTimeout(initial);
  }, []);

  return (
    <div className="min-h-full bg-background pb-4">

      {/* ── Header ── */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          paddingTop: "max(12px, env(safe-area-inset-top))",
          background: "#fff",
          borderBottom: "1px solid rgba(180,120,60,0.1)",
          boxShadow: "0 2px 12px rgba(100,50,15,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <img src={logo} alt="SKVT" className="h-12 object-contain" />
        <div className="flex items-center gap-2">
          {/* Language button */}
          <button
            onClick={() => setShowLangSheet(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-manrope font-bold text-[12px] active:scale-95 transition-transform"
            style={{ background: "#fff", border: "1.5px solid rgba(180,120,60,0.22)", color: "#A85A18" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round"/>
            </svg>
            {selectedLang.code}
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 opacity-50">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
          {/* Notification */}
          <button className="w-9 h-9 flex items-center justify-center rounded-full relative" style={{ background: "rgba(180,120,60,0.08)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#D97C2A" strokeWidth="2" className="w-5 h-5">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
          </button>
        </div>
      </div>

      {/* ── Hero Banner ── */}
      <div className="mx-4 rounded-[20px] overflow-hidden relative" style={{ height: 200, boxShadow: "0 8px 32px rgba(100,50,15,0.22), 0 2px 8px rgba(100,50,15,0.12)" }}>
        {/* Base temple image */}
        <img
          src={heroTemple}
          alt="Temple"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: bannerIndex === null ? 1 : 0 }}
        />
        {/* Rotating banners */}
        {BANNERS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Banner ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: bannerIndex === i ? 1 : 0 }}
          />
        ))}
        {/* Overlay only shown on hero image, hidden when banners are active */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ background: "linear-gradient(to bottom, rgba(20,5,0,0.2) 0%, rgba(10,3,0,0.65) 100%)", opacity: bannerIndex === null ? 1 : 0 }}
        />
        <div
          className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-700"
          style={{ opacity: bannerIndex === null ? 1 : 0, pointerEvents: bannerIndex === null ? "auto" : "none" }}
        >
          <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-white/60 mb-1">Welcome, Devotee 🙏</p>
          <h1 className="font-caslon text-[28px] text-white leading-tight mb-3">Har Har Mahadev</h1>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/darshan")}
              className="flex items-center gap-2 px-4 py-2 rounded-[10px] font-manrope font-bold text-white text-[12px]"
              style={{ background: "rgba(217,124,42,0.9)", backdropFilter: "blur(8px)" }}
            >
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Live Darshan
            </button>
            <button
              onClick={() => navigate("/tickets")}
              className="flex items-center gap-2 px-4 py-2 rounded-[10px] font-manrope font-bold text-white text-[12px]"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              My Tickets
            </button>
          </div>
          {/* Dot indicators */}
          <div className="absolute bottom-3 right-4 flex items-center gap-1.5">
            {BANNERS.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: bannerIndex === i ? 16 : 6,
                  height: 6,
                  background: bannerIndex === i ? "#D97C2A" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Quick Actions ── */}
      <div className="px-4 mt-5">
        <div className="grid grid-cols-4 gap-2.5">
          {[
            { label: "My Tickets",   img: iconMyTickets,   path: "/tickets" },
            { label: "Book Puja",    img: iconBookPuja,    path: "/services" },
            { label: "Donate",       img: iconDonation,    path: "/services" },
            { label: "Live Darshan", img: iconLiveDarshan, path: "/darshan" },
          ].map(({ label, img, path }) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div
                className="w-full aspect-square rounded-[18px] flex items-center justify-center"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(180,120,60,0.11)",
                  boxShadow: "0 3px 14px rgba(100,50,15,0.08)",
                }}
              >
                <img src={img} alt={label} className="w-[80px] h-[80px] object-contain" />
              </div>
              <span className="font-manrope text-[11.5px] font-bold text-temple-brown text-center leading-tight">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Today's Aarti Schedule ── */}
      <div className="px-4 mt-5">
        <div className="rounded-[20px] overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.07)" }}>
          <div className="px-4 pt-4 pb-3 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(180,120,60,0.08)" }}>
            <div>
              <h2 className="font-manrope font-bold text-[15px] text-temple-brown">Today's Aarti Schedule</h2>
              <p className="font-manrope text-[11px] text-foreground/40 mt-0.5">29 March 2026</p>
            </div>
            <span className="text-[22px]">🔔</span>
          </div>
          <div className="p-3 space-y-1">
            {AARTIS.map(({ name, time, done, next }) => (
              <div
                key={name}
                className="flex items-center justify-between px-3 py-2.5 rounded-[12px]"
                style={{
                  background: next ? "rgba(255,248,235,0.9)" : "transparent",
                  border: next ? "1px solid rgba(217,124,42,0.2)" : "1px solid transparent",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: done ? "rgba(180,120,60,0.25)" : next ? "#D97C2A" : "rgba(180,120,60,0.15)" }}
                  />
                  <span className="font-manrope text-[13px]" style={{ color: done ? "rgba(90,50,20,0.4)" : "#3B1A05", fontWeight: next ? 700 : 500 }}>
                    {name}
                  </span>
                  {next && <span className="font-manrope text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full text-white" style={{ background: saffron }}>Next</span>}
                </div>
                <span className="font-manrope text-[12px] font-semibold" style={{ color: done ? "rgba(90,50,20,0.35)" : "#A85A18", textDecoration: done ? "line-through" : "none" }}>
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Section ── */}
      <div className="mt-5">
        <div className="px-4 flex items-center justify-between mb-3">
          <h2 className="font-manrope font-bold text-[16px] text-temple-brown">Temple Services</h2>
          <button onClick={() => navigate("/services")} className="font-manrope text-[12px] font-semibold text-temple-gold">View All →</button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2" style={{ scrollSnapType: "x mandatory" }}>
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="shrink-0 w-[160px] rounded-[18px] overflow-hidden"
              style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.08)", scrollSnapAlign: "start" }}
            >
              <div className="h-[80px] flex items-center justify-center text-[40px]" style={{ background: `${s.color}18` }}>
                {s.icon}
              </div>
              <div className="p-3">
                <p className="font-manrope font-bold text-[13px] text-temple-brown leading-tight">{s.name}</p>
                <p className="font-manrope text-[11px] text-foreground/45 mt-0.5 leading-snug">{s.desc}</p>
                <div className="flex items-center justify-between mt-2.5">
                  <span className="font-manrope font-bold text-[12px] text-temple-gold">{s.price}</span>
                  <button
                    onClick={() => navigate("/services")}
                    className="px-3 py-1 rounded-[8px] font-manrope font-bold text-white text-[11px] active:scale-95"
                    style={{ background: saffron }}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Upcoming Visit ── */}
      <div className="px-4 mt-5">
        <div
          className="rounded-[20px] p-4 relative overflow-hidden"
          style={{ background: saffron }}
        >
          <div className="absolute right-4 top-4 text-[60px] opacity-10">🕉️</div>
          <p className="font-manrope text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">Your Next Visit</p>
          <h3 className="font-caslon text-[20px] text-white mb-0.5">Rudrabhishek</h3>
          <p className="font-manrope text-[12px] text-white/80 mb-3">Saturday, 5 April 2026 · 06:00 AM</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/tickets")}
              className="px-4 py-2 rounded-[10px] font-manrope font-bold text-temple-gold text-[12px] active:scale-95"
              style={{ background: "rgba(255,255,255,0.92)" }}
            >
              View Ticket →
            </button>
            <span className="font-manrope text-[11px] text-white/60">Ref: SKVT-294801</span>
          </div>
        </div>
      </div>

      {/* ── Prasad Delivery Banner ── */}
      <div className="px-4 mt-4">
        <div
          className="rounded-[18px] p-4 flex items-center gap-4"
          style={{ background: "rgba(255,248,235,0.8)", border: "1px solid rgba(180,120,60,0.15)" }}
        >
          <span className="text-[36px]">🍬</span>
          <div className="flex-1">
            <p className="font-manrope font-bold text-[13px] text-temple-brown">Temple Prasad Delivery</p>
            <p className="font-manrope text-[11px] text-foreground/50 mt-0.5">Get sacred prasad delivered to your home</p>
          </div>
          <button
            onClick={() => navigate("/souvenir")}
            className="shrink-0 px-3 py-2 rounded-[10px] font-manrope font-bold text-white text-[11px] active:scale-95"
            style={{ background: saffron }}
          >
            Order
          </button>
        </div>
      </div>

      {/* ── Language Bottom Sheet ── */}
      {showLangSheet && (
        <div className="fixed inset-0 z-50" onClick={() => setShowLangSheet(false)}>
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] rounded-t-[24px] overflow-hidden animate-slide-up"
            style={{ background: "#FFFAF4" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full" style={{ background: "rgba(180,120,60,0.2)" }} />
            </div>
            <div className="px-5 pt-2 pb-3 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(180,120,60,0.1)" }}>
              <h3 className="font-manrope font-bold text-[17px] text-temple-brown">Select Language</h3>
              <button onClick={() => setShowLangSheet(false)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(180,120,60,0.1)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#5C2D0E" strokeWidth="2" className="w-4 h-4"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div className="overflow-y-auto px-4 py-3 pb-8" style={{ maxHeight: "65vh" }}>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { code: "EN", label: "English" },
                  { code: "हि", label: "हिन्दी" },
                  { code: "বাং", label: "বাংলা" },
                  { code: "తె", label: "తెలుగు" },
                  { code: "மா", label: "தமிழ்" },
                  { code: "मर", label: "मराठी" },
                  { code: "ગુ", label: "ગુજરાતી" },
                  { code: "ਪੰ", label: "ਪੰਜਾਬੀ" },
                  { code: "മ", label: "മലയാളം" },
                  { code: "ಕ", label: "ಕನ್ನಡ" },
                  { code: "ଓ", label: "ଓଡ଼ିଆ" },
                  { code: "অ", label: "অসমীয়া" },
                  { code: "उ", label: "उर्दू" },
                  { code: "स", label: "संस्कृत" },
                  { code: "सिं", label: "सिन्धी" },
                  { code: "नेे", label: "नेपाली" },
                  { code: "क", label: "कश्मीरी" },
                  { code: "ক", label: "কোঙ্কণী" },
                  { code: "ड", label: "डोगरी" },
                  { code: "मै", label: "मैथिली" },
                  { code: "ब", label: "बोडो" },
                  { code: "स", label: "संथाली" },
                ].map(({ code, label }) => {
                  const active = selectedLang.code === code;
                  return (
                    <button
                      key={code}
                      onClick={() => { setSelectedLang({ code, label }); setShowLangSheet(false); }}
                      className="flex items-center gap-3 px-4 py-3 rounded-[14px] text-left active:scale-[0.98] transition-transform"
                      style={active
                        ? { background: "rgba(217,124,42,0.1)", border: "1.5px solid rgba(217,124,42,0.35)" }
                        : { background: "#fff", border: "1px solid rgba(180,120,60,0.12)" }
                      }
                    >
                      <span className="font-manrope font-bold text-[15px] w-8 text-center" style={{ color: active ? "#D97C2A" : "#5C2D0E" }}>{code}</span>
                      <span className="font-manrope text-[13px] font-medium" style={{ color: active ? "#A85A18" : "rgba(90,50,20,0.7)" }}>{label}</span>
                      {active && <span className="ml-auto text-temple-gold text-[14px]">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
