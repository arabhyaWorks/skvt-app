import { useState } from "react";

const saffron = "linear-gradient(135deg, #D97C2A 0%, #A85A18 100%)";

const PRODUCTS = [
  { id: 1, name: "Shiva Brass Idol", category: "Idols", price: 1299, mrp: 1800, rating: 4.5, emoji: "🗿", color: "#8B7355" },
  { id: 2, name: "Panch Mukhi Rudraksha", category: "Rudraksha", price: 549, mrp: 799, rating: 4.8, emoji: "📿", color: "#6B4226" },
  { id: 3, name: "Kashi Vishwanath Painting", category: "Paintings", price: 2499, mrp: 3200, rating: 4.7, emoji: "🖼️", color: "#A0522D" },
  { id: 4, name: "Ganga Jal", category: "Puja Items", price: 199, mrp: 250, rating: 4.9, emoji: "🏺", color: "#4A7B8C" },
  { id: 5, name: "Shiv Chalisa Book", category: "Books", price: 99, mrp: 150, rating: 4.6, emoji: "📖", color: "#7B6B4E" },
  { id: 6, name: "Temple Prasad Box", category: "Puja Items", price: 349, mrp: 400, rating: 4.8, emoji: "🍬", color: "#8B5E3C" },
  { id: 7, name: "Mahadev T-Shirt", category: "Clothing", price: 699, mrp: 999, rating: 4.3, emoji: "👕", color: "#4A5568" },
  { id: 8, name: "Trishul Silver Pendant", category: "Idols", price: 899, mrp: 1200, rating: 4.7, emoji: "🔱", color: "#9B8A6A" },
  { id: 9, name: "Incense Sticks Set", category: "Puja Items", price: 249, mrp: 300, rating: 4.5, emoji: "🕯️", color: "#8B7355" },
  { id: 10, name: "Varanasi Silk Dupatta", category: "Clothing", price: 1499, mrp: 2000, rating: 4.6, emoji: "🧣", color: "#8B4A7A" },
];

const CATEGORIES = ["All", "Idols", "Rudraksha", "Books", "Clothing", "Puja Items", "Paintings"];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} viewBox="0 0 12 12" className="w-3 h-3" fill={s <= Math.round(rating) ? "#D97C2A" : "rgba(180,120,60,0.2)"}>
          <path d="M6 1l1.4 2.9 3.1.4-2.3 2.2.6 3.1L6 8.2l-2.8 1.4.6-3.1L1.5 4.3l3.1-.4z"/>
        </svg>
      ))}
      <span className="font-manrope text-[10px] text-foreground/45 ml-0.5">{rating}</span>
    </div>
  );
}

