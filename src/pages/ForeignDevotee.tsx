import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, FileText, CheckCircle, Globe } from "lucide-react";
import leftSep from "@/assets/left-separator.png";
import rightSep from "@/assets/right-separator.png";
import heroTemple from "@/assets/hero/hero-temple.jpg";

const saffron = "linear-gradient(135deg, #D97C2A 0%, #A85A18 100%)";

const HELPDESK_MAP_URL = "https://www.google.com/maps/place/Shri+Kashi+Vishwanath+Temple+Trust+Helpdesk/@25.3115005,82.9902533,15z";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <img src={leftSep} alt="" className="w-10 object-contain opacity-80" />
      <span className="font-manrope text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#A85A18]">{text}</span>
      <img src={rightSep} alt="" className="w-10 object-contain opacity-80" />
    </div>
  );
}

const STEPS = [
  {
    number: "01",
    icon: MapPin,
    title: "Visit Helpdesk",
    subtitle: "Head Office — Varanasi",
    desc: "Foreign devotees must first visit our designated Head Office helpdesk to initiate the darshan registration process.",
    details: [
      "CK – 37/40-41-42, Near Shapuri Mall, Bashfatak, Varanasi – 221001",
      "+91 6393 131 608",
      "+91 7080 292 930",
    ],
    note: "Ticket booking for foreign devotees is exclusively available at the Head Office helpdesk.",
    isAddress: true,
  },
  {
    number: "02",
    icon: FileText,
    title: "Verify Passport",
    subtitle: "Document Verification",
    desc: "Present your original travel documents at the Darshan Booking Desk for verification.",
    details: [
      "Present original passport to the helpdesk executive",
      "Submit a photocopy of your valid passport",
      "Submit a photocopy of your current visa",
    ],
    note: "Document copies are retained solely for security and record-keeping purposes.",
    isAddress: false,
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Happy Darshan",
    subtitle: "Sacred Blessings Await",
    desc: "Upon verification, receive your darshan ticket and experience the divine presence of Lord Vishwanath.",
    details: [
      "Darshan ticket — ₹600 per person",
      "Receive sacred Prasadam as divine offering",
      "Receive Ang-Vastram (ritual cloth) for the darshan",
    ],
    note: "A dedicated Shastri will assist you throughout your darshan experience.",
    isAddress: false,
  },
];

const DOCS = [
  "Valid international passport",
  "Current valid visa for India",
  "Photocopy of passport (all relevant pages)",
  "Photocopy of visa",
  "Darshan fee of ₹600 per person",
];

const COUNTRIES = [
  "USA", "UK", "Canada", "Australia", "Germany",
  "France", "Japan", "Singapore", "UAE", "Nepal",
  "Sri Lanka", "Bangladesh", "Myanmar", "Thailand", "All Others",
];

