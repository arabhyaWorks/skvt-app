import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Users, Building2 } from "lucide-react";
import leftSep from "@/assets/left-separator.png";
import rightSep from "@/assets/right-separator.png";
import heroTemple from "@/assets/hero/hero-temple.jpg";
import imgRajalingam from "@/assets/about-trust/rajalingam-sir.png";
import imgSatyendra from "@/assets/about-trust/satyendra-kumar.jpg";
import imgVishwaBhusan from "@/assets/about-trust/vishwabhusan-sir.jpeg";

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

interface Member {
  name?: string;
  role: string;
  institution?: string;
  image?: string;
  badge: string;
}

const exOfficioMembers: Member[] = [
  { name: "श्री एस० राजलिंगम (आई.ए.एस.)", role: "आयुक्त, वाराणसी मण्डल", institution: "वाराणसी", image: imgRajalingam, badge: "पदेन सदस्य" },
  { name: "श्री सत्येन्द्र कुमार (आई.ए.एस.)", role: "जिलाधिकारी", institution: "वाराणसी", image: imgSatyendra, badge: "पदेन सदस्य" },
  { name: "श्री विश्व भूषण (पी.सी.एस.)", role: "मुख्य कार्यपालक अधिकारी", institution: "श्री काशी विश्वनाथ मंदिर न्यास, वाराणसी", image: imgVishwaBhusan, badge: "पदेन सदस्य" },
  { role: "जगतगुरु शंकराचार्य", institution: "श्रृंगेरी मठ", badge: "पदेन सदस्य" },
  { role: "कुलपति", institution: "संपूर्णानंद संस्कृत विश्वविद्यालय, वाराणसी", badge: "पदेन सदस्य" },
  { role: "सचिव, धर्मार्थ कार्य विभाग", institution: "उत्तर प्रदेश सरकार", badge: "पदेन सदस्य" },
];

const PILLARS = [
  { icon: Shield, title: "Temple Administration", desc: "Managing daily rituals, aartis, and darshan facilities for crores of devotees every year." },
  { icon: Users, title: "Devotee Services", desc: "Providing prasad, accommodation, and assistance to pilgrims from across India and the world." },
  { icon: Building2, title: "Heritage Preservation", desc: "Maintaining the ancient temple complex and ensuring its architectural and spiritual integrity." },
];