export default function Souvenir() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const cartItems = PRODUCTS.filter((p) => cart.includes(p.id));
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  function toggleWishlist(id: number) {
    setWishlist((w) => w.includes(id) ? w.filter((x) => x !== id) : [...w, id]);
  }
  function toggleCart(id: number) {
    setCart((c) => c.includes(id) ? c.filter((x) => x !== id) : [...c, id]);
  }

  return (
    <div className="min-h-full bg-background">
      <div className="pt-12" />

      {/* Header */}
      <div className="px-4 mb-4 flex items-center justify-between">
        <h1 className="font-manrope font-bold text-[20px] text-temple-brown">Temple Souvenir</h1>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full relative" style={{ background: "rgba(180,120,60,0.08)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#D97C2A" strokeWidth="2" className="w-5 h-5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round"/>
            </svg>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold text-white flex items-center justify-center" style={{ background: saffron }}>{wishlist.length}</span>
            )}
          </button>
          <button onClick={() => setShowCart(true)} className="w-9 h-9 flex items-center justify-center rounded-full relative" style={{ background: "rgba(180,120,60,0.08)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#D97C2A" strokeWidth="2" className="w-5 h-5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round"/>
              <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round"/>
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold text-white flex items-center justify-center" style={{ background: saffron }}>{cart.length}</span>
            )}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 mb-3">
        <div className="flex items-center gap-3 px-4 py-3 rounded-[14px]" style={{ background: "#fff", border: "1.5px solid rgba(180,120,60,0.18)", boxShadow: "0 2px 10px rgba(100,50,15,0.06)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="rgba(180,120,60,0.5)" strokeWidth="2" className="w-4 h-4 shrink-0">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" strokeLinecap="round"/>
          </svg>
          <input type="text" placeholder="Search souvenirs…" value={search} onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent font-manrope text-[14px] text-foreground placeholder:text-foreground/30 focus:outline-none"/>
        </div>
      </div>

      {/* Category chips */}
      <div className="flex gap-2 px-4 pb-4 overflow-x-auto">
        {CATEGORIES.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className="shrink-0 px-4 py-1.5 rounded-full font-manrope font-semibold text-[12px] transition-all active:scale-95"
            style={activeCategory === cat
              ? { background: saffron, color: "#fff", boxShadow: "0 3px 12px rgba(168,90,24,0.3)" }
              : { background: "#fff", color: "#A85A18", border: "1.5px solid rgba(180,120,60,0.22)" }
            }
          >{cat}</button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-3 px-4 pb-6">
        {filtered.map((p) => {
          const inWishlist = wishlist.includes(p.id);
          const inCart = cart.includes(p.id);
          const discount = Math.round((1 - p.price / p.mrp) * 100);
          return (
            <div key={p.id} className="rounded-[18px] overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.12)", boxShadow: "0 2px 16px rgba(100,50,15,0.08)" }}>
              <div className="h-[100px] flex items-center justify-center text-[48px] relative" style={{ background: `${p.color}14` }}>
                {p.emoji}
                <button onClick={() => toggleWishlist(p.id)} className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.85)" }}>
                  <svg viewBox="0 0 24 24" fill={inWishlist ? "#D97C2A" : "none"} stroke={inWishlist ? "#D97C2A" : "rgba(180,120,60,0.5)"} strokeWidth="2" className="w-4 h-4">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round"/>
                  </svg>
                </button>
                {discount > 0 && (
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-[6px] font-manrope font-bold text-[9px] text-white" style={{ background: "#E53E3E" }}>{discount}% OFF</span>
                )}
              </div>
              <div className="p-3">
                <p className="font-manrope font-bold text-[12.5px] text-temple-brown leading-tight">{p.name}</p>
                <Stars rating={p.rating} />
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="font-manrope font-bold text-[13px] text-temple-gold">₹{p.price}</span>
                  <span className="font-manrope text-[10.5px] text-foreground/35 line-through">₹{p.mrp}</span>
                </div>
                <button
                  onClick={() => toggleCart(p.id)}
                  className="w-full mt-2 py-2 rounded-[10px] font-manrope font-bold text-[11.5px] transition-all active:scale-95"
                  style={inCart
                    ? { background: "rgba(217,124,42,0.1)", color: "#D97C2A", border: "1.5px solid rgba(217,124,42,0.3)" }
                    : { background: saffron, color: "#fff" }
                  }
                >
                  {inCart ? "✓ Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Bottom Sheet */}
      {showCart && (
        <div className="fixed inset-0 z-50" onClick={() => setShowCart(false)}>
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] rounded-t-[24px] overflow-hidden" style={{ background: "#FFFAF4" }} onClick={(e) => e.stopPropagation()}>
            <div className="px-4 pt-5 pb-3 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(180,120,60,0.1)" }}>
              <h3 className="font-manrope font-bold text-[17px] text-temple-brown">My Cart ({cart.length})</h3>
              <button onClick={() => setShowCart(false)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(180,120,60,0.1)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#5C2D0E" strokeWidth="2" className="w-4 h-4"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>
              </button>
            </div>
            {cartItems.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-[40px] mb-3">🛒</p>
                <p className="font-manrope text-[14px] text-foreground/45">Your cart is empty</p>
              </div>
            ) : (
              <div className="p-4 space-y-3 max-h-[50vh] overflow-y-auto">
                {cartItems.map((p) => (
                  <div key={p.id} className="flex items-center gap-3 p-3 rounded-[14px]" style={{ background: "#fff", border: "1px solid rgba(180,120,60,0.1)" }}>
                    <div className="w-12 h-12 rounded-[10px] flex items-center justify-center text-[24px]" style={{ background: `${p.color}14` }}>{p.emoji}</div>
                    <div className="flex-1">
                      <p className="font-manrope font-bold text-[13px] text-temple-brown">{p.name}</p>
                      <p className="font-manrope font-bold text-[12px] text-temple-gold">₹{p.price}</p>
                    </div>
                    <button onClick={() => toggleCart(p.id)} className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(220,50,50,0.08)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth="2" className="w-3.5 h-3.5"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>
                    </button>
                  </div>
                ))}
                <div className="rounded-[14px] p-4" style={{ background: "rgba(255,248,235,0.8)", border: "1px solid rgba(180,120,60,0.15)" }}>
                  <div className="flex justify-between mb-1">
                    <span className="font-manrope text-[13px] text-foreground/55">Subtotal</span>
                    <span className="font-manrope font-bold text-[13px] text-temple-brown">₹{total}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="font-manrope text-[13px] text-foreground/55">Delivery</span>
                    <span className="font-manrope font-bold text-[13px] text-green-600">FREE</span>
                  </div>
                  <button className="w-full py-3.5 rounded-[14px] font-manrope font-bold text-white text-[14px] active:scale-[0.99]" style={{ background: saffron }}>
                    Proceed to Checkout — ₹{total}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
