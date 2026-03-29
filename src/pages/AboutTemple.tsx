import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import heroTemple from "@/assets/about-temple.jpeg";
import leftSep from "@/assets/left-separator.png";
import rightSep from "@/assets/right-separator.png";
import imgAhilyabai from "@/assets/about-kashi/ahilyabai.jpeg";
import imgAdiVisweswara from "@/assets/about-kashi/adi-visweswara.jpeg";
import imgRanjit from "@/assets/about-kashi/ranjit.jpeg";
import img1669CE from "@/assets/about-kashi/1669-ce.jpeg";
import img2021CE from "@/assets/about-kashi/2021-ce.webp";
import imgGoldenDome from "@/assets/about-kashi/golden-dome.jpeg";

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
    type: "ancient" as const,
    title: "Kashi in the Vedas",
    desc: "The name 'Kashi' appears in the Rigveda, making it among the earliest cities in Indo-Aryan texts. The Skanda Purana declares Kashi as Shiva's eternal abode — resting on his trident, transcending birth and death.",
    image: imgAdiVisweswara,
  },
  {
    year: "1034 CE",
    era: "मध्यकाल",
    type: "destruction" as const,
    title: "Mahmud of Ghazni's Raids",
    desc: "The temple faced repeated destruction during the medieval period. Despite these adversities, devotees never abandoned their faith in Lord Vishwanath.",
    image: img1669CE,
  },
  {
    year: "1585 CE",
    era: "मुग़ल काल",
    type: "construction" as const,
    title: "Raja Todar Mal Reconstructs",
    desc: "Raja Todar Mal — revenue minister of Emperor Akbar — reconstructed the Kashi Vishwanath temple in 1585. This act of devotion restored the sacred shrine to its former glory.",
    image: imgAhilyabai,
  },
  {
    year: "1780 CE",
    era: "मराठा काल",
    type: "construction" as const,
    title: "Ahilyabai Holkar Rebuilds",
    desc: "Maharani Ahilyabai Holkar rebuilt the temple in 1780. Maharaja Ranjit Singh later donated 1,000 kg of gold to plate the twin shikharas in 1835.",
    image: imgRanjit,
  },
  {
    year: "2021 CE",
    era: "आधुनिक काल",
    type: "modern" as const,
    title: "Kashi Vishwanath Corridor",
    desc: "On 13 December 2021, PM Narendra Modi inaugurated the Kashi Vishwanath Dham Corridor — a 5-lakh sq ft development creating a grand axis from the Ganga's ghats to the temple.",
    image: img2021CE,
  },
];

const typeColor: Record<string, string> = {
  ancient: "#8B6914",
  destruction: "#C0622A",
  construction: "#2A7D4F",
  modern: "#1D5FA6",
};

const STATS = [
  { value: "3,500+", label: "Years of Devotion" },
  { value: "12th", label: "Jyotirlinga" },
  { value: "5 Lakh", label: "Sq ft Corridor" },
  { value: "24×7", label: "Darshan Available" },
];

