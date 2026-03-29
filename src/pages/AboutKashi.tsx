import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import leftSep from "@/assets/left-separator.png";
import rightSep from "@/assets/right-separator.png";
import imgKashi from "@/assets/about-kashi.jpeg";
import imgGhats from "@/assets/about-kashi/ghats.jpeg";
import imgGangaAarti from "@/assets/about-kashi/ganga-aarti.jpeg";
import imgGolden from "@/assets/about-kashi/golden.jpeg";
import imgAdiVisweswara from "@/assets/about-kashi/adi-visweswara.jpeg";
import imgAhilyabai from "@/assets/about-kashi/ahilyabai.jpeg";
import imgDhamekStupa from "@/assets/about-kashi/dhamek-stupa.jpeg";
import imgTarakmantra from "@/assets/about-kashi/tarakmantra.jpeg";
import imgSaints from "@/assets/about-kashi/Saints.jpeg";
import img2021CE from "@/assets/about-kashi/2021-ce.webp";

const saffron = "linear-gradient(135deg, #D97C2A 0%, #A85A18 100%)";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <img src={leftSep} alt="" className="w-10 object-contain opacity-80" />
      <span className="font-manrope text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#A85A18]">{text}</span>
      <img src={rightSep} alt="" className="w-10 object-contain opacity-80" />
    </div>
  );
}

const TIMELINE = [
  {
    year: "~1500 BCE",
    era: "वैदिक काल",
    title: "Kashi in the Vedas",
    desc: "The name 'Kashi' (काशी — 'the Luminous One') appears in the Rigveda. The Skanda Purana's Kashi Khanda declares Kashi as Shiva's eternal abode. The Mahabharata calls it 'Avimuktam' — the Never-Abandoned City.",
    image: imgAdiVisweswara,
  },
  {
    year: "528 BCE",
    era: "बौद्ध काल",
    title: "Buddha's First Sermon at Sarnath",
    desc: "At Deer Park in Sarnath — just 10 km from Kashi — Gautama Buddha delivered his first sermon. Emperor Ashoka later erected the iconic Lion Capital pillar here, now India's national emblem.",
    image: imgDhamekStupa,
  },
  {
    year: "1585 CE",
    era: "मुग़ल काल",
    title: "Raja Todar Mal Reconstructs",
    desc: "Raja Todar Mal — revenue minister of Emperor Akbar — reconstructed the Kashi Vishwanath temple in 1585, restoring the sacred shrine to its former glory.",
    image: imgAhilyabai,
  },
  {
    year: "1780 CE",
    era: "मराठा काल",
    title: "Ahilyabai Holkar Rebuilds Kashi",
    desc: "Maharani Ahilyabai Holkar rebuilt the Kashi Vishwanath temple and reconstructed dozens of ghats. Maharaja Ranjit Singh later donated 1,000 kg of gold for the temple's twin shikharas.",
    image: imgGolden,
  },
  {
    year: "2021 CE",
    era: "आधुनिक काल",
    title: "Kashi Vishwanath Corridor",
    desc: "PM Narendra Modi inaugurated the Kashi Vishwanath Dham Corridor — a 5-lakh square foot development creating a grand axis from the Ganga's ghats directly to the temple.",
    image: img2021CE,
  },
];

const FACTS = [
  { value: "3,500+", label: "Years of History" },
  { value: "84", label: "Ghats on the Ganga" },
  { value: "23,000+", label: "Temples in Kashi" },
  { value: "1st", label: "Pilgrimage City" },
];

