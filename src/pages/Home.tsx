import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
import leftSep from "@/assets/left-separator.png";
import rightSep from "@/assets/right-separator.png";
import infoTemple from "@/assets/about-temple.jpeg";
import infoKashi from "@/assets/about-kashi.jpeg";
import infoGhats from "@/assets/about-kashi.jpeg";
import infoTrust from "@/assets/about-trust.jpeg";
import infoFaqs from "@/assets/faqs.jpeg";
import imgRudraksha from "@/assets/prasadam/rudraksha.png";
import imgModels from "@/assets/prasadam/modals.png";
import imgIdols from "@/assets/prasadam/idols.png";
import imgShankh from "@/assets/prasadam/sankha.png";
import imgDhoop from "@/assets/prasadam/agarbatti.png";
import imgSarees from "@/assets/prasadam/sarees.png";
import prasadamLogo from "@/assets/prasadam/prasadam-logo.png";

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

const BESTSELLERS = [
  { img: imgRudraksha, name: "Panchmukhi Rudraksha", sub: "5-face, energised", price: "₹450", bg: "#EEECEA" },
  { img: imgIdols,     name: "Kashi Vishwanath Idol", sub: "Pure brass, 6 inch", price: "₹1,200", bg: "#F2EDD4" },
  { img: imgShankh,    name: "Ganga Aarti Shankh", sub: "Sacred conch shell", price: "₹850", bg: "#EDE3D8" },
  { img: imgModels,    name: "Temple Model Frame", sub: "Handcrafted silver", price: "₹2,100", bg: "#D8E8F4" },
  { img: imgSarees,    name: "Banarasi Silk Saree", sub: "Pure zari work", price: "₹3,500", bg: "#F2DADA" },
  { img: imgDhoop,     name: "Kashi Dhoop Sticks", sub: "Temple-grade fragrance", price: "₹180", bg: "#DBF0DE" },
];