export default function AboutTrust() {
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
          <p className="font-manrope text-[10px] font-bold uppercase tracking-wider text-foreground/40">Governance</p>
          <h1 className="font-manrope font-bold text-[16px] text-temple-brown leading-none">About the Trust</h1>
        </div>
      </div>

      {/* Hero */}
      <div className="relative" style={{ height: 200 }}>
        <img src={heroTemple} alt="Temple" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,5,0,0.2) 0%, rgba(20,5,0,0.82) 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <SectionLabel text="Trust & Administration" />
          <h2 className="font-manrope font-bold text-[20px] text-white leading-tight">श्री काशी विश्वनाथ मंदिर न्यास</h2>
          <p className="font-manrope text-[11px] text-white/70 mt-1">Shri Kashi Vishwanath Mandir Nyas · Est. 28 January 1983</p>
        </div>
      </div>

      {/* Formation info */}
      <div className="px-4 mt-5">
        <div className="rounded-[20px] p-4" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.07)" }}>
          <SectionLabel text="न्यास का गठन" />
          <p className="font-manrope text-[13px] text-foreground/70 leading-[1.85] text-justify">
            श्री काशी विश्वनाथ मंदिर में होने वाले दैनिक कार्यक्रमों के सफल सञ्चालन हेतु दिनांक{" "}
            <span className="font-bold text-temple-brown">28 जनवरी 1983</span> को उत्तर प्रदेश सरकार की अध्यादेश संख्या{" "}
            <span className="font-bold text-temple-brown">2899(2)-XVII-V-(ka)-8-1983</span> के अंतर्गत श्री काशी विश्वनाथ मंदिर न्यास का गठन किया गया।
          </p>
          <p className="font-manrope text-[13px] text-foreground/70 leading-[1.85] mt-3 text-justify">
            न्यास अध्यक्ष समेत इसमें सदस्यों की कुल संख्या <span className="font-bold text-temple-brown">15</span> है — जिनमें से{" "}
            <span className="font-bold text-temple-brown">छः सदस्य</span> राज्य सरकार द्वारा नामित हैं तथा शेष{" "}
            <span className="font-bold text-temple-brown">नौ सदस्य</span> पदेन होते हैं।
          </p>

          {/* Ordinance tag */}
          <div className="mt-4 rounded-[14px] px-4 py-3 flex items-center gap-3" style={{ background: "rgba(253,244,231,0.9)", border: "1px solid rgba(180,120,50,0.18)" }}>
            <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: saffron }}>
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-manrope font-bold text-[12px] text-temple-brown">Government of Uttar Pradesh</p>
              <p className="font-manrope text-[11px] text-foreground/55 leading-snug">Established under UP Government Ordinance No. 2899(2)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { value: "15", label: "Trust Members" },
            { value: "1983", label: "Established" },
            { value: "24×7", label: "Services" },
          ].map((s) => (
            <div key={s.label} className="rounded-[16px] p-3 flex flex-col items-center text-center" style={{ background: "linear-gradient(135deg, rgba(253,244,231,0.95) 0%, rgba(255,250,243,0.8) 100%)", border: "1px solid rgba(180,120,50,0.18)" }}>
              <div className="w-6 h-[2px] rounded-full mb-2" style={{ background: saffron }} />
              <p className="font-manrope font-bold text-[18px] text-temple-brown leading-none mb-1">{s.value}</p>
              <p className="font-manrope text-[9px] text-foreground/55 font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <div className="px-4 mt-5">
        <SectionLabel text="Our Mission" />
        <div className="space-y-3">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-[18px] p-4 flex items-start gap-4" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 12px rgba(100,50,15,0.06)" }}>
              <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0" style={{ background: "rgba(217,124,42,0.1)" }}>
                <Icon className="w-5 h-5 text-temple-gold" />
              </div>
              <div>
                <p className="font-manrope font-bold text-[13px] text-temple-brown">{title}</p>
                <p className="font-manrope text-[11.5px] text-foreground/60 mt-0.5 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Members */}
      <div className="px-4 mt-6">
        <SectionLabel text="पदेन सदस्य · Ex-Officio Members" />
        <div className="grid grid-cols-2 gap-3">
          {exOfficioMembers.map((m, i) => (
            <div key={i} className="rounded-[18px] overflow-hidden flex flex-col" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 3px 16px rgba(100,50,15,0.08)" }}>
              {/* Photo */}
              <div className="relative h-[120px] overflow-hidden" style={{ background: "rgba(253,244,231,0.6)" }}>
                {m.image ? (
                  <img src={m.image} alt={m.name ?? m.role} className="w-full h-full object-cover object-top" loading="lazy" />
                ) : (
                  <div className="w-full h-full flex items-end justify-center pb-0" style={{ background: "linear-gradient(180deg, rgba(217,124,42,0.08) 0%, rgba(168,90,24,0.14) 100%)" }}>
                    <Users className="w-12 h-12 text-temple-gold/30 mb-4" />
                  </div>
                )}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full" style={{ background: saffron }}>
                  <span className="font-manrope text-[8px] font-extrabold uppercase tracking-wider text-white">{m.badge}</span>
                </div>
              </div>
              {/* Info */}
              <div className="p-3 flex flex-col flex-1">
                <div className="w-5 h-[2px] rounded-full mb-2" style={{ background: saffron }} />
                {m.name && <p className="font-manrope font-bold text-[11.5px] text-temple-brown leading-snug mb-1">{m.name}</p>}
                <p className="font-manrope text-[11px] text-foreground/65 leading-snug">{m.role}</p>
                {m.institution && (
                  <p className="font-manrope text-[10px] text-foreground/45 leading-snug mt-auto pt-2" style={{ borderTop: "1px solid rgba(180,120,50,0.10)" }}>{m.institution}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Nominated members note */}
        <div className="mt-3 rounded-[16px] px-4 py-3.5" style={{ background: "rgba(253,244,231,0.8)", border: "1px solid rgba(180,120,50,0.15)" }}>
          <p className="font-manrope font-bold text-[12px] text-temple-brown">नामित सदस्य · Nominated Members</p>
          <p className="font-manrope text-[11.5px] text-foreground/60 mt-1 leading-snug">6 additional members are nominated by the State Government of Uttar Pradesh to serve on the Trust.</p>
        </div>
      </div>

    </div>
  );
}