export default function AboutKashi() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-background pb-8">

      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{
          paddingTop: "max(12px, env(safe-area-inset-top))",
          background: "#fff",
          borderBottom: "1px solid rgba(180,120,60,0.1)",
          boxShadow: "0 2px 12px rgba(100,50,15,0.08)",
          position: "sticky", top: 0, zIndex: 40,
        }}
      >
        <button onClick={() => navigate(-1)} className="w-9 h-9 flex items-center justify-center rounded-full" style={{ background: "rgba(180,120,60,0.08)" }}>
          <ArrowLeft className="w-4 h-4 text-temple-brown" />
        </button>
        <div>
          <p className="font-manrope text-[10px] font-bold uppercase tracking-wider text-foreground/40">City of Shiva</p>
          <h1 className="font-manrope font-bold text-[16px] text-temple-brown leading-none">About Kashi</h1>
        </div>
      </div>

      {/* Hero */}
      <div className="relative" style={{ height: 220 }}>
        <img src={imgKashi} alt="Kashi" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,5,0,0.15) 0%, rgba(20,5,0,0.80) 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <SectionLabel text="काशी — The City of Light" />
          <h2 className="font-manrope font-bold text-[24px] text-white leading-tight">Varanasi · Kashi · Banaras</h2>
          <p className="font-manrope text-[12px] text-white/75 mt-1 leading-snug">The oldest living city on earth — where Shiva himself granted moksha</p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mt-5">
        <div className="grid grid-cols-2 gap-2.5">
          {FACTS.map((s) => (
            <div key={s.label} className="rounded-[16px] p-4 flex flex-col items-center text-center" style={{ background: "linear-gradient(135deg, rgba(253,244,231,0.95) 0%, rgba(255,250,243,0.8) 100%)", border: "1px solid rgba(180,120,50,0.18)" }}>
              <div className="w-8 h-[2px] rounded-full mb-2.5" style={{ background: saffron }} />
              <p className="font-manrope font-bold text-[20px] text-temple-brown leading-none mb-1">{s.value}</p>
              <p className="font-manrope text-[10px] text-foreground/55 font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="px-4 mt-5">
        <div className="rounded-[20px] p-4" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.07)" }}>
          <SectionLabel text="The Eternal City" />
          <p className="font-manrope text-[13px] text-foreground/70 leading-[1.85] text-justify">
            Kashi — also known as Varanasi and Banaras — is among the world's oldest continuously inhabited cities, situated on the banks of the holy River Ganga. Older than history, tradition, and legend, Mark Twain famously wrote: <span className="italic text-temple-brown">"Banaras is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together."</span>
          </p>
          <p className="font-manrope text-[13px] text-foreground/70 leading-[1.85] text-justify mt-3">
            It is the spiritual capital of India — where millions of Hindus believe that dying here grants moksha (liberation from the cycle of rebirth). Lord Shiva himself whispers the Tarak Mantra into the ears of those who die in Kashi, ensuring their liberation.
          </p>
        </div>
      </div>

      {/* Photo strip */}
      <div className="flex gap-3 overflow-x-auto px-4 mt-5 pb-2">
        {[imgGhats, imgGangaAarti, imgSaints, imgTarakmantra].map((img, i) => (
          <div key={i} className="shrink-0 w-[140px] h-[100px] rounded-[14px] overflow-hidden" style={{ border: "1px solid rgba(180,120,50,0.14)" }}>
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>

      {/* The Ghats */}
      <div className="px-4 mt-5">
        <div className="rounded-[20px] overflow-hidden" style={{ border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.07)" }}>
          <img src={imgGhats} alt="Ghats of Varanasi" className="w-full h-[160px] object-cover" />
          <div className="p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-[2px] rounded-full" style={{ background: saffron }} />
              <span className="font-manrope text-[10px] font-extrabold uppercase tracking-wider text-[#A85A18]">The Ghats</span>
            </div>
            <h3 className="font-manrope font-bold text-[15px] text-temple-brown mb-2">84 Ghats on the Ganga</h3>
            <p className="font-manrope text-[12.5px] text-foreground/65 leading-[1.8]">
              Varanasi's ghats are riverfronts steps leading to the banks of the River Ganga. Most ghats are bathing and puja ceremony ghats, while two ghats — Manikarnika and Harishchandra — are cremation ghats. The spectacular Ganga Aarti held every evening at Dashashwamedh Ghat is a must-experience.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 mt-6">
        <SectionLabel text="Historical Journey" />
        <div className="space-y-4">
          {TIMELINE.map((entry, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 z-10" style={{ background: saffron }}>
                  <span className="font-manrope font-bold text-white text-[8px] text-center leading-tight px-0.5">{entry.year.split(" ")[0]}</span>
                </div>
                {i < TIMELINE.length - 1 && (
                  <div className="w-px flex-1 mt-1" style={{ background: "linear-gradient(to bottom, rgba(217,124,42,0.4), rgba(217,124,42,0.06))", minHeight: 40 }} />
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="font-manrope text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full text-[#A85A18]" style={{ background: "rgba(168,90,24,0.1)" }}>
                    {entry.era}
                  </span>
                  <span className="font-manrope text-[10px] text-foreground/40">{entry.year}</span>
                </div>
                <h3 className="font-manrope font-bold text-[14px] text-temple-brown leading-tight mb-1.5">{entry.title}</h3>
                <p className="font-manrope text-[12px] text-foreground/65 leading-[1.75] mb-3">{entry.desc}</p>
                <div className="rounded-[14px] overflow-hidden" style={{ border: "1px solid rgba(180,120,50,0.14)" }}>
                  <img src={entry.image} alt={entry.title} className="w-full h-[140px] object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
