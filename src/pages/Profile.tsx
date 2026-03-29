import { useNavigate } from "react-router-dom";

const saffron = "linear-gradient(135deg, #D97C2A 0%, #A85A18 100%)";

const MENU = [
  { icon: "🎫", label: "My Tickets", path: "/tickets", desc: "View upcoming visits" },
  { icon: "📦", label: "My Orders", path: "/souvenir", desc: "Track souvenir orders" },
  { icon: "📍", label: "Saved Addresses", path: null, desc: "Manage delivery addresses" },
  { icon: "🔔", label: "Notifications", path: null, desc: "Alerts and reminders" },
  { icon: "🕌", label: "Temple Timings", path: null, desc: "Darshan & aarti schedule" },
  { icon: "💬", label: "Help & Support", path: null, desc: "Contact us" },
  { icon: "ℹ️", label: "About SKVT App", path: null, desc: "Version 1.0.0" },
];

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-background">
      {/* Profile header with gradient */}
      <div className="relative pb-16 pt-12 px-4" style={{ background: saffron }}>
        {/* Decorative circle */}
        <div className="absolute right-[-30px] top-[-30px] w-[150px] h-[150px] rounded-full opacity-15" style={{ background: "rgba(255,255,255,0.3)" }} />
        <div className="absolute right-[20px] top-[60px] w-[80px] h-[80px] rounded-full opacity-10" style={{ background: "rgba(255,255,255,0.4)" }} />

        <div className="flex items-center gap-4 relative z-10">
          {/* Avatar */}
          <div className="w-[68px] h-[68px] rounded-full flex items-center justify-center font-manrope font-bold text-[22px] text-temple-brown shrink-0" style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            RK
          </div>
          <div className="flex-1">
            <h2 className="font-manrope font-bold text-[18px] text-white">Ramesh Kumar</h2>
            <p className="font-manrope text-[12.5px] text-white/75 mt-0.5">+91 94526 24111</p>
            <p className="font-manrope text-[11px] text-white/55 mt-0.5">Devotee since 2024</p>
          </div>
          <button className="px-3 py-1.5 rounded-[10px] font-manrope font-bold text-[11.5px] active:scale-95"
            style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.35)" }}>
            Edit
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-4 -mt-8 relative z-10 grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Bookings", value: "4" },
          { label: "Visits", value: "12" },
          { label: "Wishlist", value: "3" },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-[16px] py-3 text-center" style={{ background: "#fff", boxShadow: "0 4px 16px rgba(100,50,15,0.1)", border: "1px solid rgba(180,120,60,0.1)" }}>
            <p className="font-manrope font-bold text-[22px] text-temple-gold">{value}</p>
            <p className="font-manrope text-[11px] text-foreground/50 font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="px-4 space-y-2 pb-6">
        {MENU.map(({ icon, label, path, desc }) => (
          <button
            key={label}
            onClick={() => path && navigate(path)}
            className="w-full flex items-center gap-3 p-4 rounded-[16px] text-left active:scale-[0.99] transition-transform"
            style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.1)", boxShadow: "0 2px 10px rgba(100,50,15,0.05)" }}
          >
            <span className="text-[22px] shrink-0">{icon}</span>
            <div className="flex-1">
              <p className="font-manrope font-semibold text-[14px] text-temple-brown">{label}</p>
              <p className="font-manrope text-[11px] text-foreground/40">{desc}</p>
            </div>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: "rgba(180,120,60,0.35)" }}>
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
        ))}

        {/* Logout */}
        <button className="w-full flex items-center gap-3 p-4 rounded-[16px] text-left active:scale-[0.99]"
          style={{ background: "rgba(220,50,50,0.05)", border: "1px solid rgba(220,50,50,0.12)" }}>
          <span className="text-[22px]">🚪</span>
          <div className="flex-1">
            <p className="font-manrope font-semibold text-[14px]" style={{ color: "#E53E3E" }}>Logout</p>
            <p className="font-manrope text-[11px]" style={{ color: "rgba(220,50,50,0.55)" }}>Sign out of your account</p>
          </div>
        </button>

        <p className="text-center font-manrope text-[11px] pt-2" style={{ color: "rgba(180,120,60,0.35)" }}>
          SKVT App · Version 1.0.0
        </p>
      </div>
    </div>
  );
}