const SOUVENIR_CATS = [
  { img: imgRudraksha, cat: "Spiritual Jewellery",          name: "Rudraksha\n& Beads",   bg: "#EEECEA", tag: "#5C5C5C" },
  { img: imgModels,    cat: "Temple Souvenir",              name: "Models\n& Frames",     bg: "#D8E8F4", tag: "#2A6496" },
  { img: imgIdols,     cat: "Brass Idols & Statues",        name: "Idols\n& Statues",     bg: "#F2EDD4", tag: "#8B6914" },
  { img: imgShankh,    cat: "Sacred Items",                 name: "Shankh\nShaligram",    bg: "#EDE3D8", tag: "#8B4513" },
  { img: imgDhoop,     cat: "Fragrance & Essentials",       name: "Dhoop\nAgarbatti",     bg: "#DBF0DE", tag: "#2A6B3A" },
  { img: imgSarees,    cat: "Traditional Clothing",         name: "Banarasi\nSarees",     bg: "#F2DADA", tag: "#A82828" },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <img src={leftSep} alt="" className="w-[52px] object-contain opacity-85" />
      <h2 className="font-caslon font-bold text-[17px] text-temple-brown text-center leading-tight">{title}</h2>
      <img src={rightSep} alt="" className="w-[52px] object-contain opacity-85" />
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [bannerIndex, setBannerIndex] = useState<number | null>(null);
  const [showLangSheet, setShowLangSheet] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: "EN", label: "English" });
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [addedToCart, setAddedToCart] = useState<Set<number>>(new Set());

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

  function toggleCart(i: number) {
    setAddedToCart((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <div className="min-h-full bg-background pb-8">

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
      <div className="mx-4 mt-5 rounded-[20px] overflow-hidden relative" style={{ height: 200, boxShadow: "0 8px 32px rgba(100,50,15,0.22), 0 2px 8px rgba(100,50,15,0.12)" }}>
        <img
          src={heroTemple}
          alt="Temple"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: bannerIndex === null ? 1 : 0 }}
        />
        {BANNERS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Banner ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: bannerIndex === i ? 1 : 0 }}
          />
        ))}
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


      {/* ──────────────────────────────────── */}
      {/* ── Info Bento Grid ── */}
      {/* ──────────────────────────────────── */}
      <div className="px-4 mt-7">
        <SectionHeader title="Know Kashi & The Temple" />
        <div className="grid grid-cols-2 gap-3">

          {/* About Temple — full width tall tile */}
          <div
            className="col-span-2 rounded-[20px] overflow-hidden relative active:scale-[0.99] transition-transform cursor-pointer"
            style={{ height: 160, boxShadow: "0 4px 20px rgba(100,50,15,0.14)" }}
            onClick={() => navigate("/about")}
          >
            <img src={infoTemple} alt="Temple" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(60,20,5,0.78) 0%, rgba(20,5,0,0.35) 100%)" }} />
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <span className="font-manrope text-[9.5px] font-bold uppercase tracking-[0.16em] text-white/80">Ancient History · Significance</span>
              <div>
                <h3 className="font-manrope font-bold text-[18px] text-white leading-tight">About the Temple</h3>
                <p className="font-manrope text-[11px] text-white/85 mt-0.5 leading-snug">One of the 12 Jyotirlingas, over 3,500 years of devotion</p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="font-manrope text-[11px] font-bold text-[#D97C2A]">Explore</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D97C2A" strokeWidth="2.5" className="w-3 h-3"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* About Kashi */}
          <div
            className="rounded-[20px] overflow-hidden relative active:scale-[0.99] transition-transform cursor-pointer"
            style={{ height: 160, boxShadow: "0 4px 20px rgba(100,50,15,0.1)" }}
            onClick={() => navigate("/about-kashi")}
          >
            <img src={infoKashi} alt="Kashi" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,5,0,0.25) 0%, rgba(30,10,0,0.72) 100%)" }} />
            <div className="absolute inset-0 p-3 flex flex-col justify-end">
              <span className="font-manrope text-[8.5px] font-bold uppercase tracking-wider text-white/80 mb-0.5">City of Shiva</span>
              <h3 className="font-manrope font-bold text-[15px] text-white leading-tight">About Kashi</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="font-manrope text-[10px] font-bold text-[#F0A843]">Read more</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="#F0A843" strokeWidth="2.5" className="w-2.5 h-2.5"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          {/* About Trust */}
          <div
            className="rounded-[20px] overflow-hidden relative active:scale-[0.99] transition-transform cursor-pointer"
            style={{ height: 160, boxShadow: "0 4px 20px rgba(100,50,15,0.1)" }}
            onClick={() => navigate("/about-trust")}
          >
            <img src={infoTrust} alt="Trust" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,5,0,0.2) 0%, rgba(30,10,0,0.78) 100%)" }} />
            <div className="absolute inset-0 p-3 flex flex-col justify-end">
              <span className="font-manrope text-[8.5px] font-bold uppercase tracking-wider text-white/80 mb-0.5">Governance</span>
              <h3 className="font-manrope font-bold text-[15px] text-white leading-tight">About the Trust</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="font-manrope text-[10px] font-bold text-[#F0A843]">Know more</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="#F0A843" strokeWidth="2.5" className="w-2.5 h-2.5"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div
            className="rounded-[20px] overflow-hidden relative active:scale-[0.99] transition-transform cursor-pointer"
            style={{ height: 140, boxShadow: "0 4px 16px rgba(100,50,15,0.1)" }}
            onClick={() => navigate("/faq")}
          >
            <img src={infoFaqs} alt="FAQs" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,5,0,0.2) 0%, rgba(30,10,0,0.75) 100%)" }} />
            <div className="absolute inset-0 p-3 flex flex-col justify-end">
              <span className="font-manrope text-[8.5px] font-bold uppercase tracking-wider text-white/80 mb-0.5">Visitor Info</span>
              <h3 className="font-manrope font-bold text-[15px] text-white leading-tight">FAQs</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="font-manrope text-[10px] font-bold text-[#F0A843]">View</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="#F0A843" strokeWidth="2.5" className="w-2.5 h-2.5"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          {/* Foreign Devotee */}
          <div
            className="rounded-[20px] p-3 flex flex-col justify-between active:scale-[0.99] transition-transform cursor-pointer"
            style={{ height: 140, background: "linear-gradient(160deg, #3B1A05 0%, #6B3010 100%)", boxShadow: "0 4px 16px rgba(100,50,15,0.22)" }}
            onClick={() => navigate("/foreign-devotee")}
          >
            <div className="w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,200,120,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
            </div>
            <div>
              <span className="font-manrope text-[8.5px] font-bold uppercase tracking-wider text-white/40">NRI · International</span>
              <h3 className="font-manrope font-bold text-[15px] text-white leading-tight mt-0.5">Foreign Devotee</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="font-manrope text-[10px] font-bold text-[#F0A843]">Guidelines</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="#F0A843" strokeWidth="2.5" className="w-2.5 h-2.5"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

        </div>
      </div>

