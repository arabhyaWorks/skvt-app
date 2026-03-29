import { useLocation, useNavigate } from "react-router-dom";

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ServicesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
  </svg>
);
const SouvenirIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round"/>
    <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round"/>
  </svg>
);
const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round"/>
  </svg>
);

const TABS = [
  { path: "/", label: "Home", Icon: HomeIcon },
  { path: "/services", label: "Services", Icon: ServicesIcon },
  { path: "/souvenir", label: "Souvenir", Icon: SouvenirIcon },
  { path: "/profile", label: "Profile", Icon: ProfileIcon },
];

export default function BottomNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50"
      style={{
        background: "rgba(255,250,244,0.97)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(180,120,60,0.12)",
        boxShadow: "0 -4px 24px rgba(100,50,15,0.08)",
      }}
    >
      <div className="flex items-stretch" style={{ height: 64, paddingBottom: "env(safe-area-inset-bottom)" }}>
        {TABS.map(({ path, label, Icon }) => {
          const active = pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 relative transition-all duration-200 active:scale-95"
              style={{ color: active ? "#D97C2A" : "rgba(100,70,40,0.4)" }}
            >
              {active && (
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 rounded-b-full"
                  style={{ height: 3, background: "linear-gradient(90deg,#D97C2A,#A85A18)" }}
                />
              )}
              <span style={{ transform: active ? "scale(1.12)" : "scale(1)", transition: "transform 0.2s" }}>
                <Icon />
              </span>
              <span
                className="font-manrope text-[10px] font-bold tracking-wide"
                style={{ color: active ? "#D97C2A" : "rgba(100,70,40,0.4)" }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