export default function ForeignDevotee() {
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
          <p className="font-manrope text-[10px] font-bold uppercase tracking-wider text-foreground/40">NRI · International</p>
          <h1 className="font-manrope font-bold text-[16px] text-temple-brown leading-none">Foreign Devotee</h1>
        </div>
      </div>

      {/* Hero */}
      <div className="relative" style={{ height: 200 }}>
        <img src={heroTemple} alt="Temple" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,5,0,0.2) 0%, rgba(20,5,0,0.82) 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <SectionLabel text="International · NRI Devotees" />
          <h2 className="font-manrope font-bold text-[22px] text-white leading-tight">Foreign Devotee Darshan</h2>
          <p className="font-manrope text-[12px] text-white/75 mt-1 leading-snug">A sacred welcome to international devotees at Shri Kashi Vishwanath Temple</p>
        </div>
      </div>

      {/* Welcome note */}
      <div className="px-4 mt-5">
        <div className="rounded-[20px] p-4 flex items-start gap-4" style={{ background: saffron }}>
          <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.15)" }}>
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-manrope font-bold text-white text-[13px]">Welcome, International Devotee</p>
            <p className="font-manrope text-white/80 text-[11.5px] mt-1 leading-snug">Shri Kashi Vishwanath Temple warmly welcomes devotees from across the world. A special darshan facility with dedicated assistance is available for foreign nationals.</p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="px-4 mt-6">
        <SectionLabel text="Darshan Process" />
        <div className="space-y-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="rounded-[20px] overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 3px 16px rgba(100,50,15,0.07)" }}>
                {/* Step header */}
                <div className="px-4 py-3 flex items-center gap-3" style={{ background: "linear-gradient(135deg, rgba(253,244,231,0.9) 0%, rgba(255,250,243,0.7) 100%)", borderBottom: "1px solid rgba(180,120,50,0.1)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: saffron }}>
                    <span className="font-manrope font-bold text-white text-[11px]">{step.number}</span>
                  </div>
                  <div>
                    <p className="font-manrope font-bold text-[14px] text-temple-brown leading-none">{step.title}</p>
                    <p className="font-manrope text-[10.5px] text-foreground/50 mt-0.5">{step.subtitle}</p>
                  </div>
                  <Icon className="w-5 h-5 text-temple-gold ml-auto" />
                </div>
                {/* Step body */}
                <div className="p-4">
                  <p className="font-manrope text-[12.5px] text-foreground/70 leading-[1.75] mb-3">{step.desc}</p>
                  <div className="space-y-2">
                    {step.details.map((d, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        {step.isAddress && j === 0 ? (
                          <MapPin className="w-3.5 h-3.5 text-temple-brown shrink-0 mt-0.5" />
                        ) : step.isAddress ? (
                          <Phone className="w-3.5 h-3.5 text-temple-brown shrink-0 mt-0.5" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: saffron }} />
                        )}
                        {step.isAddress && j > 0 ? (
                          <a href={`tel:${d.replace(/\s/g, "")}`} className="font-manrope text-[12.5px] font-semibold text-temple-brown">{d}</a>
                        ) : (
                          <span className="font-manrope text-[12.5px] text-foreground/65 leading-snug">{d}</span>
                        )}
                      </div>
                    ))}
                  </div>
                  {step.isAddress && (
                    <a
                      href={HELPDESK_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 font-manrope font-bold text-[12px] text-white px-4 py-2 rounded-full"
                      style={{ background: saffron }}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Get Directions
                    </a>
                  )}
                  <div className="mt-3 rounded-[10px] px-3 py-2.5" style={{ background: "rgba(253,244,231,0.7)", border: "1px solid rgba(180,120,50,0.14)" }}>
                    <p className="font-manrope text-[11px] text-foreground/55 leading-snug italic">{step.note}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Documents required */}
      <div className="px-4 mt-6">
        <div className="rounded-[20px] p-4" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.07)" }}>
          <SectionLabel text="Documents Required" />
          <div className="space-y-2.5">
            {DOCS.map((doc, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(217,124,42,0.12)" }}>
                  <span className="font-manrope font-bold text-[9px] text-temple-gold">{i + 1}</span>
                </div>
                <span className="font-manrope text-[12.5px] text-foreground/70 leading-snug">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countries welcome */}
      <div className="px-4 mt-5">
        <div className="rounded-[20px] p-4" style={{ background: "linear-gradient(160deg, #3B1A05 0%, #6B3010 100%)", boxShadow: "0 4px 16px rgba(100,50,15,0.2)" }}>
          <SectionLabel text="Devotees Welcome From" />
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <span key={c} className="font-manrope text-[11px] font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}>{c}</span>
            ))}
          </div>
          <p className="font-manrope text-[11px] text-white/50 mt-3 text-center">And devotees from all nations across the world</p>
        </div>
      </div>

      {/* Contact */}
      <div className="px-4 mt-5">
        <div className="rounded-[20px] p-4" style={{ background: "rgba(255,248,235,0.8)", border: "1px solid rgba(180,120,60,0.15)" }}>
          <p className="font-manrope font-bold text-[13px] text-temple-brown mb-3">Need Help? Contact Us</p>
          <div className="space-y-2.5">
            {["+91 6393 131 608", "+91 7080 292 930"].map((num) => (
              <a key={num} href={`tel:${num.replace(/\s/g, "")}`} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[10px] flex items-center justify-center" style={{ background: saffron }}>
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-manrope font-bold text-[13px] text-temple-brown">{num}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