{/* ──────────────────────────────────── */}
{/* ── Souvenir Bestsellers ── */}
{/* ──────────────────────────────────── */}
<div className="px-4 mt-7">
  <SectionHeader title="Souvenirs from Kashi" />

  <div className="flex items-center justify-between mb-3">
    <p className="font-manrope text-[11.5px] text-foreground/45">
      Blessed by the temple • Delivered to your door
    </p>
    <button
      onClick={() => navigate("/souvenir")}
      className="font-manrope text-[12px] font-semibold text-temple-gold shrink-0"
    >
      <span className="flex items-center gap-1">View All <ArrowRight className="w-3.5 h-3.5" /></span>
    </button>
  </div>

  {/* Horizontal product scroll */}
  <div
    className="overflow-x-auto pb-2"
    style={{
      scrollSnapType: "x mandatory",
      WebkitOverflowScrolling: "touch",
    }}
  >
    <div className="flex gap-3 w-max pr-1">
      {BESTSELLERS.map((p, i) => (
        <div
          key={i}
          className="rounded-[18px] overflow-hidden flex flex-col"
          style={{
            width: 148,
            flexShrink: 0,
            background: "#fff",
            border: "1px solid rgba(180,120,60,0.12)",
            boxShadow: "0 3px 16px rgba(100,50,15,0.08)",
            scrollSnapAlign: "start",
          }}
        >
          {/* Image */}
          <div
            className="relative h-[120px] overflow-hidden"
            style={{ background: p.bg }}
          >
            <img
              src={p.img}
              alt={p.name}
              className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom"
              style={{ transform: "scale(1.05)" }}
            />

            {/* Wishlist */}
            <button
              onClick={() =>
                setWishlist((prev) => {
                  const next = new Set(prev);
                  next.has(i) ? next.delete(i) : next.add(i);
                  return next;
                })
              }
              className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center active:scale-90 transition-transform"
              style={{
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(4px)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5"
                fill={wishlist.has(i) ? "#D97C2A" : "none"}
                stroke={wishlist.has(i) ? "#D97C2A" : "#888"}
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
          </div>

          {/* Info */}
          <div className="p-3 flex flex-col gap-1.5 flex-1">
            <p className="font-manrope font-bold text-[12px] text-[#1C1C1C] leading-snug">
              {p.name}
            </p>

            <p className="font-manrope text-[10px] text-foreground/45 leading-none">
              {p.sub}
            </p>

            <div className="flex items-center justify-between mt-auto pt-1">
              <span className="font-manrope font-bold text-[13px] text-temple-gold">
                {p.price}
              </span>

              <button
                onClick={() => toggleCart(i)}
                className="w-7 h-7 rounded-[9px] flex items-center justify-center active:scale-90 transition-transform"
                style={{
                  background: addedToCart.has(i)
                    ? saffron
                    : "rgba(217,124,42,0.12)",
                }}
              >
                {addedToCart.has(i) ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D97C2A"
                    strokeWidth="2"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* ──────────────────────────────────── */}
      {/* ── Souvenir Categories Bento ── */}
      {/* ──────────────────────────────────── */}
      <div className="px-4 mt-7">
        <SectionHeader title="Authentic Temple Souvenirs" />

        {/* Prasadam brand strip */}
        <div className="flex items-center gap-3 rounded-[14px] px-4 py-3 mb-3" style={{ background: saffron }}>
          <img src={prasadamLogo} alt="Shri Kashi Prasadam" className="h-8 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
          <div className="flex-1">
            <p className="font-manrope font-bold text-white text-[12px] leading-none">Shri Kashi Prasadam</p>
            <p className="font-manrope text-white/70 text-[10px] mt-0.5">An initiative of Sri Kashi Vishwanath Temple Trust</p>
          </div>
          <button
            onClick={() => navigate("/souvenir")}
            className="shrink-0 px-3 py-1.5 rounded-[10px] font-manrope font-bold text-temple-gold text-[11px] active:scale-95"
            style={{ background: "rgba(255,255,255,0.92)" }}
          >
            <span className="flex items-center gap-1">Shop <ArrowRight className="w-3 h-3" /></span>
          </button>
        </div>

        {/* Bento grid — row 1: large left + small right stack */}
        <div className="grid grid-cols-2 gap-3">

          {/* Large tile — Rudraksha */}
          <div
            className="row-span-2 rounded-[22px] overflow-hidden flex flex-col active:scale-[0.98] transition-transform cursor-pointer"
            style={{ background: SOUVENIR_CATS[0].bg, border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            onClick={() => navigate("/souvenir")}
          >
            <div className="px-4 pt-4 pb-2">
              <p className="font-manrope text-[9px] font-bold uppercase tracking-wider" style={{ color: SOUVENIR_CATS[0].tag }}>{SOUVENIR_CATS[0].cat}</p>
              <h4 className="font-manrope font-bold text-[#1C1C1C] text-[17px] leading-tight whitespace-pre-line mt-1">{SOUVENIR_CATS[0].name}</h4>
            </div>
            <div className="flex-1 relative min-h-[160px]">
              <img
                src={SOUVENIR_CATS[0].img}
                alt="Rudraksha"
                className="absolute bottom-0 left-0 right-0 w-full h-full object-contain object-bottom"
                loading="lazy"
              />
            </div>
          </div>

          {/* Small tile — Models & Frames */}
          <div
            className="rounded-[22px] overflow-hidden flex flex-col active:scale-[0.98] transition-transform cursor-pointer"
            style={{ background: SOUVENIR_CATS[1].bg, border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            onClick={() => navigate("/souvenir")}
          >
            <div className="px-3 pt-3 pb-1">
              <p className="font-manrope text-[8.5px] font-bold uppercase tracking-wider" style={{ color: SOUVENIR_CATS[1].tag }}>{SOUVENIR_CATS[1].cat}</p>
              <h4 className="font-manrope font-bold text-[#1C1C1C] text-[14px] leading-tight whitespace-pre-line mt-0.5">{SOUVENIR_CATS[1].name}</h4>
            </div>
            <div className="relative h-[90px]">
              <img src={SOUVENIR_CATS[1].img} alt="Models" className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom" loading="lazy" />
            </div>
          </div>

          {/* Small tile — Idols & Statues */}
          <div
            className="rounded-[22px] overflow-hidden flex flex-col active:scale-[0.98] transition-transform cursor-pointer"
            style={{ background: SOUVENIR_CATS[2].bg, border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            onClick={() => navigate("/souvenir")}
          >
            <div className="px-3 pt-3 pb-1">
              <p className="font-manrope text-[8.5px] font-bold uppercase tracking-wider" style={{ color: SOUVENIR_CATS[2].tag }}>{SOUVENIR_CATS[2].cat}</p>
              <h4 className="font-manrope font-bold text-[#1C1C1C] text-[14px] leading-tight whitespace-pre-line mt-0.5">{SOUVENIR_CATS[2].name}</h4>
            </div>
            <div className="relative h-[90px]">
              <img src={SOUVENIR_CATS[2].img} alt="Idols" className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom" loading="lazy" />
            </div>
          </div>

          {/* Wide tile — Shankh Shaligram */}
          <div
            className="col-span-2 rounded-[22px] overflow-hidden flex items-center gap-4 px-4 active:scale-[0.99] transition-transform cursor-pointer"
            style={{ background: SOUVENIR_CATS[3].bg, border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", height: 110 }}
            onClick={() => navigate("/souvenir")}
          >
            <div className="flex-1">
              <p className="font-manrope text-[9px] font-bold uppercase tracking-wider" style={{ color: SOUVENIR_CATS[3].tag }}>{SOUVENIR_CATS[3].cat}</p>
              <h4 className="font-manrope font-bold text-[#1C1C1C] text-[18px] leading-tight whitespace-pre-line mt-1">{SOUVENIR_CATS[3].name}</h4>
            </div>
            <div className="relative w-[130px] h-full shrink-0">
              <img src={SOUVENIR_CATS[3].img} alt="Shankh" className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom" loading="lazy" />
            </div>
          </div>

          {/* Small tile — Dhoop */}
          <div
            className="rounded-[22px] overflow-hidden flex flex-col active:scale-[0.98] transition-transform cursor-pointer"
            style={{ background: SOUVENIR_CATS[4].bg, border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            onClick={() => navigate("/souvenir")}
          >
            <div className="px-3 pt-3 pb-1">
              <p className="font-manrope text-[8.5px] font-bold uppercase tracking-wider" style={{ color: SOUVENIR_CATS[4].tag }}>{SOUVENIR_CATS[4].cat}</p>
              <h4 className="font-manrope font-bold text-[#1C1C1C] text-[14px] leading-tight whitespace-pre-line mt-0.5">{SOUVENIR_CATS[4].name}</h4>
            </div>
            <div className="relative h-[90px]">
              <img src={SOUVENIR_CATS[4].img} alt="Dhoop" className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom" loading="lazy" />
            </div>
          </div>

          {/* Small tile — Banarasi Sarees */}
          <div
            className="rounded-[22px] overflow-hidden flex flex-col active:scale-[0.98] transition-transform cursor-pointer"
            style={{ background: SOUVENIR_CATS[5].bg, border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            onClick={() => navigate("/souvenir")}
          >
            <div className="px-3 pt-3 pb-1">
              <p className="font-manrope text-[8.5px] font-bold uppercase tracking-wider" style={{ color: SOUVENIR_CATS[5].tag }}>{SOUVENIR_CATS[5].cat}</p>
              <h4 className="font-manrope font-bold text-[#1C1C1C] text-[14px] leading-tight whitespace-pre-line mt-0.5">{SOUVENIR_CATS[5].name}</h4>
            </div>
            <div className="relative h-[90px]">
              <img src={SOUVENIR_CATS[5].img} alt="Sarees" className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom" loading="lazy" />
            </div>
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────── */}
      {/* ── Live Darshan ── */}
      {/* ──────────────────────────────────── */}
      <div className="px-4 mt-7">
        <SectionHeader title="Live Darshan" />
        <div
          className="rounded-[20px] overflow-hidden relative"
          style={{ aspectRatio: "16/9", boxShadow: "0 8px 32px rgba(100,50,15,0.18)" }}
        >
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full pointer-events-none" style={{ background: "rgba(220,38,38,0.92)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-manrope font-bold text-white text-[10px] uppercase tracking-wider">Live Now</span>
          </div>
          <iframe
            src="https://www.youtube.com/embed/SYoTvcjOwQk?autoplay=1&mute=1&si=GgaQp47HWwPReLaZ"
            title="Kashi Vishwanath Live Darshan"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>

      {/* ──────────────────────────────────── */}
      {/* ── Social Media ── */}
      {/* ──────────────────────────────────── */}
      <div className="px-4 mt-7 mb-2">
        <SectionHeader title="Follow Us" />
        <div className="rounded-[20px] p-4" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.06)" }}>
          <p className="font-manrope text-[12px] text-foreground/45 text-center mb-4 leading-snug">
            Stay connected for live updates, aartis &amp; divine blessings
          </p>
          <div className="flex items-center justify-center gap-3">
            {[
              {
                label: "YouTube",
                color: "#FF0000",
                bg: "#FFF0F0",
                icon: (
                  <svg viewBox="0 0 24 24" fill="#FF0000" className="w-5 h-5">
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
                  </svg>
                ),
              },
              {
                label: "Instagram",
                color: "#E1306C",
                bg: "#FFF0F5",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                ),
              },
              {
                label: "Facebook",
                color: "#1877F2",
                bg: "#EFF5FF",
                icon: (
                  <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5">
                    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
                  </svg>
                ),
              },
              {
                label: "X",
                color: "#000",
                bg: "#F0F0F0",
                icon: (
                  <svg viewBox="0 0 24 24" fill="#000" className="w-4.5 h-4.5 w-[18px] h-[18px]">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ),
              },
              {
                label: "WhatsApp",
                color: "#25D366",
                bg: "#EDFFF3",
                icon: (
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
              },
            ].map(({ label, bg, icon }) => (
              <button
                key={label}
                className="flex flex-col items-center gap-1.5 active:scale-90 transition-transform"
              >
                <div
                  className="w-11 h-11 rounded-[14px] flex items-center justify-center"
                  style={{ background: bg, border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
                >
                  {icon}
                </div>
                <span className="font-manrope text-[9px] font-semibold text-foreground/45">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

            {/* ── Today's Aarti Schedule ── */}
      {/* <div className="px-4 mt-5">
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
      </div> */}

      {/* ── Services Section ── */}
      {/* <div className="mt-5">
        <div className="px-4 flex items-center justify-between mb-3">
          <h2 className="font-manrope font-bold text-[16px] text-temple-brown">Temple Services</h2>
          <button onClick={() => navigate("/services")} className="font-manrope text-[12px] font-semibold text-temple-gold flex items-center gap-1">View All <ArrowRight className="w-3.5 h-3.5" /></button>
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
      </div> */}

      {/* ── Upcoming Visit ── */}
      {/* <div className="px-4 mt-5">
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
              <span className="flex items-center gap-1">View Ticket <ArrowRight className="w-3.5 h-3.5" /></span>
            </button>
            <span className="font-manrope text-[11px] text-white/60">Ref: SKVT-294801</span>
          </div>
        </div>
      </div> */}




      {/* ── Language Bottom Sheet ── */}
      {showLangSheet && (
        <div className="fixed inset-0 z-50" onClick={() => setShowLangSheet(false)}>
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] rounded-t-[24px] overflow-hidden animate-slide-up"
            style={{ background: "#FFFAF4" }}
            onClick={(e) => e.stopPropagation()}
          >
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
