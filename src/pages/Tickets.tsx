import { useState } from "react";
import { useNavigate } from "react-router-dom";

const saffron = "linear-gradient(135deg, #D97C2A 0%, #A85A18 100%)";

const UPCOMING = [
  { id: 1, service: "Rudrabhishek", category: "Abhishek", date: "Saturday, 5 April 2026", time: "06:00 AM", ref: "SKVT-294801", icon: "🪔", color: "#8B4513" },
  { id: 2, service: "Mangala Aarti", category: "Aarti", date: "Saturday, 12 April 2026", time: "03:00 AM", ref: "SKVT-381920", icon: "🔔", color: "#9B6A4A" },
];

const PAST = [
  { id: 3, service: "Vishesh Puja", category: "Puja", date: "Sunday, 15 March 2026", time: "10:00 AM", ref: "SKVT-182734", icon: "🔱", color: "#7B4E3D" },
  { id: 4, service: "Laghu Rudra", category: "Puja", date: "Saturday, 28 February 2026", time: "08:00 AM", ref: "SKVT-092847", icon: "🕉️", color: "#6B3A2A" },
];

function QRPlaceholder() {
  return (
    <div className="w-20 h-20 rounded-[12px] flex items-center justify-center overflow-hidden shrink-0" style={{ background: "#fff", border: "1.5px solid rgba(180,120,60,0.2)" }}>
      <svg viewBox="0 0 80 80" className="w-full h-full p-2">
        {/* QR pattern placeholders */}
        <rect x="4" y="4" width="28" height="28" rx="3" fill="none" stroke="#5C2D0E" strokeWidth="3"/>
        <rect x="10" y="10" width="16" height="16" rx="1" fill="#5C2D0E"/>
        <rect x="48" y="4" width="28" height="28" rx="3" fill="none" stroke="#5C2D0E" strokeWidth="3"/>
        <rect x="54" y="10" width="16" height="16" rx="1" fill="#5C2D0E"/>
        <rect x="4" y="48" width="28" height="28" rx="3" fill="none" stroke="#5C2D0E" strokeWidth="3"/>
        <rect x="10" y="54" width="16" height="16" rx="1" fill="#5C2D0E"/>
        {/* dots */}
        <rect x="40" y="40" width="6" height="6" rx="1" fill="#5C2D0E"/>
        <rect x="50" y="40" width="6" height="6" rx="1" fill="#5C2D0E"/>
        <rect x="60" y="40" width="6" height="6" rx="1" fill="#5C2D0E"/>
        <rect x="40" y="50" width="6" height="6" rx="1" fill="#5C2D0E"/>
        <rect x="60" y="50" width="6" height="6" rx="1" fill="#5C2D0E"/>
        <rect x="40" y="60" width="6" height="6" rx="1" fill="#5C2D0E"/>
        <rect x="50" y="60" width="6" height="6" rx="1" fill="#5C2D0E"/>
        <rect x="60" y="60" width="6" height="6" rx="1" fill="#5C2D0E"/>
      </svg>
    </div>
  );
}

function TicketCard({ item, past }: { item: typeof UPCOMING[0]; past?: boolean }) {
  return (
    <div className="rounded-[20px] overflow-hidden mb-4" style={{
      background: "#fff",
      border: "1px solid rgba(180,120,60,0.12)",
      boxShadow: "0 4px 20px rgba(100,50,15,0.08)",
      opacity: past ? 0.75 : 1,
    }}>
      {/* Top color bar */}
      <div className="h-1.5 w-full" style={{ background: past ? "rgba(180,120,60,0.2)" : saffron }} />

      <div className="p-4">
        {/* Service + status */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[24px]" style={{ background: `${item.color}14` }}>
              {item.icon}
            </div>
            <div>
              <h3 className="font-manrope font-bold text-[15px] text-temple-brown">{item.service}</h3>
              <span className="font-manrope text-[10.5px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                style={{ background: `${item.color}14`, color: item.color }}>{item.category}</span>
            </div>
          </div>
          <span className="font-manrope text-[11px] font-bold px-2.5 py-1 rounded-full"
            style={past
              ? { background: "rgba(100,120,80,0.1)", color: "#5A7240" }
              : { background: "rgba(40,167,69,0.1)", color: "#28A745" }
            }>
            {past ? "✓ Completed" : "✓ Confirmed"}
          </span>
        </div>

        {/* Date / time */}
        <div className="flex items-center gap-4 mb-3 p-3 rounded-[12px]" style={{ background: "rgba(255,248,235,0.7)" }}>
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-temple-gold shrink-0">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            <span className="font-manrope text-[12px] font-semibold text-temple-brown">{item.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-temple-gold shrink-0">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span className="font-manrope text-[12px] font-semibold text-temple-brown">{item.time}</span>
          </div>
        </div>

        {/* QR + ref */}
        <div className="flex items-center gap-4">
          <QRPlaceholder />
          <div className="flex-1">
            <p className="font-manrope text-[10.5px] text-foreground/40 uppercase tracking-wide font-bold mb-1">Reference No.</p>
            <p className="font-manrope font-bold text-[14px] text-temple-brown">{item.ref}</p>
            <p className="font-manrope text-[11px] text-foreground/40 mt-1">Shri Kashi Vishwanath Temple Trust</p>
          </div>
        </div>

        {/* Actions */}
        {!past && (
          <div className="flex gap-2 mt-3 pt-3" style={{ borderTop: "1px solid rgba(180,120,60,0.08)" }}>
            <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-[10px] font-manrope font-bold text-[12px] active:scale-95"
              style={{ background: saffron, color: "#fff" }}>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              Download
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-[10px] font-manrope font-bold text-[12px] active:scale-95"
              style={{ background: "rgba(180,120,60,0.08)", color: "#5C2D0E", border: "1px solid rgba(180,120,60,0.15)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" strokeLinecap="round"/>
              </svg>
              Share
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Tickets() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="min-h-full bg-background">
      <div className="pt-12" />

      {/* Header */}
      <div className="px-4 mb-5 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-9 h-9 flex items-center justify-center rounded-full" style={{ background: "rgba(180,120,60,0.08)" }}>
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-temple-brown">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </button>
        <h1 className="font-manrope font-bold text-[20px] text-temple-brown">My Tickets</h1>
      </div>

      {/* Tab bar */}
      <div className="mx-4 mb-5 flex p-1 rounded-[14px]" style={{ background: "rgba(255,248,235,0.7)", border: "1px solid rgba(180,120,60,0.12)" }}>
        {(["upcoming", "past"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className="flex-1 py-2.5 rounded-[11px] font-manrope font-bold text-[13px] transition-all"
            style={tab === t
              ? { background: saffron, color: "#fff", boxShadow: "0 3px 12px rgba(168,90,24,0.25)" }
              : { color: "rgba(168,90,24,0.6)" }
            }
          >
            {t === "upcoming" ? `Upcoming (${UPCOMING.length})` : `Past (${PAST.length})`}
          </button>
        ))}
      </div>

      {/* Ticket list */}
      <div className="px-4 pb-6">
        {tab === "upcoming" && UPCOMING.map((t) => <TicketCard key={t.id} item={t} />)}
        {tab === "past" && PAST.map((t) => <TicketCard key={t.id} item={t} past />)}
      </div>
    </div>
  );
}