export default function AboutTemple() {
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
          <p className="font-manrope text-[10px] font-bold uppercase tracking-wider text-foreground/40">About</p>
          <h1 className="font-manrope font-bold text-[16px] text-temple-brown leading-none">The Temple</h1>
        </div>
      </div>

      {/* Hero */}
      <div className="relative" style={{ height: 220 }}>
        <img src={heroTemple} alt="Kashi Vishwanath" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,5,0,0.2) 0%, rgba(20,5,0,0.78) 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <SectionLabel text="Ancient History · Significance" />
          <h2 className="font-manrope font-bold text-[26px] text-white leading-tight">Shri Kashi Vishwanath</h2>
          <p className="font-manrope text-[12px] text-white/75 mt-1 leading-snug">One of the twelve sacred Jyotirlingas — Shiva's eternal abode in the city of light</p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mt-5">
        <div className="grid grid-cols-2 gap-2.5">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-[16px] p-4 flex flex-col items-center text-center" style={{ background: "linear-gradient(135deg, rgba(253,244,231,0.95) 0%, rgba(255,250,243,0.8) 100%)", border: "1px solid rgba(180,120,50,0.18)" }}>
              <div className="w-8 h-[2px] rounded-full mb-2.5" style={{ background: saffron }} />
              <p className="font-manrope font-bold text-[20px] text-temple-brown leading-none mb-1">{s.value}</p>
              <p className="font-manrope text-[10px] text-foreground/55 font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About intro */}
      <div className="px-4 mt-5">
        <div className="rounded-[20px] p-4" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.07)" }}>
          <SectionLabel text="The Sacred Jyotirlinga" />
          <p className="font-manrope text-[13px] text-foreground/70 leading-[1.85] text-justify">
            Shri Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva, situated in the holy city of Varanasi (Kashi), Uttar Pradesh. The temple stands on the western bank of the holy river Ganga and is one of the twelve Jyotirlingas, the holiest of Shiva temples.
          </p>
          <p className="font-manrope text-[13px] text-foreground/70 leading-[1.85] text-justify mt-3">
            The main deity is known by the name Vishwanatha or Vishweshwara meaning Ruler of the Universe. The temple town of Kashi has been a center of learning and civilization for thousands of years, mentioned in the most ancient of scriptures.
          </p>
        </div>
      </div>

      {/* Architecture */}
      <div className="px-4 mt-5">
        <div className="rounded-[20px] overflow-hidden" style={{ border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.07)" }}>
          <img src={imgGoldenDome} alt="Golden Dome" className="w-full h-[160px] object-cover" />
          <div className="p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-[2px] rounded-full" style={{ background: saffron }} />
              <span className="font-manrope text-[10px] font-extrabold uppercase tracking-wider text-[#A85A18]">Architecture</span>
            </div>
            <h3 className="font-manrope font-bold text-[15px] text-temple-brown mb-2">Nagara Style Architecture</h3>
            <p className="font-manrope text-[12.5px] text-foreground/65 leading-[1.8]">
              The temple features the classic Nagara style of North Indian temple architecture. The main Shikara (spire) is plated with gold, donated by Maharaja Ranjit Singh in 1835. The temple complex includes small shrines to Kaal Bhairav, Dandapani, Avimukteshwara, Vishnu, Vinayaka, Sanishwara, Virupaksha, and Virupaksha Gauri.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 mt-6">
        <SectionLabel text="Historical Timeline" />
        <div className="space-y-4">
          {TIMELINE.map((entry, i) => (
            <div key={i} className="flex gap-3">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 z-10" style={{ background: saffron }}>
                  <span className="font-manrope font-bold text-white text-[8px] text-center leading-tight px-0.5">{entry.year.split(" ")[0]}</span>
                </div>
                {i < TIMELINE.length - 1 && (
                  <div className="w-px flex-1 mt-1" style={{ background: "linear-gradient(to bottom, rgba(217,124,42,0.4), rgba(217,124,42,0.06))", minHeight: 40 }} />
                )}
              </div>
              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="font-manrope text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ color: typeColor[entry.type], background: `${typeColor[entry.type]}18` }}>
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

      {/* Visiting Info */}
      <div className="px-4 mt-6">
        <div className="rounded-[20px] p-4" style={{ background: saffron }}>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-white/70" />
            <span className="font-manrope font-bold text-white text-[13px]">Darshan Timings</span>
          </div>
          {[
            { name: "Mangala Aarti", time: "3:00 – 4:00 AM" },
            { name: "General Darshan", time: "4:00 AM – 11:00 PM" },
            { name: "Bhog Aarti", time: "11:15 – 12:20 PM" },
            { name: "Sandhya Aarti", time: "7:00 – 8:15 PM" },
            { name: "Shayan Aarti", time: "10:30 – 11:00 PM" },
          ].map(({ name, time }) => (
            <div key={name} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
              <span className="font-manrope text-[12px] text-white/80">{name}</span>
              <span className="font-manrope font-bold text-[12px] text-white">{time}</span>
            </div>
          ))}
          <div className="flex items-start gap-2 mt-3">
            <MapPin className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
            <p className="font-manrope text-[11px] text-white/70 leading-snug">Vishwanath Gali, Varanasi, Uttar Pradesh 221001</p>
          </div>
        </div>
      </div>

    </div>
  );
}
