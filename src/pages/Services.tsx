import { useState } from "react";
import { useNavigate } from "react-router-dom";

const saffron = "linear-gradient(135deg, #D97C2A 0%, #A85A18 100%)";

const SERVICES = [
  { id: "rudrabhishek", name: "Rudrabhishek", category: "Abhishek", duration: "2 hrs", price: "₹1,100", icon: "🪔", color: "#8B4513" },
  { id: "laghu-rudra", name: "Laghu Rudra", category: "Puja", duration: "3 hrs", price: "₹5,100", icon: "🕉️", color: "#6B3A2A" },
  { id: "maha-mrityu", name: "Maha Mrityunjaya", category: "Puja", duration: "1 hr", price: "₹2,100", icon: "📿", color: "#7B4E3D" },
  { id: "vishesh-puja", name: "Vishesh Puja", category: "Puja", duration: "45 min", price: "₹3,100", icon: "🔱", color: "#9B6A4A" },
  { id: "mangala-aarti", name: "Mangala Aarti", category: "Aarti", duration: "30 min", price: "₹500", icon: "🔔", color: "#9B6A4A" },
  { id: "sandhya-aarti", name: "Sandhya Aarti", category: "Aarti", duration: "30 min", price: "₹500", icon: "🪔", color: "#8B5E3C" },
  { id: "shayan-aarti", name: "Shayan Aarti", category: "Aarti", duration: "30 min", price: "₹500", icon: "🔔", color: "#7A4E34" },
  { id: "panchamrit", name: "Panchamrit Abhishek", category: "Abhishek", duration: "1 hr", price: "₹1,500", icon: "🏺", color: "#6B4226" },
];

const CATEGORIES = ["All", "Puja", "Abhishek", "Aarti"];

export default function Services() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const filtered = SERVICES.filter((s) => {
    const matchCat = active === "All" || s.category === active;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-full bg-background">
      <div className="pt-12" />

      {/* Header */}
      <div className="px-4 mb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-9 h-9 flex items-center justify-center rounded-full" style={{ background: "rgba(180,120,60,0.08)" }}>
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-temple-brown">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </button>
        <h1 className="font-manrope font-bold text-[20px] text-temple-brown">Temple Services</h1>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-[14px]" style={{ background: "#fff", border: "1.5px solid rgba(180,120,60,0.18)", boxShadow: "0 2px 10px rgba(100,50,15,0.06)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="rgba(180,120,60,0.5)" strokeWidth="2" className="w-4 h-4 shrink-0">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" strokeLinecap="round"/>
          </svg>
          <input
            type="text" placeholder="Search services…"
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent font-manrope text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none"
          />
        </div>
      </div>

      {/* Category chips */}
      <div className="flex gap-2 px-4 pb-4 overflow-x-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="shrink-0 px-4 py-1.5 rounded-full font-manrope font-semibold text-[12.5px] transition-all active:scale-95"
            style={active === cat
              ? { background: saffron, color: "#fff", boxShadow: "0 3px 12px rgba(168,90,24,0.3)" }
              : { background: "#fff", color: "#A85A18", border: "1.5px solid rgba(180,120,60,0.22)" }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 px-4 pb-6">
        {filtered.map((s) => (
          <div
            key={s.id}
            className="rounded-[18px] overflow-hidden active:scale-[0.98] transition-transform"
            style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.08)" }}
          >
            <div className="h-[90px] flex items-center justify-center text-[44px]" style={{ background: `${s.color}14` }}>
              {s.icon}
            </div>
            <div className="p-3">
              <p className="font-manrope font-bold text-[13px] text-temple-brown leading-tight">{s.name}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="font-manrope text-[10px] text-foreground/40">⏱</span>
                <span className="font-manrope text-[10.5px] text-foreground/45">{s.duration}</span>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <span className="font-manrope font-bold text-[13px] text-temple-gold">{s.price}</span>
                <button
                  onClick={() => navigate("/tickets")}
                  className="px-3 py-1.5 rounded-[9px] font-manrope font-bold text-white text-[11px] active:scale-95"
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
  );
}
